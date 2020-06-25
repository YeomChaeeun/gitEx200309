// zoom.js

(function($){
  var url = '../img/gallery/';
  var galleryImg = [
    {'big':['gallery_01.jpg', 'gallery_02.jpg', 'gallery_03.jpg']},
    {'thum':['gallery_01.jpg', 'gallery_02.jpg', 'gallery_03.jpg']}
  ];

  var product = $('.product');
  var big = product.find('.big');
  var thum = product.find('.thum');
  var zoom = product.find('.zoom');

  thum.append('<ul></ul>');
  var thumUl = thum.find('ul');
  var i=0;
  var thumLength = galleryImg[1].thum.length;
  console.log(thumLength);
  for(;i<thumLength;i++){
    thumUl.append('<li><a href="#"><span></span></a></li>');
  }
  




})(jQuery);