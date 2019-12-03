let ball = document.getElementById("ball");

let div = document.getElementById("ball-div").clientHeight;

var bounceUp = anime({
    autoplay: false,    //We don't want to immediately start the animation
    targets:  ['#ball', 'h1'],  //target the div '#ball'
    translateY: {
      value:    [div-100, '300px'], //When bouncing up, start at 600px and end at 0px
      duration: 575,
      easing:   'easeOutQuad',
    },
    //complete:  function(){ bounceDown.play() }, //Function encapsulation is necessary, otherwise we run into not defined error
  });
  
  var bounceDown = anime({
    autoplay: false,    //See similar comments above
    targets:  ['#ball', 'h1'],
    translateY: {
      value:    ['0px', div-100], //When bouncing down, start at 0px and end at 600px
      duration: 575,
      easing:   'easeInQuad',
    },
    complete:  function(){ bounceUp.play() }, //After we bounce down, start the bounce up animation
  });

ball.addEventListener("click", function(e) {
  e.preventDefault();
  bounceDown.play();
});