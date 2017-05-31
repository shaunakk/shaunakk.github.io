$(document).ready(
    function() {
        var count
        var countdown
        $(".number").hide()
        $(".start").click(
            function() {
                $(".instructions").remove()
                $(".number").show()
                $(".countdown").text("hi")
                countdown = 10
                $(".countdown").text(countdown)
                count = setInterval(function() {
                    if (countdown == 1) {
                        clearInterval(count)
                        $(".countdown").css("color", "red")
                        $(".countdown").text("You are out of time!")
                        $(".userInput").remove()
                        $(".enterButton").remove()
                        return
                    }
                    countdown--
                    $(".countdown").text(countdown)
                }, 1000)
            }
        )
        $(".enterButton").click(
            function() {
                if (parseInt($(".userInput").val()) > 0 && parseInt($(".userInput").val()) < 21  ) {
                    $(".instructions").remove()
                    $.ajax({
                            method: "POST",
                            url: "http://sciencefair-shaunakkale.rhcloud.com/",
                            data: JSON.stringify({
                                number: parseInt($(".userInput").val()),
                            })
                        })
                        .done(function(msg) {
                        });
                    $(".countdown").text("Your trial has been stored. Thank You.")
                    clearInterval(count)
                    $(".countdown").css("color", "#1cb495")
                    $(".countdown").show()
                    $(".userInput").remove()
                    $(".enterButton").remove()
                } else {
                    clearInterval(count)
                    $(".countdown").css("color", "red")
                    $(".countdown").text("ERROR: Invalid Input(not an integer from 1-20)")
                    $(".userInput").remove()
                    $(".enterButton").remove()
                }
            }
        )
    }
)