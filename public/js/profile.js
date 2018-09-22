$.get("/api", function(data) {

  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "character-well-" + i);
    $("#well-section").append(wellSection);

    $("#character-well-" + i).append("<h2>" + data[i].qb_name + "</h2>");
    $("#character-well-" + i).append("<h3>Yards Gained: " + data[i].passingYards_gained + "</h4>");
    $("#character-well-" + i).append("<h3>Touchdowns: " + data[i].passingTouchdowns + "</h4>");
    $("#character-well-" + i).append("<h3>Player Value: " + data[i].qbPlayerValue + "</h4>");
  }
});
