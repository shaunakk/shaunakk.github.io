$(document).ready(
  function(){
    $(".bugForm").hide()
    $("#bugReport").click(
      function(){
        $(".jumbotron, .webNav").hide()
        $(".bugForm").show()
      }
    )
    $("#back").click(
      function(){
        $(".jumbotron, .webNav").show()
        $(".bugForm").hide()
      }
    )
  }
)
