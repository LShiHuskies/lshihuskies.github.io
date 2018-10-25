const button = document.getElementById('play');

button.addEventListener('click', (event) => {
  // let rectangle = document.createElement('DIV');
  makeRectangle(event);

})

const makeRectangle = (event) => {
  console.log('hi')
  let rectangle = document.createElement('DIV');
  console.log(rectangle)
}
