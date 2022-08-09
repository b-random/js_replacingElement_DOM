//Event Listeners

// document.querySelector('.clear-tasks').addEventListener('click', function(objPara){
//   console.log('hello!');
//   objPara.preventDefault(); 
// });
//<a class="clear-tasks btn black" href="">Clear Tasks</a>
//the href in the index needs a hashmark to hold the event, otherwise it just flashes

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
//... console.log('clicked it');
//... e.preventDefault(); //bcuz this href is set to google

//event targeting
  let val;
  val = e.target; //returns actual element <a...>
  val = e.target.className;
  val = e.target.classList.add('new-class');
  val = e.target.className; //now with added class
  val = e.target.classList;
  val = e.target.innerText = 'pooshed!'; //changes button text after click

  //event type
  val = e.type;  //click

  //timestamp
  val = e.timeStamp;

  //event coordinates; the exact spot where the selected element is clicked relative to window
  val = e.clientX;
  val = e.clientY;
  //event coordinates; the exact spot where the selected element is clicked relative to window
  val = e.offsetY;
  
  console.log(val);
};