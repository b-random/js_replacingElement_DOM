//Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click and mouse events
// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
//clearBtn.addEventListener('mouseup', runEvent); 
//heading.addEventListener('mouseenter', runEvent);
//card.addEventListener('mouseenter', runEvent);

//mousemove... good for gaming/interactive applications
card.addEventListener('mousemove', runEvent);

//track mouse movement within an element
//event handler
function runEvent(e){
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 255)`;
}