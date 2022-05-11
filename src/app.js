import { Tasks } from './lib/tasks.module';
import { Home } from './lib/home.module';
import { AddTask } from './lib/addtask.module';

import './assets/logo.svg';
import './styles/style.scss';

import { TodoService } from './lib/todo.service';

// creating instance of TodoService globally (by exporting it) that will handle the actions related to localstorage data.
var todoSR = new TodoService();

todoSR.setCategoryCount();
todoSR.setDoneCount();

// getting the element that will contain the rendered data based on the navigation.
const main = document.getElementById("outlet");
const navLink = document.getElementById("home");

// Route Object that help in fetching the required component at a time.
const ROUTES = {
    'NA':{
        id:null,
        component:"./components/404.html",
        title:"404 | Todo SPA",
        descripton:"404 page not found"
    },
    404:{
        id:null,
        component:"./components/404.html",
        title:"404 | Todo SPA",
        descripton:"404 page not found"
    },
    "home":{
        id:'home',
        component:"./components/home.html",
        title:"Home | Todo SPA",
        descripton:"Home Page",
        // this key function is used for initializing the dynamic content and adding eventlisterns.
        init:()=>{return new Home();}                           
    },
    "tasks":{
        id:null,
        component:"./components/tasks.html",
        title:"Tasks | Todo SPA",
        descripton:"Tasks Page",
        init:()=>{return new Tasks();}
    },
    "add":{
        id:null,
        component:"./components/add.html",
        title:"Add Task | Todo SPA",
        descripton:"Add Task Page",
        init:()=>{return new AddTask();}
    }
}

var prevRoute = '';


/**
 * We are creating SPA by using JS only,
 * 1 .So we are firstly listening to click events that are dispached by navigation links and preventing it from default action.
 * 2. Then we are pushing the new state into history
 * 3. On based of the new path in URL , we are fetching the template and initializing it with required events.
 */
const anchor = document.querySelectorAll('a');
anchor.forEach((a)=>{
    a.addEventListener('click',(e)=>{
        const { target } = e;
        
        if(!target.matches("ul li a") && !target.matches("#addForm") && !target.matches("a#add")) 
            return;

        e.preventDefault();

        if(localStorage.getItem('username'))
            route(e);     
    });
});



const route = (event)=>{
    event.preventDefault();
    const href = event.target.href || event.target.form.action; 

    window.history.pushState({},"",href);

    routeHandler();
}


const routeHandler = async ()=>{

    let location = window.location.pathname.split('/').pop();       // for getting the last pathname.
    console.log(location);
    if(location.length === 0){
        location = "home";
    }

    const route = ROUTES[location] || ROUTES[404];
    let html='',init;

    // checks if there is change in state then only fetch the template.
    if(prevRoute !== window.location.href){ 

        // for making the link highlighted if it is present in our header. 
        if(route.id!==null)
            navLink.classList.add('active-link');
        else
            navLink.classList.remove('active-link');

        // fetching the template using fetch() and returning the data in form of text.
        html = await fetch(route.component).then(res=>res.text());
        
        main.innerHTML = html;
        document.title = route.title;
        document.querySelector('meta[name="description"]').setAttribute('content',route.descripton);

        prevRoute = window.location.href;
        
        if(route.init){
            // initializing the template with its required events and data.
            init = route.init();
        }
    }

}

// for input the username if User is new to app.
function setUsername() {
    if(localStorage.getItem('username')===null){
        main.innerHTML = `
        <section class="add-task-content">
            <div class="add-task" >
                <form id="userForm" method="post">
                    <div class="input-group">
                        <label for="username" ><h3>Enter your name :</h3></label>
                        <input type="text" name="username" id="username" required>
                    </div>
                    <button type="submit" >Save</button>
                </form>
            </div>
        </section>
        `;

        const userForm = main.querySelector("#userForm");
        userForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            e.stopPropagation();
            localStorage.setItem('username',userForm.children[0].children[1].value);
            routeHandler();
        });
        return false;
    }

    return true;
}

window.onpopstate = routeHandler;
window.route = route;

if(setUsername())
    routeHandler();             // for initial navigation based on if user is new or not.


// exporting routeHandler for redirection if user adds a task.
// 
export {routeHandler,todoSR};
