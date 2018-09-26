// Capture Button Click
$("#add-team").on("click", function (event) {
  // prevent page from refreshing when form tries to submit itself
  event.preventDefault();

  // Capture user inputs and store them into variables
  var name = $("#teamname-input").val().trim();
  var qbs = $("#Qbs option:selected").text();
  var rbs = $("#Rbs option:selected").text();
  var wrs = $("#Wrs option:selected").text();

  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(qbs);
  console.log(rbs);
  console.log(wrs);

  // Replaces the content in the "recent-member" div with the new info
  $("#teamname-display").text(name);
  $("#qbs-display").text(qbs);
  $("#rbs-display").text(rbs);
  $("#wrs-display").text(wrs);

  // Clear localStorage
  sessionStorage.clear();

  // Store all content into localStorage
  sessionStorage.setItem("teamname", name);
  sessionStorage.setItem("qbs", qbs);
  sessionStorage.setItem("rbs", rbs);
  sessionStorage.setItem("wrs", wrs);
});

// By default display the content from localStorage
$("#teamname-display").text(sessionStorage.getItem("name"));
$("#email-display").text(sessionStorage.getItem("qbs"));
$("#age-display").text(sessionStorage.getItem("rbs"));
$("#comment-display").text(sessionStorage.getItem("wrs"));
