alert('Сайт находится в разработке :D')

if(window.innerWidth > 600){
    $("location").ready(
    function(){
        $(".head-bar").animate({
            "top": "25px"
        }, 500);

        $(".head-bar").animate({
            "top": "20px"
        }, 200);

        $(".prewiew").animate({
            "margin-left": "160px",
        }, 800);

        $(".prewiew").animate({
            "margin-left": "150px",
        }, 200);
    }

)
}

