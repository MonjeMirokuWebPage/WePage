$(document).ready(function(){
	var altura = $("#navegacion").offset().top; 
                         
      $(window).scroll(function(){
             
            if($(window).scrollTop() >= altura){
                  $("#navegacion").css("margin-top","-510px");
                  $("#navegacion").css("position","fixed");
                               
            }else{
                  $("#navegacion").css("margin-top","10px");
                  $("#navegacion").css("position","static");
                               
            }
                         
      });
});