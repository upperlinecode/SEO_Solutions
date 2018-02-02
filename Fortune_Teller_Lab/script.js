
var messages = ["I see pasta in your future.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "A short pencil is usually better than a long memory any day."]
var fortune_teller = document.getElementById("fortune");
fortune_teller.addEventListener('click', function(){
  var index = Math.floor(Math.random() * messages.length);
  // console.log("here")
  document.getElementById("text").innerHTML = messages[index];
  // fortune_teller.style.height = '100px'
})
