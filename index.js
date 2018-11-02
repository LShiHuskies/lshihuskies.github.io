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
  console.log(count);
  if (count === 1) {
    const divBox = document.createElement('DIV');
    divBox.setAttribute('id', `box-${count}`);
    divBox.setAttribute('class', `boxes`);
    body.appendChild(divBox);
  }
}








})
