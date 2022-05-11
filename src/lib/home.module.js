import { routeHandler,todoSR } from "../app";

class Home{
    totalTask;
    doneTask;
    username=localStorage.getItem('username');

    constructor(){

        this.totalTask = document.getElementById('total-task');
        this.doneTask = document.getElementById('done-task');

        document.getElementById('date').innerHTML = new Date().toDateString();
        document.getElementById('username').innerHTML = `Hello, `+ localStorage.getItem('username');

        this.onInit();
        this.navigateEvent();
    }

    /**
     * Function for adding click event for navigation to different tasks page.
     */
    navigateEvent(){
        const catList = document.querySelectorAll('.cat-list');
        catList.forEach(cat=>{
            cat.addEventListener('click',(event)=>{
                event.cancelBubble = true;
                event.stopPropagation();
                event.preventDefault();
                const href = "tasks?category="+event.target.id;
                console.log(href);
                window.history.pushState({},"",href);
                routeHandler(); 
            },false);
        });
    }


    /**
     * For initializing the value for tasks count.
     */
    onInit(){
        this.doneTask.innerHTML = todoSR.taskDone;
        this.totalTask.innerHTML = todoSR.taskList.length;

        document.getElementById('c-all').innerHTML = `${todoSR.taskList.length} Tasks`;
        document.getElementById('c-work').innerHTML = `${todoSR.categoryCount.work} Tasks`;
        document.getElementById('c-personal').innerHTML = `${todoSR.categoryCount.personal} Tasks`;
        document.getElementById('c-school').innerHTML = `${todoSR.categoryCount.school} Tasks`;
        document.getElementById('c-grocery').innerHTML = `${todoSR.categoryCount.grocery} Tasks`;
    }


}

export {Home};