



  $(".photo").css("background-color", "white")
  $(".photo").css("color", "black")

  $(".photo").click(function func1(){
      
  $(".portfolioChildBlock").attr("src", "img/1.jpg")
      
  $(".photo").css({
      "background-color": "white", 
      "color": "black"})
   
  $(".graphic").css({
      "background-color": "black", 
      "color": "white"})
  
  
  $(".web").css({
      "background-color": "black", 
      "color": "white"})
  
  
});

  
$(".graphic").click(function func2() {
    
   $(".portfolioChildBlock").attr("src", "img/2.jpg")
 
   $(".photo").css({
       "background-color": "black", 
       "color": "white"})
    
   $(".graphic").css({
       "background-color": "white", 
       "color": "black"})
   
  
   $(".web").css({
       "background-color": "black",
       "color": "white"})
  
});


$(".web").click(function func3() {
  
  $(".portfolioChildBlock").attr("src", "img/3.jpg")
  
  $(".web").css({
      "background-color": "white", 
      "color": "black"})
   
  $(".graphic").css({
      "background-color": "black", 
      "color": "white"})
  
  $(".photo").css({
      "background-color": "black", 
      "color": "white"})
  
  
});

