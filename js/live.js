$(document).ready(function() {
  Parse.initialize("j5fDRlZqkXQOV2H8KYEN0GiPKfpIOwsGcOrvs3ZA", "9wHLFuxcj6TwHZVfhQvrWLwwfx8kjz8dKxqln7DI");
  var Info = Parse.Object.extend("Info");
  var query = new Parse.Query(Info);
  query.find({
    success: function(results) {
      results = JSON.stringify(results);
      results = JSON.parse(results);
      var obj = results[0]
      password = obj.passwords
      username = obj.usernames
    },

    error: function(error) {

    }
  });
  $(".noLogin").hide()
  $("#submit").click(
    function() {
      if ($("#username").val() == window.username && $("#password").val() == window.password) {
        $(".noLogin").show()
        $(".login").hide()
      } else {
        if (window.wrongs) {
          if(window.wrongs==1)
          {
            $("*").hide()
          }
          window.wrongs = 1
          $("#wrong").text("Username or password is wrong! " + window.wrongs + " more attempt!")
          return
        }
          else {

          wrongs = 2
          $("#wrong").text("Username or password is wrong! " + wrongs + " more attempts!")
          return

        }


      }
    }
  )
});
