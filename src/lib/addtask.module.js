import { routeHandler, todoSR } from "../app";

class AddTask{
    addForm;

    constructor(){
        this.addForm = document.getElementById('addForm');
        
        this.setSubmitEvent();

        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.getElementById('t-date').value = now.toISOString().slice(0,16);
    }

    /**
     * Adding the submit event for adding a task.
     */
    setSubmitEvent(){
        this.addForm.addEventListener('submit',(e)=>{
            e.cancelBubble = true;
            e.stopPropagation();
            e.preventDefault();

            const formData = new FormData(this.addForm);
            const newTask = {};

            for (var key of formData.keys()) {
                newTask[key] = formData.get(key);
            }

            newTask.date = new Date(formData.get('date'));

            newTask.checked = false;
            newTask.id = new Date().getTime().toString();       // making time as a id of a task.

            if(this.addForm.checkValidity()){

                // toggling the toast message 
                document.getElementById('toast').classList.toggle('toast-display');
                setTimeout(() => {
                    document.getElementById('toast').classList.toggle('toast-display');
                },1500);


                todoSR.addTask(newTask);
                
                // redirecting to the task recent added category page.
                const href = "tasks?category="+newTask.category;
                window.history.pushState({},"",href);
                routeHandler(); 
            
            }
            return false;
        });
    }

}



export {AddTask};