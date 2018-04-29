$(document).ready(function(){
  var sound = new Howl({
    src: ['assets/WeFunk-Synth-Loop.mp3']


});

$('#synth').click(function(){
  sound.play();


});

});
