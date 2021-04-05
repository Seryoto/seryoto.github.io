



  $(".photo").css("background-color", "white")
  $(".photo").css("color", "black")

$(".photo").click(function func1(){
  $(".portfolioChildBlock").attr("src", "img/1.jpg")
  $(".photo").css("background-color", "white")
  $(".photo").css("color", "black")
   
  $(".graphic").css("background-color", "black")
  $(".graphic").css("color", "white")
  
  
  $(".web").css("background-color", "black")
  $(".web").css("color", "white")
  
  
});
  
$(".graphic").click(function func2() {
 
   $(".photo").css("background-color", "black")
   $(".photo").css("color", "white")
    
   $(".graphic").css("background-color", "white")
   $(".graphic").css("color", "black")
   
   $(".portfolioChildBlock").attr("src", "img/2.jpg")
  
   $(".web").css("background-color", "black")
   $(".web").css("color", "white")
  
});

$(".web").click(function func3() {
  
  $(".portfolioChildBlock").attr("src", "img/3.jpg")
  
  $(".web").css("background-color", "white")
  $(".web").css("color", "black")
   
  $(".graphic").css("background-color", "black")
  $(".graphic").css("color", "white")
  
  $(".photo").css("background-color", "black")
  $(".photo").css("color", "white")
  
  
});

