var box = document.getElementById('color');
box.addEventListener('click', function(){
box.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ','+ Math.floor(Math.random()*255) + ')'



})
