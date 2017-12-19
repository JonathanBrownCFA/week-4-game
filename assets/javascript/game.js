$(document).onclick, ".colReset",
    function() {
        alert("Dynamic button clicked. Hurray!");
    };
var randomComputer = 0;
var userGuess = 0;
var guessTotValue = 0;
var userWin = 0;
var compWin = 0;


var randomComputer = Math.floor(Math.random() * 58 + 20);

var c01crystal = Math.floor(Math.random() * 2 + 6);
console.log(c01crystal);

var c02crystal = Math.floor(Math.random() * 4 + 9);
console.log(c02crystal);

var c03crystal = Math.floor(Math.random() * 11 + 4);
console.log(c03crystal);

var c04crystal = Math.floor(Math.random() * 4 + 8);
console.log(c04crystal);

//  var imagecrystal04 = 'c' + Math.floor(Math.random() * 4 + 12) + 'crystal.png';
//  $("#imagecrystal04").html('./images/' + imagecrystal04);



$("#c01crystal").click(function() {
    guessTotValue = guessTotValue + c01crystal;
    $("#userGuess").html(guessTotValue);
    if (guessTotValue == randomComputer) {
        userWin++;
        alert("You win!");
        $(".colWin").html("Won " + userWin);
        guessTotValue = 0;
        $("#userGuess").html(guessTotValue);
    }
    if (guessTotValue > randomComputer) {
        compWin++;
        alert("You Lost!");
        $(".colLost").html("Lost " + compWin);
        guessTotValue = 0;
        $("#userGuess").html(guessTotValue);
    }
});

$("#c02crystal").click(function() {
    guessTotValue = guessTotValue + c02crystal;
    $("#userGuess").html(guessTotValue);
    if (guessTotValue == randomComputer) {
        userWin++;
        alert("You win!");
        $(".colWin").html("Won " + userWin);
        guessTotValue = 0;
        $("#userGuess").html(guessTotValue);
    }
});
if (guessTotValue > randomComputer) {
    compWin++;
    alert("You Lost!");
    $(".colLost").html("Lost " + compWin);
    guessTotValue = 0;
    $("#userGuess").html(guessTotValue);
}


$("#c03crystal").click(function() {
    guessTotValue = guessTotValue + c03crystal;
    $("#userGuess").html(guessTotValue);
    if (guessTotValue == randomComputer) {
        userWin++;
        alert("You win!");
        $(".colWin").html("Won " + userWin);
        guessTotValue = 0;
        $("#userGuess").html(guessTotValue);
    }
});
if (guessTotValue > randomComputer) {
    compWin++;
    alert("You Lost!");
    $(".colLost").html("Lost " + compWin);
    guessTotValue = 0;
    $("#userGuess").html(guessTotValue);
}



$("#c04crystal").click(function() {
    guessTotValue = guessTotValue + c04crystal;
    $("#userGuess").html(guessTotValue);
    if (guessTotValue == randomComputer) {
        userWin++;
        alert("You win!");
        $(".colWin").html("Won " + userWin);
        guessTotValue = 0;
        $("#userGuess").html(guessTotValue);
    }
});
if (guessTotValue > randomComputer) {
    compWin++;
    alert("You Lost!");
    $(".colLost").html("Lost " + compWin);
    guessTotValue = 0;
    $("#userGuess").html(guessTotValue);
}

$(".colReset").click(function() {
    userWin = 0;
    compWin = 0;
    $(".colWin").html("Won " + userWin);
    $(".colLose").html("Lost " + compWin);
});