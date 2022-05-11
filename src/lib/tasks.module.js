import { todoSR } from '../app';

class Tasks{
    tabBtns;
    category;
    section='Priority';
    taskList = [];

    constructor(){

        const urlParams = new URLSearchParams(window.location.search);
        this.category = urlParams.get('category') || "All"; 
        document.getElementById('category').innerHTML = this.category + " Tasks";
        
        let date = document.getElementById('date');
        date.innerHTML = new Date().toDateString();
        
        this.dateBtn = document.getElementById('dateBtn');
        this.opentab();

        this.renderTaskList('Priority');
        document.getElementById('task-count').innerHTML = `Total : ${this.taskList.length} tasks`;

    }

    /**
     * adding click events for switching between the tabs [priority, pending , done].
     */
    opentab(){
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabBtns.forEach(btn => {
            if(btn.name === 'Priority')
                btn.classList.add('active-tab-btn')
                btn.addEventListener('click',(event)=>{
                    
                    var x = document.getElementsByClassName("tab"),i;
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";
                        x[i].innerHTML = '';
                    }

                    const curr = document.getElementById(event.target.name);
                    curr.innerHTML = '';
                    curr.style.display = "block";
                    
                    this.tabBtns.forEach(b=>{
                        if(b.name === event.target.name)
                        b.classList.add('active-tab-btn');
                        else
                        b.classList.remove('active-tab-btn');
                    });
                    
                    this.section = event.target.name;
                    this.renderTaskList(event.target.name);

                });
        });
    }

    /**
     * to render the task list from the Localstorage.
     * @param {string} type : which tab is active 
     * 
     */
    renderTaskList(type){

        let tl = this.getTaskListType(type);
        const el = document.getElementById(type);
        el.innerHTML = ``;
       
        if(tl.length===0){
            el.innerHTML = `<p>No Task Found<p>`;
            return;
        }
       
        tl.forEach(t => {
            el.innerHTML += `

            <div>
              <div class="d-grid-col p-10">
                <label class="task-check">
                  <input type="checkbox" id="${t.id}" ${t.checked?'checked':''}>
                  <span class="checkmark"></span>
                  <div class="task-title">
                    <p>${t.title}</p>
                    <p>
                        <span>${ new Date(t.date).toDateString()}</span>
                        <span>${ new Date(t.date).toLocaleString('en-IN', { hour:'numeric',minute:'numeric',dayPeriod:'narrow', hour12: true })}</span>
                    </p>
                  </div>
                </label>
                <div class="action">
                  <button class="delete" value="${t.id}">&#9587;</button>
                  <!-- <button class="edit" onclick="((e)=>{e.style.background='red'})(this)" >&#10000;</button> -->
                </div>
              </div>
            </div>

            `;
        });

        this.setTaskEvents();

    }


    /**
     * 
     * @param {string} type of tab active. 
     * @returns {Array<Object>} tasks list after sorting it.
     */
    getTaskListType(type){
        
        if(type==='Done'){
           return this.taskList.filter(t=>t.checked===true).sort((t1,t2)=>{
            return  (new Date(t2.date)) - (new Date(t1.date));
        }); 
        }else if(type==='Pending'){
            return this.taskList.filter(t=>t.checked===false).sort((t1,t2)=>{
                return  (new Date(t2.date)) - (new Date(t1.date));
            });
        }
        else{
            
            if(this.category==='all')
                this.taskList = todoSR.taskList;
            else
                this.taskList = todoSR.getCategoryTasks(this.category);
    
                this.taskList = this.taskList.sort((t1,t2)=>{
                    return  (new Date(t2.date)) - (new Date(t1.date));
                });

                return this.taskList;
        }
    }


    /**
     * Adding the change and click event on checkbox and delete button respectively.
     */
    setTaskEvents(){
        let tasks = document.querySelectorAll("input[type='checkbox']");
        tasks.forEach(t=>{
            t.addEventListener('change',(e)=>{
                e.cancelBubble = true;
                e.stopPropagation();
                todoSR.updateTask(t.id);
                this.renderTaskList(this.section);
            });
        });
        
        let deleteBtns = document.querySelectorAll('.action .delete');
        deleteBtns.forEach(d=>{
            d.addEventListener('click',(e)=>{
                e.cancelBubble = true;
                e.stopPropagation();
                const tid = e.target.value;
                todoSR.deleteTask(tid);
                this.taskList = todoSR.getCategoryTasks(this.category);
                this.renderTaskList(this.section);
            });
        });
    }

}


export {Tasks};