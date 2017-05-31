 document.addEventListener("deviceready", function() {
     $(".loader").remove();
     //$("html").css("position", "fixed");
 }, false);
 // var bga = setTimeout(function() {
 //     $("html").css("background", "url('http://" + localStorage.cip + ":" + localStorage.cports + "?email=" + profile.getEmail() + "') no-repeat center")
 //     $("html").css("background-size", "100%")
 //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 //     console.log('Name: ' + profile.getName());
 //     console.log('Image URL: ' + profile.getImageUrl());
 //     console.log('Email: ' + profile.getEmail());
 // }, 3000)

 var email
 var json
 $(document).ready(
     function() {


         if (localStorage.getItem("ip")) {

         } else {
             start()
         }

      
         sidemenu()
         $(".checkbox").change(function() {
             email = JSON.stringify({
                 "email": $(".email").is(':checked'),
                 "motion": $(".motion").is(':checked')
             })
             ajaxRequest()
         });
         $(".nav li:eq(3)").click(function() {

             swal({
                 title: "Server IP",
                 text: "The IP of your server:",
                 type: "input",
                 showCancelButton: true,
                 closeOnConfirm: false,
                 animation: "slide-from-top",
             }, function(inputValue) {
                 if (inputValue === false) return false;
                 if (inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false
                 }
                 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue) == false) {
                     swal.showInputError("IP address is invalid!");
                     return false
                 }
                 localStorage.ip = inputValue
                 swal("Success!", "Server IP: " + inputValue, "success");
             });
             if (localStorage.ip) {
                 $(".sweet-alert fieldset input").prop("value", localStorage.ip)
             }
         });
         $(".nav li:eq(4)").click(function() {
             swal({
                 title: "Server Port",
                 text: "The port you are using (no colon):",
                 type: "input",
                 showCancelButton: true,
                 closeOnConfirm: false,
                 animation: "slide-from-top",
             }, function(inputValue) {
                 if (inputValue === false) return false;
                 if (inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false
                 }
                 swal("Success!", "Server Port: " + inputValue, "success");
                 localStorage.ports = inputValue
             });
             if (localStorage.ports) {
                 $(".sweet-alert fieldset input").prop("value", localStorage.ports)
             }
         });
         $(".nav li:eq(5)").click(function() {
             swal({
                 title: "Computer IP",
                 text: "The IP of your computer:",
                 type: "input",
                 showCancelButton: true,
                 closeOnConfirm: false,
                 animation: "slide-from-top",
             }, function(inputValue) {
                 if (inputValue === false) return false;
                 if (inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false
                 }
                 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue) == false) {
                     swal.showInputError("IP address is invalid!");
                     return false
                 }
                 localStorage.cip = inputValue
                 swal("Success!", "Computer IP: " + inputValue, "success");
             });

             if (localStorage.cip) {
                 $(".sweet-alert fieldset input").prop("value", localStorage.cip)
             }
         });
         $(".nav li:eq(6)").click(function() {
             swal({
                 title: "Computer Port",
                 text: "The port you are using (no colon):",
                 type: "input",
                 showCancelButton: true,
                 closeOnConfirm: false,
                 animation: "slide-from-top",
             }, function(inputValue) {
                 if (inputValue === false) return false;
                 if (inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false
                 }
                 swal("Success!", "Computer Port: " + inputValue, "success");
                 localStorage.cports = inputValue
             });
             if (localStorage.cports) {
                 $(".sweet-alert fieldset input").prop("value", localStorage.cports)
             }

         });
         $(".nav li:eq(7)").click(function() {
             swal({
                 title: "Configuration:",
                 text: " <table class='table table-bordered'><tbody><tr><td>Server IP</td><td>" + localStorage.ip + "</td></tr><tr><td>Server Port</td><td>" + localStorage.ports + "</td></tr><tr><td>Computer IP</td><td>" + localStorage.cip + "</td></tr><tr><td>Computer Port</td><td>" + localStorage.cports + "</td></tr></tbody></table>",
                 html: true
             });
         });
         $(".nav li:eq(8)").click(function() {
             $.getJSON("http://" + localStorage.ip + ":" + localStorage.ports, function(json) {
                 var logs = JSON.parse(JSON.stringify(json.logData))
                 logString = "<div style='overflow:scroll; height:400px;'><table class='table table-bordered'><tbody>"
                 for (i = 0; i < logs.length; i++) {
                     logTime=logs[i].time.replace(/\"/g, '')
                     console.log(logTime)
                     logString = logString + "<tr><td>" + moment(logTime).format('MMMM Do YYYY, h:mm') + "</td><td>" + logs[i].amount + "</td></tr>"

                 }
                 logString = logString + "</tbody></table></div>"
                 swal({
                     title: "History",
                     text: logString,
                     html: true
                 })

             });


         });
         $(".nav li:eq(9)").click(function() {
             swal("About", "Made by Shaunak Kale")
         });

         // setInterval(function() {
         //     $(".loader").remove();
         //     $("html").css("background-position", "0px,0px");
         // }, 15000)


     }
 )

 function ajaxRequest() {
     $.ajax({
         url: "http://" + localStorage.ip + ":" + localStorage.ports,
         data: email,
         type: 'POST',
         success: function(res) {},
         error: function(xhr, status, error) {
             console.log('Error: ' + error.message);
             swal("Error!", "Error communicating with server. The server says: " + '"' + error.message + '"', "error");
         },
     });
 }

 function sidemenu() {
     var trigger = $('.hamburger'),
         overlay = $('.overlay'),
         isClosed = false;

     trigger.click(function() {
         hamburger_cross();
     });

     function hamburger_cross() {

         if (isClosed == true) {
             overlay.hide();
             trigger.removeClass('is-open');
             trigger.addClass('is-closed');
             isClosed = false;
         } else {
             overlay.show();
             trigger.removeClass('is-closed');
             trigger.addClass('is-open');
             isClosed = true;
         }
     }

     $('[data-toggle="offcanvas"]').click(function() {
         $('#wrapper').toggleClass('toggled');
     });
 }

 function getAjaxReq() {
     $.getJSON("http://" + localStorage.ip + ":" + localStorage.ports, function(json) {
         $(".email").prop("checked", json.email);
         $(".motion").prop("checked", json.motion);

     });


 }

 function start() {
     swal({
         title: "Server IP",
         text: "The IP of your server:",
         type: "input",
         showCancelButton: true,
         closeOnConfirm: false,
         animation: "slide-from-top",
     }, function(inputValue) {
         if (inputValue === false) return false;
         if (inputValue === "") {
             swal.showInputError("You need to write something!");
             return false
         }
         if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue) == false) {
             swal.showInputError("IP address is invalid!");
             return false
         }
         localStorage.ip = inputValue
         swal("Success!", "Server IP: " + inputValue, "success");
         swal({
             title: "Server Port",
             text: "The port you are using (no colon):",
             type: "input",
             showCancelButton: true,
             closeOnConfirm: false,
             animation: "slide-from-top",
         }, function(inputValue) {
             if (inputValue === false) return false;
             if (inputValue === "") {
                 swal.showInputError("You need to write something!");
                 return false
             }
             swal("Success!", "Server Port: " + inputValue, "success");
             localStorage.ports = inputValue
             swal({
                 title: "Computer IP",
                 text: "The IP of your computer:",
                 type: "input",
                 showCancelButton: true,
                 closeOnConfirm: false,
                 animation: "slide-from-top",
             }, function(inputValue) {
                 if (inputValue === false) return false;
                 if (inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false
                 }
                 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue) == false) {
                     swal.showInputError("IP address is invalid!");
                     return false
                 }
                 localStorage.cip = inputValue
                 swal("Success!", "Computer IP: " + inputValue, "success");
                 swal({
                     title: "Computer Port",
                     text: "The port you are using (no colon):",
                     type: "input",
                     showCancelButton: true,
                     closeOnConfirm: false,
                     animation: "slide-from-top",
                 }, function(inputValue) {
                     if (inputValue === false) return false;
                     if (inputValue === "") {
                         swal.showInputError("You need to write something!");
                         return false
                     }
                     swal("Success!", "Computer Port: " + inputValue, "success");
                     localStorage.cports = inputValue
                     swal({
                         title: "Configuration:",
                         text: " <table class='table table-bordered'><tbody><tr><td>Server IP</td><td>" + localStorage.ip + "</td></tr><tr><td>Server Port</td><td>" + localStorage.ports + "</td></tr><tr><td>Computer IP</td><td>" + localStorage.cip + "</td></tr><tr><td>Computer Port</td><td>" + localStorage.cports + "</td></tr></tbody></table>",
                         html: true
                     });
                     location.reload()
                 });
             });
         });
     });
 }

 function onSignIn(googleUser) {
     profile = googleUser.getBasicProfile();
     var auth2 = gapi.auth2.getAuthInstance();
     $("html").css("background", "url('http://" + localStorage.cip + ":" + localStorage.cports + "?email=" + profile.getEmail() + "') no-repeat center")
     $("html").css("background-size", "100%")
     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
     console.log('Name: ' + profile.getName());
     console.log('Image URL: ' + profile.getImageUrl());
     console.log('Email: ' + profile.getEmail());
     getAjaxReq()


 }