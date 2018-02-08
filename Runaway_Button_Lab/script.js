var button = document.getElementById('b');
var down = 0;
button.addEventListener('click', function(){
  // moving down and diagonal
  button.style.top = down + 50 + "px";
  button.style.left = down + 50 + "px";
  down = down + 50;

  // random location
  // var left = Math.random()*95;
  // var top = Math.random()*95;
  // button.style.left = "" + left + "%";
  // button.style.top = "" + top + "%";
})
