document.addEventListener("DOMContentLoaded", function(event) {
      let count = 0;
      let hobCount = 0;
      const body = document.getElementById('body');
      const louisImage = document.getElementById('left');
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
      // let secondOne = document.createElement('UL');
      // secondOne.setAttribute('id', 'secondOne');
      // let firstVerticalClass = document.createElement('LI');
      // firstVerticalClass.setAttribute('class', 'vertical');
      // let firstVertical = document.createElement('A');
      // firstVertical.setAttribute('id', 'firstVertical');
      // firstVertical.innerText = 'About Me';
      //
      // firstVerticalClass.appendChild(firstVertical);
      // secondOne.appendChild(firstVerticalClass);
      //
      //
      // let secondVerticalClass = document.createElement('LI');
      // secondVerticalClass.setAttribute('class', 'vertical');
      //
      // let secondVertical = document.createElement('A');
      // secondVertical.setAttribute('id', 'notfirstVertical');
      // secondVertical.innerText = 'Hobbies';
      //
      // secondVerticalClass.appendChild(secondVertical);
      // secondOne.appendChild(secondVerticalClass);
      //
      // let thirdVerticalClass = document.createElement('LI');
      // thirdVerticalClass.setAttribute('class', 'vertical');
      //
      // let thirdVertical = document.createElement('A');
      // thirdVertical.setAttribute('id', 'notfirstVertical');
      // thirdVertical.innerText = 'Technical';
      //
      // thirdVerticalClass.appendChild(thirdVertical);
      // secondOne.appendChild(thirdVerticalClass);
      //
      // let fourthVerticalClass = document.createElement('LI');
      // fourthVerticalClass.setAttribute('class', 'vertical');
      //
      // let fourthVertical = document.createElement('A');
      // fourthVertical.setAttribute('id', 'notfirstVertical');
      // fourthVertical.innerText = 'Message Me';
      //
      // fourthVerticalClass.appendChild(fourthVertical);
      // secondOne.appendChild(fourthVerticalClass);

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
      const hobbyBox = document.getElementById('HOBBY');
      const imgBox = document.getElementById('langBox');

      if (event.target.innerText === 'About Me'
      || event.target.innerText === 'Hobbies'
      || event.target.innerText === 'Technical'
      || event.target.innerText === 'Message Me') {
        if (aboutBox !== null) {
          aboutBox.remove();
        }
        if (hobbyBox !== null) {
          hobbyBox.remove();
        }
        if (imgBox !== null) {
          imgBox.remove();
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
                            'When I am not programming, I enjoy playing Poker, I specialize in No-Limit Texas Holdem Cash Games but also play Pot Limit Omaha, both High and Low',
                          'I also enjoy playing Chess, I grew up playing both Chinese Chess as well as Chess.',
                          'I enjoy Taekwondo, specifically Olympic Style Taekwondo and currently hold a Black Belt',
                          'I enjoy watching Basketball, both College Basketball and NBA; my favorite College Team is my UCONN Huskies and my favorite NBA team is the Boston Celtics',
                          'I also enjoy giving back to the community through voluneering and doing charitable work.'];

          const hobbyImage = [`<img id='imgTag-0' class='animated fadeInRight delay-0s' src='https://kitelytech.com/wp-content/uploads/bfi_thumb/SDLC-nfste0dogytlbv651sk1zl5aj6janw9ursan7ocnf8.png' />`,
          `<img id='imgTag-1' class='animated fadeInRight delay-1s' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7kdd0DWPUGkXDn2sWzcJhhGDksoFqU7uIJgCKjgg5HNVdYFB' />`,
          `<img id='imgTag-2' class='animated fadeInRight delay-2s' src='http://www.pngmart.com/files/3/Chess-PNG-Image.png' />`,
          `<img id='imgTag-3' class='animated fadeInRight delay-3s' src='http://www.millennium-tkd.co.uk/_/rsrc/1512172244760/home/sparring.png' />`,
          `<img id='imgTag-4' class='animated fadeInRight delay-4s' src='https://banner2.kisspng.com/20180508/keq/kisspng-university-of-connecticut-connecticut-huskies-men-5af20fc1ddd505.4062305015258131859086.jpg' />`,
        `<img id='imgTag-5' class='animated fadeInRight delay-4s' src='http://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png' />`,
        `<img id='imgTag-6' class='animated fadeInRight delay-5s' src='https://www.sjffcc.org/images/volunteer_cartoon.png' />`];

        hobbies.forEach(element => { let pTag = document.createElement('P');

          pTag.setAttribute('class', `animated fadeInRight delay-${hobbies.indexOf(element)}s`);
          if (hobbies.indexOf(element) !== 5) {
            pTag.innerText = element;
            hobbyBox.appendChild(pTag)
          } else if (hobbies.indexOf(element) === 5) {
            pTag.innerText = element;
            hobbyBox.appendChild(pTag);
          }
          const divBox = document.getElementById('greetTwo');

          divBox.appendChild(hobbyBox);

        } )

        hobbyImage.forEach(imgTag => {

          const body = document.getElementById('body');
          body.innerHTML += imgTag;
        })
        const body =  document.getElementById('body');
        body.addEventListener('click', (event) => {
          handleTheWholeBody(event);
        })

        } else if (event.target.innerText === 'Technical') {
          const languagesBox = ['JavaScript', 'Ruby', 'C++', 'SQL'];
          const frameWorkBox = ['React', 'Rails'];
          const others = ['Redux', 'HTML/CSS', 'PostgreSQL', 'SQLite3', 'Bootstrap', 'ActiveRecord Associations'];

          const imageArr = ['http://www.tutorialrays.com/admin/images/courses/skl-icon-3.png',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL08rEvslkZm7r7T8fj4GbKZ-f7mMt0uVqJPKpaO_IYyNlqW7V',
                            'http://www.pngall.com/wp-content/uploads/2016/05/C-PNG-Clipart.png',
                            'http://www.mikefal.net/wp-content/uploads/2016/05/logoAzureSql.png',
                            'https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png',
                            'http://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png',
                            'https://www.pubnub.com/wp-content/uploads/2015/01/Rest-vs-WebSockets-2.png',
                            'https://www.vectorlogo.zone/logos/postgresql/postgresql-card.png',
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png',
                          'https://banner2.kisspng.com/20180503/cee/kisspng-web-development-html-css3-the-ohana-code-logo-2cpaper-projection-shaded_1660937-html-dropdown-js-5aebd5631cd291.7591600015254050271181.jpg'];



          const imgBox = document.createElement('DIV');
          imgBox.setAttribute('id','langBox');

          imageArr.forEach(tag => {
            if (imageArr.indexOf(tag) < 6){
              let img = document.createElement('IMG');
              img.setAttribute('id', `img-${imageArr.indexOf(tag)}`)
              img.setAttribute('class', `animated fadeInRight delay-${imageArr.indexOf(tag)}s`);
              img.setAttribute('src', `${tag}`);
              imgBox.appendChild(img);
            } else if (imageArr.indexOf(tag) === 6) {
              setTimeout(function(){
                let img = document.createElement('IMG');
                img.setAttribute('id', `img-${imageArr.indexOf(tag)}`)
                img.setAttribute('class', `animated fadeInRight delay-${imageArr.indexOf(tag)}s`);
                img.setAttribute('src', `${tag}`);
                imgBox.appendChild(img);
              }, 6000)
            } else if (imageArr.indexOf(tag) === 7) {
              setTimeout(function(){
                let img = document.createElement('IMG');
                img.setAttribute('id', `img-${imageArr.indexOf(tag)}`)
                img.setAttribute('class', `animated fadeInRight delay-${imageArr.indexOf(tag)}s`);
                img.setAttribute('src', `${tag}`);
                imgBox.appendChild(img);
              }, 7000)
            } else if (imageArr.indexOf(tag) === 8) {
              setTimeout(function(){
                let img = document.createElement('IMG');
                img.setAttribute('id', `img-${imageArr.indexOf(tag)}`)
                img.setAttribute('class', `animated fadeInRight delay-${imageArr.indexOf(tag)}s`);
                img.setAttribute('src', `${tag}`);
                imgBox.appendChild(img);
              }, 8000)
            } else if (imageArr.indexOf(tag) === 9) {
              setTimeout(function(){
                let img = document.createElement('IMG');
                img.setAttribute('id', `img-${imageArr.indexOf(tag)}`)
                img.setAttribute('class', `animated fadeInRight delay-${imageArr.indexOf(tag)}s`);
                img.setAttribute('src', `${tag}`);
                imgBox.appendChild(img);
              }, 9000)
            }

        } )

        const divBox = document.getElementById('greetTwo');
        divBox.appendChild(imgBox);


        } else if (event.target.innerText === 'Message Me') {

        }
      }

      const handleTheWholeBody = (event) => {

        const aboutBox = document.getElementById('ABOUTME');
        const hobbyBox = document.getElementById('HOBBY');
        const louisImage = document.getElementById('left');
      if(event.target === louisImage) {
        window.location.reload();
      }

      if (hobCount > 0) {
         if (hobbyBox === null) {
          hobCount = 0;
          handleDivBox(event)
        } else if (hobbyBox !== null) {
            if (event.target.innerText === 'Hobbies'
            || event.target.innerText === 'About Me'
            || event.target.innerText === 'Technical'
            || event.target.innerText === 'Message Me') {
              let query = document.querySelectorAll('IMG');
              let arr = Array.from(query);

              let obj = arr.filter(tag => tag.id !== 'resume' && tag.id !== 'linkedin' && tag.id !== 'github');
              obj.forEach(tag => tag.remove());
              hobbyBox.remove();
            } else if (event.target === louisImage) {
              let query = document.querySelectorAll('IMG');
              let arr = Array.from(query);

              let obj = arr.filter(tag => tag.id !== 'resume' && tag.id !== 'linkedin' && tag.id !== 'github');
              obj.forEach(tag => tag.remove());
              const divBox = document.getElementsByClassName('boxes')[0];
              divBox.remove();
              window.location.reload();
            }
          }
        }
      hobCount++;
    }

})
