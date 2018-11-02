

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
  if (count === 0) {
    count++;
  } else if (count === 1) {
    count--;
  }
  if (count === 1) {
    const divBox = document.createElement('DIV');
    divBox.setAttribute('id', 'box-1');
    divBox.setAttribute('class', `boxes`);
    const greet = document.createElement('H3');
    greet.setAttribute('id', 'greet');
    greet.setAttribute('class', 'animated infinite bounce delay-1s');
    greet.innerText = 'Thank you for visiting my page!'
    divBox.appendChild(greet);
    divBox.setAttribute('id', 'greetTwo')
    let vertical = makeVerticalNavBar();
    divBox.innerHTML += vertical;
    body.appendChild(divBox);

    divBox.addEventListener('click', (event) => {
      handleDivBox(event);
    })


  } else if (count === 0) {
    const divBox = document.getElementsByClassName('boxes')[0];
    divBox.remove();
  }
}

const makeVerticalNavBar = () => {
  let vertical = `<ul id='secondOne'>
                  <li class='vertical'><a id='firstVertical'> About Me </a></li>
                  <li class='vertical'><a id='notfirstVertical'>Hobbies</a></li>
                  <li class='vertical'><a id='notfirstVertical'>Technical</a></li>
                  <li class='vertical'><a id='notfirstVertical'>Message Me</a></li>
              </ul>`
  return vertical;
}


const handleDivBox = (event) => {
  if (event.target.innerText === 'About Me') {
    const aboutBox = document.createElement('DIV');
    aboutBox.setAttribute('id', )
  } else if (event.target.innerText === 'Hobbies') {

  } else if (event.target.innerText === 'Technical') {

  } else if (event.target.innerText === 'Message Me') {

  }
}







})
