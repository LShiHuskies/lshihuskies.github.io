document.addEventListener("DOMContentLoaded", function(event) {

      let count = 0;
      let hobCount = 0;
      let timer = 0;

      const body = document.getElementById('body');
      const louisImage = document.getElementById('left');


      setTimeout(function showMessage() {
            message.remove();
      }, 6000);

      if (count === 0 && hobCount === 0 && timer === 0) {
        const message = document.createElement('H4');
        message.setAttribute('id', 'message');
        message.setAttribute('class', 'animated bounce infinite');
        message.innerText = 'Click my image or any of the technical projects for information';
        body.appendChild(message);
      }

      const technical = document.getElementById('technical');
      technical.addEventListener('click', function(event) {
        const techBox = document.getElementById('techProjects');

        if (count === 1) {
          let trial = document.getElementsByClassName('boxes')[0];
          count--;
          trial.remove();
        } else if (event.target.innerText === 'Free-Online Poker App'
        || event.target.innerText === 'Z Warriors Action Game'
        || event.target.innerText === 'SpaceShooter App'
        || event.target.innerText === 'Career Guidance App'
        && count === 0) {

          if (techBox === null) {
            const techBox = document.createElement('DIV');
            techBox.setAttribute('id', 'techProjects');
            body.appendChild(techBox);
            if (event.target.innerText === 'Free-Online Poker App') {
              const ul = document.createElement('UL');
              ul.setAttribute('id', 'soon');
              ul.innerText = 'Coming Soon!!!';
              techBox.appendChild(ul);
              const iveyImage = document.createElement('IMG');
              iveyImage.setAttribute('src', 'https://www.highstakesdb.com/images/Players/20180329090557_705x365.jpg');
              iveyImage.setAttribute('id', 'ivey');
              techBox.appendChild(iveyImage);
            } else if (event.target.innerText === 'Z Warriors Action Game') {
                const div = document.createElement('DIV');
                div.setAttribute('id', 'warriors');
                div.innerText = 'Z Warriors Action Game';
                techBox.appendChild(div);
                let video = `<video id='zvideo' height="250" controls>
                  <source src="./assets/DBZ.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`;

                let content = `<div id='content'>
                <p class='animated fadeInUp delay-1s'> An action pack multiplayer game incorporating
                teamwork and co-op play inspired by Dragon Ball Z </p>
                <p id='description' class='animated fadeInRight delay-2s'> Integrated WebSocket to allow multiple users to be logged in from different computers and play together, join forces,
                and combat against a computer that will fight back
                </p>
                <p id='description' class='animated fadeInRight delay-3s'> Incorporated complex logic on frontend React-Redux and backend Ruby on Rails for collision detection and player teleportation
                capabilities, mirroring all movements to all users’ screen to maximize user experience, and difficulty based on current level </p>

                <p id='description' class='animated fadeInRight delay-4s'> Integrated JWT authentication to ensure secure login and secure data </p>

                </div>`

                techBox.innerHTML += video;

                techBox.innerHTML += content;
                let horizontalNav = ` <ul id='warriorHorizontal'>
                <li class='horizontal'><a href="https://github.com/LShiHuskies/ModProject" target='_blank'> GitHub APP </a></li>
                <li class='horizontal'><a class='notFirst' href="https://github.com/LShiHuskies/ModProject/tree/master/dragonWarriorBackend" target='_blank'>GitHub API</a></li>
                <li class='horizontal'><a class='notFirst' href="https://intense-waters-55861.herokuapp.com/" target='_blank'>Heroku</a></li>
                </ul> `;
                techBox.innerHTML += horizontalNav;
            } else if (event.target.innerText === 'SpaceShooter App') {
              const div = document.createElement('DIV');
              div.setAttribute('id', 'warriors');
              div.innerText = 'SpaceShooter App';
              techBox.appendChild(div);
              let video = `<video id='zvideo' height="250" controls>
                <source src="./assets/SpaceShipShooter.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>`;

              let content = `<div id='content'>
              <p class='animated fadeInUp delay-1s'> A single player SpaceShip traveler game that shoots planets, inspired by Asteroids
               </p>
              <p id='description' class='animated fadeInRight delay-2s'> Integrated JavaScript, React, HTML, and CSS and leveraged dynamic,
              asynchronous states to foster a complete game experience
                by communicating with Ruby on Rails backend to store essential data
              </p>
              <p id='description' class='animated fadeInRight delay-3s'>
              Incorporated detailed game logic and mathematical analysis for collision detection, spaceship interval increases, planet speed
              increases based on score, and React prop/state updates accordingly to game status
              </p>

              <p id='description' class='animated fadeInRight delay-4s'>
              Utilized Higher Order Components to properly reuse React Component logic and maintain React Component lifecycle methods
              </p>

              </div>`

              techBox.innerHTML += video;

              techBox.innerHTML += content;
              let horizontalNav = ` <ul id='warriorHorizontal'>
              <li class='horizontal'><a href="https://github.com/LShiHuskies/spaceshooterapp" target='_blank'> GitHub APP </a></li>
              <li class='horizontal'><a class='notFirst' href="https://github.com/LShiHuskies/space-shooter-api" target='_blank'>GitHub API</a></li>
              <li class='horizontal'><a class='notFirst' href="https://blooming-garden-39476.herokuapp.com/" target='_blank'>Heroku</a></li>
              </ul> `;
              techBox.innerHTML += horizontalNav;
            } else if (event.target.innerText === 'Career Guidance App') {
              const div = document.createElement('DIV');
              div.setAttribute('id', 'warriors');
              div.innerText = 'Career Guidance App';
              techBox.appendChild(div);
              let video = `<video id='zvideo' height="250" controls>
                <source src="./assets/CareerGuideApp.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>`;

              let content = `<div id='content'>
              <p class='animated fadeInUp delay-1s'> A career and job search guide for technical programmers/developers, inspired by Indeed and LinkedIn
               </p>
              <p id='description' class='animated fadeInRight delay-2s'> Built full-stack application utilizing the Active Record Associations
              Library with HTML/CSS, Bootstrap, and Ruby on Rails </p>
              <p id='description' class='animated fadeInRight delay-3s'>
              Integrated Adzuna API to fetch jobs data and used CRUD to enable searching for, saving, and applying to jobs, and profile editing
              </p>

              <p id='description' class='animated fadeInRight delay-4s'>
              Incorporated validation logins to ensure secure login for all users, and SQL queries to maintain and manage the database
              </p>

              </div>`

              techBox.innerHTML += video;

              techBox.innerHTML += content;
              let horizontalNav = ` <ul id='warriorHorizontal'>
              <li class='horizontal'><a href="https://github.com/LShiHuskies/CareerGuideApp" target='_blank'> GitHub APP </a></li>

              <li class='horizontal'><a class='notFirst' href="https://careerguideapp.herokuapp.com/" target='_blank'>Heroku</a></li>
              </ul> `;
              techBox.innerHTML += horizontalNav;
            }
          } else if (techBox !== null) {
            techBox.remove();
          }

        }
      })

      louisImage.addEventListener('click', (event) => {
        if (event.target.id === 'left') {
          handleClick(event);
        }
      })

    const handleClick = (event) => {
      if (count === 0) {
        const techBox = document.getElementById('techProjects');
        if (techBox !== null) {
          techBox.remove();
        }
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
                      <li class='vertical'><a id='notfirstVertical' href="mailto: Shi.Louis2@gmail.com" target='_blank' >Message Me</a></li>
                  </ul>`
      return vertical;
    }

    const handleDivBox = (event) => {
      const aboutBox = document.getElementById('ABOUTME');
      const hobbyBox = document.getElementById('HOBBY');
      const imgBox = document.getElementById('langBox');
      const hobbyImageBox = document.getElementById('IMAGEBOX');

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
        if ( hobbyImageBox !== null) {
          hobbyImageBox.remove();
        }

      }
      if (event.target.innerText === 'About Me') {

        const aboutBox = document.createElement('DIV');
        aboutBox.setAttribute('id', 'ABOUTME');
        // aboutBox.setAttribute('class', 'animated fadeInRight delay-0.5s')
        // console.log(aboutBox);
        const arrInfo = ['My name is Louis Shi.', 'I am a software developer and I turn ideas into reality through programming.',
                          'I graduated from the University of Connecticut.',
                          'I worked in Insurance for a couple years handling Bodily Injury Claims for GEICO where I consistently produced one of the highest performance metrics in the company.',
                          'Through online programming tutorials and an Introduction of Computer Science Night course I discovered my passion for programming.',
                          'I enrolled in Flatiron School Software Engineering Immersive program where I continued to build various projects such as Z Warriors Action Game, Space Shooter App and Career Guidance App demonstrating strong skills in Ruby, Ruby on Rails, JavaScript, React, Redux, HTML, CSS, SQL, PostgreSQL and WebSocket.',
                        'I realize that throughout my journey being a developer has always been a natural extension of myself and that I have always been a developer.',
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
                            'When I am not programming, I enjoy playing Poker, I specialize in No-Limit Texas Holdem Cash Games but also play Pot Limit Omaha, both High and Low.',
                          'I also enjoy playing Chess, I grew up playing both Chinese Chess as well as Chess.',
                          'I enjoy Taekwondo, specifically Olympic Style Taekwondo and currently hold a Black Belt.',
                          'I enjoy watching Basketball, both College Basketball and NBA; my favorite College Team is my UCONN Huskies and my favorite NBA team is the Boston Celtics.',
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
        const hobbyImageBox = document.createElement('DIV');
        hobbyImageBox.setAttribute('id', 'IMAGEBOX');

        hobbyImage.forEach(imgTag => {

          hobbyImageBox.innerHTML += imgTag
        })


        const body =  document.getElementById('body');
        body.appendChild(hobbyImageBox);

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
        const hobbyImageBox = document.getElementById('IMAGEBOX');
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
              hobbyImageBox.remove();
            } else if (event.target === louisImage) {
              let query = document.querySelectorAll('IMG');
              let arr = Array.from(query);

              let obj = arr.filter(tag => tag.id !== 'resume' && tag.id !== 'linkedin' && tag.id !== 'github');
              obj.forEach(tag => tag.remove());
              const divBox = document.getElementsByClassName('boxes')[0];
              divBox.remove();
              hobbyImageBox.remove();
              window.location.reload();
            }
          }
        }
      hobCount++;
    }

})
