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
