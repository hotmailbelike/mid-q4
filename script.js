/* Add your script here */
$("#list").click(function() {
  $.ajax({
    url: "http://skeleton.mernbook.com/api/users",
    method: "GET",
    success: function(response) {
      response.forEach(element => {
        let temp = $("<p>").text(element.name);
        $("#users").append(temp);
      });
    }
  });
  // .done(function(response) {
  //   // console.log(response);
  // response.forEach(element => {
  //   let temp = $("<p>").text(element.name);
  //   $("#users").append(temp);
  // });
  // })
  // .fail(function(response) {
  //   console.log(response);
  // });
});

$("#add").click(function() {
  let user = { name: "", email: "", password: "" };
  user.name = $("#name").val();
  user.email = $("#email").val();
  user.password = $("#password").val();

  $.ajax({
    url: "http://skeleton.mernbook.com/api/users",
    method: "POST",
    data: user
  })
    .done(function(response) {
      // console.log(response);
      $("#name").val("");
      $("#email").val("");
      $("#password").val("");
      $("#error").text("User Created");
    })
    .fail(function(response) {
      $("#error").text(response.responseJSON.error);
    });
});
