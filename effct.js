// Function to initialize the page with moon displayed and sun hidden
function initializePage() {
  const body = document.querySelector('body');
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');

  body.classList.add('dark'); // Start with dark mode (moon effect)
  sun.style.display = 'none'; // Initially hide the sun
  moon.style.display = 'block'; // Initially show the moon
}

// Function to handle click events on moon
function handleMoonClick() {
  const body = document.querySelector('body');
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');

  body.classList.remove('dark'); // Remove dark mode (moon effect)
  moon.style.transform = 'translateX(50%)'; // Shift moon to the right
  sun.style.transform = 'translateX(0%)'; // Reset sun to original position
  setTimeout(() => {
    moon.style.display = 'none';
    sun.style.display = 'block';
  }, 300); // Delayed switch after animation
}

// Function to handle click events on sun
function handleSunClick() {
  const body = document.querySelector('body');
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');

  body.classList.add('dark'); // Apply dark mode (sun effect)
  sun.style.transform = 'translateX(-50%)'; // Shift sun to the left
  moon.style.transform = 'translateX(calc(-50% - 60px))'; // Shift moon to the left more than half of its radius
  setTimeout(() => {
    sun.style.display = 'none';
    moon.style.display = 'block';
  }, 300); // Delayed switch after animation
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  initializePage(); // Initialize page with moon effect
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');

  moon.addEventListener('click', handleMoonClick);
  sun.addEventListener('click', handleSunClick);
});

// Stars function remains the same as you have it
function stars() {
  const count = 500;
  const scene = document.querySelector(".scene");

  for (let i = 0; i < count; i++) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const duration = Math.random() * 10;
    const size = Math.random() * 2;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;
    star.style.animationDuration = `${5 + duration}s`;
    star.style.animationDelay = `${duration}s`;

    scene.appendChild(star);
  }
}

stars(); // Call the stars function to generate stars on the scene


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.nav-button');
  const tabs = document.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      tabs.forEach(tab => {
        tab.classList.remove('active');
      });

      document.getElementById(target).classList.add('active');

      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
});

//text
consoleText(['A Frontend Developer', 'A problem Solver.', 'An innovative thinker.', 'A...cool guy?', 'Ok......M running out of ideas', 'uhhh...you can scroll down to see my projects now...', 'Seriously my projects are really cool,go check them out!', 'You are uh.... still here?', 'Ok,this has been fun,but M gonna restart the loop now', 'see ya!:)'], 'text', ['#a28089', 'rebeccapurple','#9bc400','#cc7502']);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
// text end

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-link');
  const containers = document.querySelectorAll('.projects-container');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      containers.forEach(container => {
        if (container.classList.contains(category)) {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    });
  });
});



//social icon
// const socialIcons = document.querySelector('.social-links')





