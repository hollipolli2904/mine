//Initial Breite bei Page Load

$('#t_Body_nav').css('width', '320px');

$('#t_Body_title').css('left', '320px');

/* hier 48 Pixel abziehen von der Breite beim Content */
$('#t_Body_content').css('margin-left', '272px');

apex.jQuery("#t_TreeNav").on('theme42layoutchanged', function(event, obj) {
   // hier Menü einklappen
   if (obj.action == 'collapse') {
          $('#t_Body_nav').css('width', '50px');

          $('#t_Body_title').css('left', '50px');

          $('#t_Body_content').css('margin-left', '50px');
       
          if ($('.t-PageBody').hasClass('js-navExpanded')) {
             $('#t_Button_navControl').click();
           };      
   };  
    
   // hier Menü ausklappen
   if (obj.action == 'expand') {
          $('#t_Body_nav').css('width', '320px');

          $('#t_Body_title').css('left', '320px');

          /* hier 48 Pixel abziehen von der Breite beim Content */
          $('#t_Body_content').css('margin-left', '272px');


          if ($('.t-PageBody').hasClass('js-navCollapsed')) {
             $('#t_Button_navControl').click();
          };      
   };  
    
    
});

(function($) {
    
$(window).on('theme42ready', function() {

    /* Expand on mouse over, collapse on mouse out */
    $('.t-Body-nav').click(
        function(){
            //only expand if the side menu is collapsed
            $('.t-PageBody:not(.js-navExpanded) #t_Button_navControl').click();
        }
    );
});

})(apex.jQuery);
