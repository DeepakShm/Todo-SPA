/**
 *  LOCALSTORAGE DATA
    [key] -> tasks
    [value] -> ( Array of object)
                obect -> 
                {
                    id: timestamp will be the id,
                    title: by user
                    category: by user,
                    date: by user,
                    checked: true | false (initial false)

                }
 */

class TodoService{
    taskList = [];
    categoryCount ={
        personal:0,
        work:0,
        school:0,
        grocery:0,
    };
    taskDone = 0;
    
    constructor(){
        this.getAllTasks();
    }

    /**
     * Getting the task list from localstorage. if not then create an empty array.
     */
    getAllTasks(){
        const tasks = localStorage.getItem('tasks');
        if(tasks===null){
            localStorage.setItem('tasks','[]');
            this.taskList = [];
            return;
        }
        
        this.taskList = JSON.parse(tasks);
    }


    /**
     * 
     * @param {string} category type of category
     * @returns {Array<Object>} filtered array of a perticular category.
     */
    getCategoryTasks(category){
        if(this.taskList.length===0)
            return [];
        if(category.toLowerCase()==='all')
            return this.taskList;
            
        return this.taskList.filter(t=>t.category === category);
    }


    /**
     * set length of done tasks.
     */
    setDoneCount(){
        this.taskDone = this.taskList.filter(t=>t.checked===true).length;
    }   

    /**
     * Set the all category count.
     */
    setCategoryCount(){
        this.categoryCount = {
            personal:this.getCategoryTasks('personal').length,
            work:this.getCategoryTasks('work').length,
            school:this.getCategoryTasks('school').length,
            grocery:this.getCategoryTasks('grocery').length
        };
    }


    /**
     * Adding the task to array and updating the localstorage.
     * @param {Object} task 
     */
    addTask(task){
        this.taskList.push(task);
        localStorage.setItem('tasks',JSON.stringify(this.taskList));
        this.categoryCount[task.category]++;
    }


    /**
     * Updating the task list and localstorage.
     * @param {string} tid : task id.
     */
    updateTask(tid){
        const i = this.taskList.findIndex(t=>t.id===tid);
        this.taskList[i].checked = !this.taskList[i].checked;

        localStorage.setItem('tasks',JSON.stringify(this.taskList));
        if(this.taskList[i].checked)
            this.taskDone++;
        else
            this.taskDone--;

    }


    /**
     * Deleting the task from array and updating the localstorage.
     * @param {string} tid : task id. 
     */
    deleteTask(tid){
        const idx = this.taskList.findIndex(t=>t.id === tid);
        const ct = this.taskList[idx];
        this.taskList.splice(idx,1);
        this.categoryCount[ct.category]--;
        localStorage.setItem('tasks',JSON.stringify(this.taskList));
        if(ct.checked)
            this.taskDone--;

    }

}

export {TodoService};