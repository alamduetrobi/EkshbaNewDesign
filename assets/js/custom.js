(function ($) {
  "use strict";


  function checkMe(selected)
  {
  if(selected)
  {
  document.getElementById("divcheck").style.display = "";
  } 
  else
  {
  document.getElementById("divcheck").style.display = "none";
  }
  
  }

// for(let i = 1; i<=10; i++){

  $('ul.profilenav li').hover(function(){
    
    $(this).addClass("addhover");
    // $("#arrowchange2").attr('src','images/arrowlight.png');



  }, function(){
    // $("#arrowchange2").attr('src','images/arrow_forward_grey.png');
    $(this).removeClass("addhover");

  });



  
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
  });

  // Parsly Validation

  $(document).ready(function(){
    $('#sompadonaform').parsley();
   });



   //  Form Validation checkbox

   
$(function(){
  $('#rect-checkbox > input').nicelabel();
  $('#rect-radio > input').nicelabel();
      
  $('#circle-checkbox > input').nicelabel();

  $('#circle-radio > input').nicelabel();

  $('#text-checkbox > input').nicelabel();

  $('#text-radio > input').nicelabel();
  $('#text-checkbox-ico > input:eq(0)').nicelabel({
    checked_ico: './ico/checked.png',
    unchecked_ico: './ico/unchecked.png'
  });
  $('#text-checkbox-ico > input:eq(1)').nicelabel({
    checked_ico: './ico/checked.png',
    unchecked_ico: './ico/unchecked.png'
  });
  $('#text-checkbox-ico > input:eq(2)').nicelabel({
    checked_ico: './ico/checked.png',
    unchecked_ico: './ico/unchecked.png'
  });
  $('#text-checkbox-ico > input:eq(3)').nicelabel({
    uselabel: false
  });
  
});




$(document).ready(function() {
  $('#email').blur(function() {
      var email = $('#email').val();
      if (IsEmail(email) == false) {
          $('#sign-up').attr('disabled', true);
          $('#popover-email').removeClass('hide');
      } else {
          $('#popover-email').addClass('hide');
      }
  });
  $('#password').keyup(function() {
      var password = $('#password').val();
      if (checkStrength(password) == false) {
          $('#sign-up').attr('disabled', true);
      }
  });
  $('#confirm-password').blur(function() {
      if ($('#password').val() !== $('#confirm-password').val()) {
          $('#popover-cpassword').removeClass('hide');
          $('#sign-up').attr('disabled', true);
      } else {
          $('#popover-cpassword').addClass('hide');
      }
  });
  $('#contact-number').blur(function() {
      if ($('#contact-number').val().length != 10) {
          $('#popover-cnumber').removeClass('hide');
          $('#sign-up').attr('disabled', true);
      } else {
          $('#popover-cnumber').addClass('hide');
          $('#sign-up').attr('disabled', false);
      }
  });
  $('#sign-up').hover(function() {
      if ($('#sign-up').prop('disabled')) {
          $('#sign-up').popover({
              html: true,
              trigger: 'hover',
              placement: 'below',
              offset: 20,
              content: function() {
                  return $('#sign-up-popover').html();
              }
          });
      }
  });

  function IsEmail(email) {
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regex.test(email)) {
          return false;
      } else {
          return true;
      }
  }

  function checkStrength(password) {
      var strength = 0;


      //If password contains both lower and uppercase characters, increase strength value.
      
      if (password.match(/([a-z])/)) {
          strength += 1;
          $('.low-case').addClass('text-success');
          $('.low-case i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');


      } else {
          $('.low-case').removeClass('text-success');
        //   $('.low-case i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }          
      if (password.match(/([A-Z])/)) {
          strength += 1;
          $('.upper-case').addClass('text-success');
          $('.upper-case i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');


      } else {
          $('.upper-case').removeClass('text-success');
        //   $('.upper-case i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      //If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
          strength += 1;
          $('.one-number').addClass('text-success');
          $('.one-number i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

      } else {
          $('.one-number').removeClass('text-success');
        //   $('.one-number i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      //If it has one special character, increase strength value.
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
          strength += 1;
          $('.one-special-char').addClass('text-success');
          $('.one-special-char i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

      } else {
          $('.one-special-char').removeClass('text-success');
        //   $('.one-special-char i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      if (password.length > 7) {
          strength += 1;
          $('.eight-character').addClass('text-success');
          $('.eight-character i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

          $('.toggle-disabled').prop("disabled", false);
          $('.fa-ban').hide();

      } else {
          $('.eight-character').removeClass('text-success');
        //   $('.eight-character i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }




      // If value is less than 2

      if (strength < 2) {
          $('#result').removeClass()
          $('#password-strength').addClass('progress-bar-danger');

          $('#result').addClass('text-danger').text('Very Week');
          $('#password-strength').css('width', '10%');
      } else if (strength == 2) {
          $('#result').addClass('good');
          $('#password-strength').removeClass('progress-bar-danger');
          $('#password-strength').addClass('progress-bar-warning');
          $('#result').addClass('text-warning').text('Week')
          $('#password-strength').css('width', '60%');
          return 'Week'
      } else if (strength == 4) {
          $('#result').removeClass()
          $('#result').addClass('strong');
          $('#password-strength').removeClass('progress-bar-warning');
          $('#password-strength').addClass('progress-bar-success');
          $('#result').addClass('text-success').text('Strength');
          $('#password-strength').css('width', '100%');
        //   $('.toggle-disabled').prop("disabled", false);
        //   $('.fa-ban').hide();

          return 'Strong'
      }

  }

});


  

})(jQuery);



