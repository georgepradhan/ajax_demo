$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var key_value_data = $(this).serialize(); 
    console.log(this);
    console.log(key_value_data);
    console.log(typeof(key_value_data));// input in string user_input=""

    $.ajax({
      url: this.action,
      type: this.method,
      data: key_value_data
    }).done(function(server_data){
      // $('input[name=user_input]').val('');// if we want to clear the user's input on the form
      $('.grandma').remove();// in order to "refresh" the dom, i.e. not keep history of past responses
      $('h1').after(server_data);
    });      
  });
});
