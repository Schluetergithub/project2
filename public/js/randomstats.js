// returns a random number between 0 and 25 with a decimal to the tenth place
// Math.floor(Math.random()*250)/10;

// touchdown 50-50 calculation
// Math.random()>.5;

// all calculations occur on set timeout.

// add things for fumbles and interceptions

var qbYardsTotal = 0;

var qbTouchdownsTotal = 0;
var qbTouchdownScoreConverted;
var qbTotalScore = 0;

var rbYardsTotal = 0;
var rbTouchdownsTotal = 0;
var rbTouchdownScoreConverted;
var rbTotalScore = 0;

var wrYardsTotal = 0;
var wrTouchdownsTotal = 0;
var wrTouchdownScoreConverted;
var wrTotalScore = 0;

$(document).ready(function()
{
    var gameInterval;
    var intervalCount = 0;


    $('#simulate-btn').on('click',function(){
       
        gameInterval = setInterval(function() {
            intervalCount++;
            qbStats();
            rbStats();
            wrStats();

            if(intervalCount == 10){
                clearInterval(gameInterval);
            }

         }, 1000); // end of interval
    
    }); //end on onclick function

    
});//end of doc.ready


function qbStats() {
    // qb calculations
    // every 7 seconds
    var qbYards = getRandomInt(-5, 25);

    (qbYardsTotal = qbYardsTotal + qbYards);
    $("#qbYards").html(qbYardsTotal);

    console.log("qbYards " + qbYards);

    // touchdown every 21 seconds

    var qbTouchdowns = getRandomInt(0,2);

    (qbTouchdownsTotal = qbTouchdownsTotal + qbTouchdowns);
    $("#qbTouchdowns").html(qbTouchdownsTotal);
    console.log("qbTouchdowns " + qbTouchdowns);
    //Math.random()>.5;

    (qbTouchdownScoreConverted = qbTouchdownsTotal * 6);
   

    (qbTotalScore = qbTouchdownScoreConverted + qbYardsTotal);
    $("#qbScore").html(qbTotalScore);
    console.log("qbTotalScore " + qbTotalScore);

    //Math.random()>.5;


    // hailMary touchdown every 59 seconds
    //Math.random()>.9;
};

function rbStats() {
    // rb calculations
    // every 5 seconds 
    var rbYards = getRandomInt(-5, 25);

    (rbYardsTotal = rbYardsTotal + rbYards);
    $("#rbYards").html(rbYardsTotal);

    console.log("rbyards " + rbYards);


    // touchdown every 25 seconds
    var rbTouchdowns = getRandomInt(0,2);

    (rbTouchdownsTotal = rbTouchdownsTotal + rbTouchdowns);
    $("#rbTouchdowns").html(rbTouchdownsTotal);
    console.log("rbTouchdowns " + rbTouchdowns);
    //Math.random()>.5;

    (rbTouchdownScoreConverted = rbTouchdownsTotal * 6);
   

    (rbTotalScore = rbTouchdownScoreConverted + rbYardsTotal);
    $("#rbScore").html(rbTotalScore);
    console.log("rbTotalScore " + rbTotalScore);
};

function wrStats() {
    // wr calculations
    // wr every 7 seconds
    var wrYards = getRandomInt(-5, 25);

    (wrYardsTotal = wrYardsTotal + wrYards);
    $("#wrYards").html(wrYardsTotal);

    console.log("wryards " + wrYards);


    // touchdown every 21 seconds
    var wrTouchdowns = getRandomInt(0,2);

    (wrTouchdownsTotal = wrTouchdownsTotal + wrTouchdowns);
    $("#wrTouchdowns").html(wrTouchdownsTotal);
    console.log("wrTouchdowns " + wrTouchdowns);
    //Math.random()>.5;

    (wrTouchdownScoreConverted = wrTouchdownsTotal * 6);
   

    (wrTotalScore = wrTouchdownScoreConverted + wrYardsTotal);
    $("#wrScore").html(wrTotalScore);
    console.log("wrTotalScore " + wrTotalScore);


    // hailMary touchdown
    // Math.random()>.9;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }



