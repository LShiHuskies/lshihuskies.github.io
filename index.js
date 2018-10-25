let counter = 0;

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

}
