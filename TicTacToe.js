// var rone= document.querySelector('#one');
// var rtwo= document.querySelector('#two');
// var rthree= document.querySelector('#three');
// var rfour= document.querySelector('#four');
// var rfive= document.querySelector('#five');
// var rsix= document.querySelector('#six');
// var rseven= document.querySelector('#seven');
// var reight= document.querySelector('#eight');
// var rnine= document.querySelector('#nine');
var tbody= document.querySelector('#tble');
var tdd= document.getElementsByTagName('td')

tbody.addEventListener('click',function(){
  var ch=event.target;
  if (ch.innerHTML==''){
    ch.innerHTML='X';
  }
  else if (ch.innerHTML=='X') {
    ch.innerHTML='O';
  }
  else if (ch.innerHTML=='O') {
    ch.innerHTML='';
  }
  else{
    console.log('Something wrong with element id '+ ch.id +'!');
  }
})

function restart(){
  for (i=0; i<9; i++){
    tdd[i].innerHTML='';
  }
}
