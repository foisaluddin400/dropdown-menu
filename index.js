$("document").ready(function(){



    $(".drop-1").hide();

    $(".show").click(function(){
        $(".drop-1").slideDown();
        $(".show").hide();
        $(".hide").show();
    });
    $(".hide").click(function(){
        $(".drop-1").slideUp();
        $(".hide").hide();
        $(".show").show();
    });








});