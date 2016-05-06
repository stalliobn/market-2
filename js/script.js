(function($) {
'use strict';


  function init() {
    $('#fullpage').fullpage({
      anchors: ['1', '2', '3', '4'],
      menu: '#menu',
      // loopTop: true,
      navigation:true,
      // responsiveWidth: 960,
      responsiveHeight: 400,
      loopBottom: true
    });
  }

  var asd = '600';
  function windowSize(){
    if ($(window).width() <= asd){
      console.log(1);
      $.fn.fullpage.destroy('all');
    } else {
      init();
    }
  }

  $(window).on('load resize',windowSize);



  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');
  open_modal.click( function(event){
   event.preventDefault();
   var div = $(this).attr('data-href');
   overlay.fadeIn(400,
     function(){
       $(div)
       .css('display', 'table').css('z-index', '1000')
       .animate({opacity: 1, top: '30px'}, 200);
     });
 });
  close.click( function(){
    modal
    .animate({opacity: 0, top: '45%'}, 200,
     function(){
       $(this).css('display', 'none').css('z-index', '0');
       overlay.fadeOut(400);
     }
     );
  });






  $(function(){
    var wrapper = $( ".file_upload" ),
    inp = wrapper.find( "input" ),
    btn = wrapper.find( "button" ),
    lbl = wrapper.find( "div" );

    // Crutches for the :focus style:
    btn.focus(function(){
      wrapper.addClass( "focus" );
    }).blur(function(){
      wrapper.removeClass( "focus" );
    });

    // Yep, it works!
    btn.add( lbl ).click(function(){
      inp.click();
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){

      var file_name;
      if( file_api && inp[ 0 ].files[ 0 ] )
        file_name = inp[ 0 ].files[ 0 ].name;
      else
        file_name = inp.val().replace( "C:\\fakepath\\", '' );
      if( ! file_name.length )
        return;

      if( lbl.is( ":visible" ) ){
        lbl.text( file_name );
        btn.text( "Выбрать" );
      }else
      btn.text( file_name );
    }).change();

  });
  $( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
  });


})(jQuery);
