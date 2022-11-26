document.getElementById("main");
var fontSize = 72;
if(window.screen.width > 700)
    fontSize = 32;
else if(window.screen.width < 1200)
    fontSize = 72;
var vara = new Vara(
    "#container",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  [
    {
      text : "Where Spectaculars and Comforts Meet",
      y: 280,
      fromCurrentPosition: {y:false},
      duration: 4000
    },   
  ],
  {
      strokeWidth: 2,
      color:"#fff",
      fontSize:fontSize,
      textAlign:"center"
  }
);
/*vara.ready(function(){
  var erase = true;
  vara.animationEnd(function(i, o){
      if(i == "no_erase") erase = false;
      if(erase){
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = 1;
      }
  });

}); */