var xmlhttp = new XMLHttpRequest();

$("#name, #email, #phone, #subject, #message").keyup(function(){

  var name = $('#name').val();
  var mail = $('#email').val();
  var phone = $('#phone').val();
  var subject = $('#subject').val();
  var text = $('#message').val();
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if( name == '' || mail == '' || subject == '' || text == '' ) {
    document.getElementById('errormail').classList.add('kontakt--inner-button--message-show');
  } else if(!re.test(mail)) {
      document.getElementById('errormail').classList.add('kontakt--inner-button--message-show');
      $('#email').focus();
  } else {
    $(".contact-side-right-button").removeClass("button-disabled");
  }
});

$("#contactform").submit(function(event){
  event.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var subject = $('#subject').val();
  var message = $('#message').val();
    document.getElementById('errormail').classList.remove('kontakt--inner-button--message-show');

    var data = {"name": name, "email": email, "phone": phone, "subject": subject, "message": message};
    $("#contactform").prop("disabled", true);

    var request = $.ajax({
      url: "./php/mail.php",
      type: "post",
      data: data
    });
    request.done(function (response, textStatus, jqXHR) {
      var jsonobj = response;
      $("#errormail").text(jsonobj.Message);
      if(jsonobj.status) {
        document.getElementById("contactform").reset();
      }
    })
    request.fail(function (jqXHR, textStatus, errorThrown){
    // Log the error to the console
      console.error(
        "The following error occurred: "+
        textStatus, errorThrown
      );
    });
    request.always(function () {
      // Reenable the inputs
      $("#contactform").prop("disabled", false);
    });

})
