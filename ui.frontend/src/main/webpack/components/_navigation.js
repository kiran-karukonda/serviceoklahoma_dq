// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";
    var $;
    $ = require('jquery');
    $(".list__header").append('<div class="mobile_menu"></div>');
    $(".mobile_menu").on("click",function(){
        $(this).toggleClass("close");
        $(".cmp-navigation").toggle();
        $(".cmp-navigation__group").each(function(index,element){
            if(index==0){
                $(this).append($(".list.list__header .links__nav--items"));
            }
        });
        
    });

    $(".cmp-navigation>ul>li").each(function(){
        if($(this).find(".cmp-navigation__group").length>0){
            if($(this).find(".cmp-navigation__group>li").length<=4){
                $(this).find(".cmp-navigation__group").addClass("one-column");
            }
            $(this).find(">a").append('<span class="drop-arrow"></span>');
            $(this).append('<span class="mobile_arrow"></span>');
        }
    });

    
    $(".mobile_arrow").on("click",function(){
        $(this).parent().toggleClass("open");
        $(this).parent().find("ul").toggleClass("selected");        
    });
   
   
   function makeNavResponsive(){
        var windowWidth = $(window).width();
        var actualAppWidth = 936;
        var balanceWidth = (windowWidth-actualAppWidth)/2;
        if(windowWidth<1024){
            $(".cmp-experiencefragment--header .image, .cmp-navigation").removeAttr("style");
            $(".cmp-experiencefragment--header .list.list__header, .cmp-navigation").removeAttr("style");
            $(".cmp-navigation__group").each(function(index,element){
                if(index!=0){
                    $(this).removeAttr("style");
                    $(this).removeAttr("style");
                }
            });
            console.group("Mobile");
        }else{
            $(".cmp-experiencefragment--header .image, .cmp-navigation").css("padding-left",balanceWidth);
            $(".cmp-experiencefragment--header .list.list__header").show();
            $(".cmp-experiencefragment--header .list.list__header, .cmp-navigation").css("padding-right",balanceWidth);

            $(".cmp-navigation__group").each(function(index,element){
                if(index!=0){
                    $(this).css("padding-left",balanceWidth);
                    $(this).css("padding-right",balanceWidth);   
                }
            });
        }
    }
    $(window).on('resize',function(){
        makeNavResponsive();
    });
    makeNavResponsive();

}());
