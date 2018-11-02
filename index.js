// let counter = 0;
// let innerCounter = 0;
// const container = document.getElementById('happy');
// const button = document.getElementById('play');
//
// button.addEventListener('click', (event) => {
//   // let rectangle = document.createElement('DIV');
//   makeRectangle(event);
//
// })
//
// const makeRectangle = (event) => {
//   counter++;
//   const container = document.getElementById('happy');
//
//   const rectangle = document.createElement('DIV');
//   rectangle.setAttribute('ID', `${counter}`);
//   rectangle.setAttribute('CLASS', 'rectangle')
//   container.appendChild(rectangle);
//   rectangle.innerText = counter;
// }
//
//
// container.addEventListener('click', (event) => {
//   innerCounter = 0;
//   if (event.target.id !== 'happy') {
//     // alert(event.target.id);
//     const rec = document.getElementById(`${event.target.id}`);
//     makeInnerRectangle(rec)
//     // const innerRectangle = document.createElement('DIV');
//     // innerRectangle.setAttribute('class', 'innerRectangle');
//     // rec.appendChild(innerRectangle);
//   }
// })
//
// const makeInnerRectangle = (rec) => {
//   innerCounter++;
//   if (innerCounter === 1) {
//     const innerRectangle = document.createElement('DIV');
//     innerRectangle.setAttribute('class', 'innerRectangle');
//     rec.appendChild(innerRectangle);
//   } else {
//     console.log('this is already taken');
// }
// }

document.addEventListener("DOMContentLoaded", function(event) {
  let count = 0;
  const body = document.getElementById('body');
  const louisImage = document.getElementById('left')
  louisImage.addEventListener('click', (event) => {
    if (event.target.id === 'left') {
      handleClick(event);
    }
  })


const handleClick = (event) => {
  count++;
  if (count === 1) {
    const divBox = document.createElement('DIV');
    divBox.setAttribute('id', `box-${count}`);
    divBox.setAttribute('class', `boxes`);
    const greet = document.createElement('H3');
    greet.setAttribute('id', 'greet');
    greet.setAttribute('class', 'animated infinite bounce delay-1s');
    greet.innerText = 'Thank you for visiting my page!'
    divBox.appendChild(greet);
    setTimeout(divBox.setAttribute('id', 'greetTwo'), 8000)
    let vertical = makeVerticalNavBar();
    divBox.innerHTML += vertical;

    body.appendChild(divBox);
  }
}

const makeVerticalNavBar = () => {
  let vertical = `<ul id='secondOne'>
                  <li class='vertical'><a href="https://www.linkedin.com/in/louis-shi-b772b472/" target='_blank'> About Me </a></li>
                  <li class='vertical'><a id='notfirstVertical' href="https://medium.com/@louis.shi" target='_blank'>Hobbies</a></li>
                  <li class='vertical'><a id='notfirstVertical' href="https://github.com/LShiHuskies" target='_blank'>Technical</a></li>
                  <li class='vertical'><a id='notfirstVertical' href="mailto: Shi.Louis2@gmail.com" target='_blank'>Contact</a></li>
              </ul>`
  return vertical;
}






})
