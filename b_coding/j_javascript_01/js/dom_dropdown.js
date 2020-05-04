// dom_dropdown.js

var domDropDown = document.getElementsByClassName('drop_menu')[0];
var domDt = document.getElementsByTagName('dt');
var domDd = document.getElementsByTagName('dd');
// console.log(domDt);

// domDt[0].setAttribute('tabindex','0');
// domDt[1].setAttribute('tabindex','1');
// domDt[2].setAttribute('tabindex','2');
// domDt[3].setAttribute('tabindex','3');

var i=0;
for(;i<domDt.length;i++){
  domDt[i].setAttribute('tabindex','0');
}

var DomDdFn =function(action){
  var j=0;
  for(;j<domDd.length;j++){
    domDd[j].style.display = action;
  }
};

domDropDown.addEventListener('click',function(){
  // domDd[0].style.display = 'block';
  // domDd[1].style.display = 'block';
  // domDd[2].style.display = 'block';
  // domDd[3].style.display = 'block';
  // var j=0;
  // for(;j<domDd.length;j++){
  //   domDd[j].style.display = 'block';
  // }
  DomDdFn('block');

});
domDropDown.addEventListener('mouseleave',function(){
  // domDd[0].style.display = 'none';
  // domDd[1].style.display = 'none';
  // domDd[2].style.display = 'none';
  // domDd[3].style.display = 'none';
  // var k=0;
  // for(;k<domDd.length;k++){
  //   domDd[k].style.display = 'none';
  // }
  DomDdFn('none');
});

domDt[0].addEventListener('focus',function(){
  DomDdFn('block');
});
