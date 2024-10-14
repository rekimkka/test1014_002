$(document).ready(function(){ //실행틀 시작

  AOS.init();

  $(window).on('load', function () {
    AOS.refresh();
  });

  //works 탭메뉴

  $(".works-tap-con > ul > li").hide();

  $(".works-tap-btn li").eq(0).addClass("active");
  $(".works-tap-con > ul > li").eq(0).show();

  $(".works-tap-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    
    /* 순서를 가져오는 index()- 사용자가 선택한 li의 순번을 기억*/
    var indexNum = $(this).index();
    $(".works-tap-con > ul > li").eq(indexNum).fadeIn().siblings().hide();

  });

  //contact
  

}); //실행틀 끝