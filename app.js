//Keyboard/Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');

taskInput.value = '';
//the html has a value of 'Walk the Dog' and this removes it



// form.addEventListener('submit', runEvent);

// function runEvent(e){
//   console.log(`Event Type: ${e.type}`); 
//   // .type fires on event addEventListener and returns string
//   console.log(taskInput.value);
//   //returns submitted value to console
//   e.preventDefault();
//   //this prevents the default behavior of an html form, which is to refresh after submission 
//   taskInput.value = '';
// };


const newHead = document.querySelector('h5');
//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('focus', runEvent);



function runEvent(e){
  console.log(`Event Type: ${e.type}`); 
  // .type fires on event addEventListener and returns string
  //console.log(e.target.value);
  // e references the eventListener through the function and .target references what the listener is being called on, in this case the input element
  //e.preventDefault();
  //....newHead.innerText = e.target.value;
  console.log(taskInput.value);
};