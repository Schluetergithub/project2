// returns a random number between 0 and 25 with a decimal to the tenth place
// Math.floor(Math.random()*250)/10;

// touchdown 50-50 calculation
// Math.random()>.5;

// all calculations occur on set timeout.

// add things for fumbles and interceptions

var qbYardsTotal = 0;

var qbTouchdownsTotal = 0;
var qbTouchdownScoreConverted = 0;
var qbTotalScore = 0;

var rbYardsTotal = 0;
var rbTouchdownsTotal = 0;
var rbTouchdownScoreConverted = 0;
var rbTotalScore = 0;

var wrYardsTotal = 0;
var wrTouchdownsTotal = 0;
var wrTouchdownScoreConverted = 0;
var wrTotalScore = 0;

$(document).ready(function()
{
    var gameInterval;
    var intervalCount = 0;


    $('#simulate-btn').on('click',function(){

       $('#simulate-btn').hide();

        gameInterval = setInterval(function() {
            intervalCount++;
            qbStats();
            rbStats();
            wrStats();

            if(intervalCount == 20){
                $('#simulate-btn').show();
                clearInterval(gameInterval);
            }

            if(intervalCount / 5 == 1) {
                qbTouchdowns();
                rbTouchdowns();
                wrTouchdowns();
            }

            if(intervalCount / 12 == 1) {
                qbTouchdowns();
                rbTouchdowns();
                wrTouchdowns();
            }

            if(intervalCount / 16 == 1) {
                qbTouchdowns();
                rbTouchdowns();
                wrTouchdowns();
            }

            if(intervalCount == 20) {
                qbHailMary();
                wrHailMary();
            }

         }, 3000); // end of interval
    
    }); //end on onclick function

    
});//end of doc.ready

// qb yards
function qbStats() {

    var qbYards = getRandomInt(-5, 25);

    (qbYardsTotal = qbYardsTotal + qbYards);
    $("#qbYards").html(qbYardsTotal);

    console.log("qbYards " + qbYards);


    // var qbTouchdowns = getRandomInt(0,2);

    // (qbTouchdownsTotal = qbTouchdownsTotal + qbTouchdowns);
    // $("#qbTouchdowns").html(qbTouchdownsTotal);
    // console.log("qbTouchdowns " + qbTouchdowns);

    // (qbTouchdownScoreConverted = qbTouchdownsTotal * 6);
   

    (qbTotalScore = qbTouchdownScoreConverted + qbYardsTotal / 10);
    $("#qbScore").html(qbTotalScore);
    console.log("qbTotalScore " + qbTotalScore);

}; //end of qbyards

// qb touchdowns
function qbTouchdowns() {

    var qbTouchdowns = getRandomInt(0,2);

    (qbTouchdownsTotal = qbTouchdownsTotal + qbTouchdowns);
    $("#qbTouchdowns").html(qbTouchdownsTotal);
    console.log("qbTouchdowns " + qbTouchdowns);

    (qbTouchdownScoreConverted = qbTouchdownsTotal * 6);
   

    (qbTotalScore = qbTouchdownScoreConverted + qbYardsTotal / 10);
    $("#qbScore").html(qbTotalScore);
    console.log("qbTotalScore " + qbTotalScore);

}; // end of qbtouchdowns

// qbHailMary
function qbHailMary() {

    var qbTouchdowns = Math.random()>.9;

    if(true) {
        qbTouchdowns++;
        (qbTouchdownsTotal = qbTouchdownsTotal + qbTouchdowns);
        $("#qbTouchdowns").html(qbTouchdownsTotal);
    };

}; //end of qbHailMary

// rbYards
function rbStats() {
    var rbYards = getRandomInt(-5, 25);

    (rbYardsTotal = rbYardsTotal + rbYards);
    $("#rbYards").html(rbYardsTotal);

    console.log("rbyards " + rbYards);


    // var rbTouchdowns = getRandomInt(0,2);

    // (rbTouchdownsTotal = rbTouchdownsTotal + rbTouchdowns);
    // $("#rbTouchdowns").html(rbTouchdownsTotal);
    // console.log("rbTouchdowns " + rbTouchdowns);

    // (rbTouchdownScoreConverted = rbTouchdownsTotal * 6);
   

    (rbTotalScore = rbTouchdownScoreConverted + rbYardsTotal / 10);
    $("#rbScore").html(rbTotalScore);
    console.log("rbTotalScore " + rbTotalScore);

}; //end of rbYards

function rbTouchdowns() {

    var rbTouchdowns = getRandomInt(0,2);

    (rbTouchdownsTotal = rbTouchdownsTotal + rbTouchdowns);
    $("#rbTouchdowns").html(rbTouchdownsTotal);
    console.log("rbTouchdowns " + rbTouchdowns);

    (rbTouchdownScoreConverted = rbTouchdownsTotal * 6);
   

    (rbTotalScore = rbTouchdownScoreConverted + rbYardsTotal / 10);
    $("#rbScore").html(rbTotalScore);
    console.log("rbTotalScore " + rbTotalScore);

}

function wrStats() {

    var wrYards = getRandomInt(-5, 25);

    (wrYardsTotal = wrYardsTotal + wrYards);
    $("#wrYards").html(wrYardsTotal);

    console.log("wryards " + wrYards);


    // var wrTouchdowns = getRandomInt(0,2);

    // (wrTouchdownsTotal = wrTouchdownsTotal + wrTouchdowns);
    // $("#wrTouchdowns").html(wrTouchdownsTotal);
    // console.log("wrTouchdowns " + wrTouchdowns);

    // (wrTouchdownScoreConverted = wrTouchdownsTotal * 6);
   

    (wrTotalScore = wrTouchdownScoreConverted + wrYardsTotal / 10);
    $("#wrScore").html(wrTotalScore);
    console.log("wrTotalScore " + wrTotalScore);

}; //end of wrYards

// wrTouchdownds
function wrTouchdowns() {

    var wrTouchdowns = getRandomInt(0,2);

    (wrTouchdownsTotal = wrTouchdownsTotal + wrTouchdowns);
    $("#wrTouchdowns").html(wrTouchdownsTotal);
    console.log("wrTouchdowns " + wrTouchdowns);

    (wrTouchdownScoreConverted = wrTouchdownsTotal * 6);
   

    (wrTotalScore = wrTouchdownScoreConverted + wrYardsTotal / 10);
    $("#wrScore").html(wrTotalScore);
    console.log("wrTotalScore " + wrTotalScore);

}; // end of wrTouchdowns

// wrHailMary
function wrHailMary() {

    var wrTouchdowns = Math.random()>.9;

    if(true) {
        wrTouchdowns++;
        (wrTotalScore = wrTouchdownScoreConverted + wrYardsTotal / 10);
        $("#wrScore").html(wrTotalScore);
    };

}; // end of wrHailMary








function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }



