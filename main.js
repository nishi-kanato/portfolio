'use strict';

$(function(){
  $("#hamburger").click(function(){
    $(".header-nav").fadeToggle();
       $("body").toggleClass("hidden");
  });

  $(".link").click(function(){
    $(".header-nav").css("display","none");
    $("body").removeClass("hidden");
  });
});
