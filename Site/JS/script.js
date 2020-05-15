window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  console.log ("Hello, thank you for visiting my portfolio");

  const scoring=document.querySelector(".score")
  const phone=document.getElementById(`phone`);
  phone.addEventListener(`keyup`, validate);

  function validate (e) {
    if (e.key != NaN) {
      phone.innerHTML=e.key;
    } else {
      alert('Please type a number')
    }
 
  }
 
  
  //nav phys

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.scroll-down');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      mass: 2,
      //damping: 10
    }).start(ballXY);
  });

  //second scroll game

  const { easing, physics, spring2, tween, styler1, listen1, value1, transform } = window.popmotion;
const { pipe, clampMax } = transform;

const ball1 = document.querySelector('.bounce');
const ballStyler = styler(ball1);
const ballY = value(0, (v) => ballStyler.set('y', Math.min(0, v)));
const ballScale = value(1, (v) => {
  ballStyler.set('scaleX', 1 + (1 - v));
  ballStyler.set('scaleY', v);
});
let count = 0;
let isFalling = false;

const ballBorder = value({
  borderColor: '',
  borderWidth: 0
}, ({ borderColor, borderWidth }) => ballStyler.set({
  boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
}));

const checkBounce = () => {
  if (!isFalling || ballY.get() < 0) return;
  
  isFalling = false;
  const impactVelocity = ballY.getVelocity();
  const compression = spring({
    to: 1,
    from: 1,
    velocity: - impactVelocity * 0.01,
    stiffness: 800
  }).pipe((s) => {
    if (s >= 1) {
      s = 1;
      compression.stop();
      
      if (impactVelocity > 20) {
        isFalling = true;
        gravity
          .set(0)
          .setVelocity(- impactVelocity * 0.5);
      }
    }
    return s;
  }).start(ballScale);
};

const checkFail = () => {
  if (ballY.get() >= 0 && ballY.getVelocity() !== 0 && ball1.innerHTML !== 'Tap me') {
    
    count = 0;
    tween({
      from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
      to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
    }).start(ballBorder);
    ball1.classList.remove("box");
    ball1.innerHTML = 'Tap me';
  }
};

const gravity = physics({
  acceleration: 3500,
  restSpeed: false
}).start((v) => {
  ballY.update(v);
  checkBounce(v);
  checkFail(v);
});

listen(ball1, 'mousedown touchstart').start((e) => {
  e.preventDefault();
  count++;
  ball1.classList.add("box");
  ball1.innerHTML = "Higher!";
  scoring.innerHTML = `Your score: ${count}`;
  isFalling = true;
  ballScale.stop();
  ballScale.update(1);

  gravity
    .set(Math.min(0, ballY.get()))
    .setVelocity(-1200);

  tween({
    from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
    to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
  }).start(ballBorder);
});