let counter = 0;
const container = document.getElementById('happy');
const button = document.getElementById('play');

button.addEventListener('click', (event) => {
  // let rectangle = document.createElement('DIV');
  makeRectangle(event);

})

const makeRectangle = (event) => {
  counter++;
  const container = document.getElementById('happy');

  const rectangle = document.createElement('DIV');
  rectangle.setAttribute('ID', `${counter}`);
  rectangle.setAttribute('CLASS', 'rectangle')
  container.appendChild(rectangle);
  rectangle.innerText = counter;
}


container.addEventListener('click', (event) => {
  if (event.target.id !== 'happy') {
    // alert(event.target.id);
    const rec = document.getElementById(`${event.target.id}`);
    const innerRectangle = document.createElement('DIV');
    innerRectangle.setAttribute('class', 'innerRectangle');
    rec.appendChild(innerRectangle);
  }
})
