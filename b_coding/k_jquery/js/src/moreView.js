// moreView.js

(function($){
  var content = $('.content');
  var moreBtn = $('.more').find('button');

  var sampleCode = '<div class="person"><span class="num"></span>\
                      <div class="img"><img src="" alt=""></div>\
                      <dl>\
                        <dt>name</dt><dd class="peopleName">xido lee</dd>\
                        <dt>email</dt><dd class="email">xidoweb@gmail.com</dd>\
                      </dl>\
                    </div>';
  
  // content.append(sampleCode);

  $.ajax({
    url:"../data/people.json",
    // async:false,
  }).done(function(data){
    console.log(data);
    var i = 0;
    var person;
    var myView = 5;
    var maxN = 30;
    var LoadData = function(n){
      var k = n || myView;
      var j = i + k;
      for(;i<j;i++){
        content.append(sampleCode);
        person = $('.person');
        person.eq(i).find('span.num').text(i+1);
        person.eq(i).find('.peopleName').text(data[i].name);
        person.eq(i).find('.email').text(data[i].email);
      }
      if(i>=maxN){moreBtn.hide();}
    }

    LoadData(10);
    
    moreBtn.on('click',function(e){
      e.preventDefault();
      LoadData()  ;
    });

  });


})(jQuery);