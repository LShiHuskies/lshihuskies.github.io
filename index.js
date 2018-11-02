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
      if (event.target.innerText === 'About Me'
      || event.target.innerText === 'Hobbies'
      || event.target.innerText === 'Technical'
      || event.target.innerText === 'Message Me') {
        if (aboutBox !== null) {
          aboutBox.remove();
        }
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
          const hobbyBox = document.createElement('DIV');
          hobbyBox.setAttribute('id', 'HOBBY');
          const hobbies = ['First and foremost I really love programming, if you ever want me to help design your website or need any assistance with programming, please do not hesitate to contact me.',
                            'When I am not programming, I enjoy playing Poker, I specialize in No-Limit Texas Holdem Cash Games but also play Pot Limit Ohama, both High and Low',
                          'I also enjoy playing Chess, I grew up playing both Chinese Chess as well as Chess.',
                          'I enjoy Taekwondo, specifically Olympic Style Taekwondo and currently hold a Black Belt',
                          'I enjoy watching Basketball, both College Basketball and NBA; my favorite College Team is my UCONN Huskies and my favorite NBA team is the Boston Celtics',
                          'I also enjoy giving back to the community through voluneering and doing charitable work.'];
          const hobbyImage = ["<img src='https://kitelytech.com/wp-content/uploads/bfi_thumb/SDLC-nfste0dogytlbv651sk1zl5aj6janw9ursan7ocnf8.png' />",
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7kdd0DWPUGkXDn2sWzcJhhGDksoFqU7uIJgCKjgg5HNVdYFB' />",
          "<img src='http://www.pngmart.com/files/3/Chess-PNG-Image.png' />", "<img src='http://www.millennium-tkd.co.uk/_/rsrc/1512172244760/home/sparring.png' />",
          "<img src='https://banner2.kisspng.com/20180508/keq/kisspng-university-of-connecticut-connecticut-huskies-men-5af20fc1ddd505.4062305015258131859086.jpg' />",
        "<img src='http://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png' />", "<img src='https://www.sjffcc.org/images/volunteer_cartoon.png' />"];

        console.log(hobbies);
        console.log(hobbyImage);

        hobbies.forEach(element => { let pTag = document.createElement('P');

          pTag.setAttribute('class', `animated fadeInRight delay-${hobbies.indexOf(element)}s`);
          if (hobbies.indexOf(element) !== 5) {
            pTag.innerText = element;
            hobbyBox.appendChild(pTag)
          } else if (hobbies.indexOf(element) === 5) {
            setTimeout(function handleSix() {
              let pTag = document.createElement('P');
              pTag.setAttribute('class', `animated fadeInRight delay-${hobbies.indexOf(element)}s`);
              pTag.innerText = element;
              hobbyBox.appendChild(pTag)
            }, 1000);
          }
          const divBox = document.getElementById('greetTwo');
          divBox.appendChild(hobbyBox);
        } )





        } else if (event.target.innerText === 'Technical') {

        } else if (event.target.innerText === 'Message Me') {

        }
      }




})
