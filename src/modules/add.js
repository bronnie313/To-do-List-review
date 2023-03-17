const listName = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const addTask = (task) => {
    const data = {
      completed: false,
      text: task,
      index: listName.length + 1,
    };
    listName.push(data);
    localStorage.setItem('tasks', JSON.stringify(listName));
    location.reload();
    
};

export default addTask;