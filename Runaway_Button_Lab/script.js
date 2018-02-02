var button = document.getElementById('b');
button.addEventListener('click', function(){
  var left = Math.random()*95;
  var top = Math.random()*95;
  button.style.left = "" + left + "%";
  button.style.top = "" + top + "%";
})
