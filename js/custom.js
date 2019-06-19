/*global $, window*/
$(function () {
  
    'use strict';
    
    // Triggle NiceScroll
    
    $('html').niceScroll({
        
        cursorcolor: '#0cb8b6',
        cursorwidth: 4,
        cursorborder: '1px solid #0cb8b6'
        
    });
    
    // Navbar With Scroll Changed
    
    $(window).scroll(function () {
        
        if ($('.navbar').offset().top > 50) {
            
            $('.navbar').addClass('top-nav-collapse');
            
        } else {
            
            $('.navbar').removeClass('top-nav-collapse');
            
        }
        
    });
    
    // Header Arrow
    
    $('.header-arrow').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-services').offset().top
            
        }, 1000);
        
    });
    
    // Active Navbar
    
    $('.nav-item').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    // Smooth scroll To Div
    
    $('.nav-item').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1200);
        
    });
    
    if ($('#ser').offset().top > 50) {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    }
    
});