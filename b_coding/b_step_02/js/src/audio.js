
(function($){
  var audio = $('.media_music');
  var audioSrc = audio.find('source');
  var play = $('.paly');
  var pause = $('.pause');
  var next = $('.next');

  var playList = [];
  playList[0] = 'Wimps_Insomnia';
  playList[1] = 'Brother_Timothy_Clark_when_we_pray';
  playList[2] = 'Wimps_Monday';


  var url = '../media/audio/'
  var playTitle = function(i){
    audio.attr({src:url+playList[i]+'.mp3'}); //audio 태그 안에 넣어야 작동됨
    // audio.empty();
    // audio.append('<source>');
    // audioSrc = audio.find('source');
    // audioSrc.eq(0).attr({src : url + playList[0] + '.mp3', type : 'audio/mp3'});
    // audioSrc.eq(1).attr({src : url + playList[0] + '.ogg', type : 'audio/ogg'});
  }
  var n = 0;
  playTitle(n);
  
  var audio = $('.media_music'); 
  
  play.on('click', function(e){
    e.preventDefault();
    audio.get(0).play();
  });
  pause.on('click', function(e){
    e.preventDefault();
    audio.get(0).pause();
  });
  
  next.on('click',function(e){
    e.preventDefault();
    if(n>=playList.length){n=0}
    else{n+=1;}
    console.log(n);
    audio[0].pause();
    playTitle(n);
    audio[0].play();

  });


})(jQuery); 
 
