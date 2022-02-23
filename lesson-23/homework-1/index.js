const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      // add data-id to checkbox
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// algoritm
// 1. func addNewTask
// - create btn add listener ('click', createHandler)
// - createHandler
// -- get input.value
// -- create task = {text: input.value, done: false, id: tasks.length}
// -- tasks.push(task)
// -- renderTasks(tasks)
//
// func updateTask
// - add listener to .list elem ('click', updateHandler)
// - updateHandler
// -- get data-id of event.target
// -- task = tasks.find(task => task.id === +data.id of elem)
// -- task.done = !task.done;
// -- renderTasks(tasks)

const createBtnElem = document.querySelector('.create-task-btn');
const tasksListElem = document.querySelector('.list');

// input: none
// return: undefined
const addTask = () => {
  const input = document.querySelector('.task-input');
  const taskText = input.value;
  const newTask = { text: taskText, done: false, id: tasks.length + 1 };
  tasks.push(newTask);
  input.value = '';
  renderTasks(tasks);
};

createBtnElem.addEventListener('click', addTask);

// input: none
// return: undefined
const updateTask = event => {
  const checkboxId = +event.target.dataset.id;
  // find
  // input: callback (inp: el; ret: true || false)
  // return: element of array || undefined
  const currentTask = tasks.find(task => task.id === checkboxId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

tasksListElem.addEventListener('click', updateTask);
