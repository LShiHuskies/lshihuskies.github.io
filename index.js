

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
  const aboutBox = document.getElementById('ABOUTME');
  if (aboutBox !== null) {
    aboutBox.remove();
  }
  if (event.target.innerText === 'About Me') {

    const aboutBox = document.createElement('DIV');
    aboutBox.setAttribute('id', 'ABOUTME');
    // aboutBox.setAttribute('class', 'animated fadeInRight delay-0.5s')
    // console.log(aboutBox);
    const arrInfo = ['My name is Louis Shi', 'I am a software developer and I turn ideas into reality through programming',
                      'I graduated from the University of Connecticut',
                      'I worked in Insurance for a couple years handling Bodily Injury Claims for GEICO where I consistently produced one of the highest performance metrics in the company',
                      'Through online programming tutorials and an Introduction of Computer Science Night course I discovered my passion for programming',
                      'I enrolled in Flatiron School Software Engineering Immersive program where I continued to build various projects such as Z Warriors Action Game, Space Shooter App and Career Guidance App demonstrating strong skills in Ruby, Ruby on Rails, JavaScript, React, Redux, HTML, CSS, SQL, PostgreSQL and WebSocket',
                    'I realize that throughout my journey being a developer has always been a natural extension of myself and that I have always been a developer',
                  ];

    arrInfo.forEach(element => { let pTag = document.createElement('P');

      pTag.setAttribute('class', `animated fadeInRight delay-${arrInfo.indexOf(element)}s`);
      if (arrInfo.indexOf(element) !== 6) {
        pTag.innerText = element;
        aboutBox.appendChild(pTag)
      } else if (arrInfo.indexOf(element) === 6) {
        setTimeout(function handleSix() {
          let pTag = document.createElement('P');
          pTag.setAttribute('class', `animated fadeInRight delay-${arrInfo.indexOf(element)}s`);
          pTag.innerText = element;
          aboutBox.appendChild(pTag)
        }, 6000);
      }
      const divBox = document.getElementById('greetTwo');
      divBox.appendChild(aboutBox);
    } )


  } else if (event.target.innerText === 'Hobbies') {

  } else if (event.target.innerText === 'Technical') {

  } else if (event.target.innerText === 'Message Me') {

  }
}


// function handleSix (arrInfo, element) {
//   alert('here')
//   let pTag = document.createElement('P');
//   pTag.setAttribute('class', `animated fadeInRight delay-${arrInfo.indexOf(element)}s`);
//   pTag.innerText = element;
//   return pTag;
// }




})
