// // REPLACE ELEMENT
// //replacing an h5 element with an h2 element:


// //create element
// const newHeading = document.createElement('h2');

// //add/replace ID
// newHeading.id = 'task-title';

// //add/replace text node
// newHeading.appendChild(document.createTextNode('Task List'));
// //The appendChild() method appends a node (element) as the last child of an element.

// //get the old heading
// const oldHeading = document.getElementById('task-title');

// //find parent to replace the child... using class in this case
// const findParent = document.querySelector('.card-action');
// //this is the div that the h5 will be removed from and the h2 will be replaced into

// //replace
// findParent.replaceChild(newHeading, oldHeading);
// //first arguement is what is new element, second arguement is what is being replaced





// //now to remove an 'li' element
// const lis = document.getElementsByTagName('li');

// //lis[2].remove();
// lis[2].style.color = 'red';

// //or remove a child element
// // ......const list = document.querySelector('ul').children;
// // ..... list[2].remove();

// //or

// const listOther = document.querySelector('ul');
// listOther.removeChild(lis[2]);

// // move classes and attributes
//classes..
const firstLi = document.querySelector('li');
const liKid = firstLi.children[0];

val = liKid.className;
val = liKid.classList; // //Dom token, so iterable 
val = liKid.classList[0];
liKid.classList.add('money-shot');
val = liKid;
liKid.classList.remove('money-shot');
val = liKid.classList;

//attributes...
val = liKid.getAttribute('href'); //#
val = liKid.setAttribute('href', 'http://google.com');
val = liKid.setAttribute('title', 'google');
val = liKid.getAttribute('href'); // google.com
val = liKid.hasAttribute('href'); // true
val = liKid.getAttribute('title'); // 'google'
val = liKid

console.log(val);
