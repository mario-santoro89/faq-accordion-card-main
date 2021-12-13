$('h3').click(function(e) {
    $(e.target).next('div').siblings('div').slideUp();
    $(e.target).next('div').slideToggle(); 
    $(e.target).toggleClass('clicked');
    $(e.target).siblings('h3').removeClass('clicked');
    
})