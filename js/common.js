$(document).ready(function(){ //시행틀 시작

  AOS.init();
  
  //데스크탑 depth2
  $(".depth2").hide();

  $(".gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
  });

  //모바일 mgnb-wrap
  $(".menu").click(function(){
    $(".mgnb-wrap").animate({"right" : "0"});
  });

  $(".m-close").click(function(){
    $(".mgnb-wrap").animate({"right" : "-100%"});

    $(".m-depth2").hide();
  });

  //모바일 m-depth2
  $(".m-depth2").hide();

  $(".mgnb > li").click(function(){
    $(this).children(".m-depth2").slideDown();

    $(this).siblings().children(".m-depth2").slideUp();
  });

  




}); //실행틀 끝