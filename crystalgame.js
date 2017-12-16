$(document).ready(function () {

    var randomComputer = 0;
    var userGuess = 0;
    var guessTotValue = 0;
    var userWin = 0;
    var compWin = 0;

    $(document).ready(function () {
        var randomComputer = Math.floor(Math.random() * 58 + 20);
        $("#random-computer").html(randomComputer);

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

        $(document).ready(function () {

            $("#c01crystal").click(function () {
                guessTotValue = guessTotValue + c01crystal;
                $("#user-guess").html(guessTotValue);
                if (guessTotValue == randomComputer) {
                    userWin++;
                    alert("You win!");
                    $(".colWin").html("Win " + userWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
                if (guessTotValue > randomComputer) {
                    compWin++;
                    alert("You lose!");
                    $(".colLose").html("Lose " + compWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
            });

            $("#c02crystal").click(function () {
                guessTotValue = guessTotValue + c02crystal;
                $("#user-guess").html(guessTotValue);
                if (guessTotValue == randomComputer) {
                    userWin++;
                    alert("You win!");
                    $(".colWin").html("Win " + userWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
                if (guessTotValue > randomComputer) {
                    compWin++;
                    alert("You lose!");
                    $(".colLose").html("Lose " + compWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
            });

            $("#c03crystal").click(function () {
                guessTotValue = guessTotValue + c03crystal;
                $("#user-guess").html(guessTotValue);
                if (guessTotValue == randomComputer) {
                    userWin++;
                    alert("You win!");
                    $(".colWin").html("Win " + userWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
                if (guessTotValue > randomComputer) {
                    compWin++;
                    alert("You lose!");
                    $(".colLose").html("Lose " + compWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
            });

            $("#c04crystal").click(function () {
                guessTotValue = guessTotValue + c04crystal;
                $("#user-guess").html(guessTotValue);
                if (guessTotValue == randomComputer) {
                    userWin++;
                    alert("You win!");
                    $(".colWin").html("Win " + userWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
                if (guessTotValue > randomComputer) {
                    compWin++;
                    alert("You lose!");
                    $(".colLose").html("Lose " + compWin);
                    guessTotValue = 0;
                    $("#user-guess").html(guessTotValue);
                }
            });
            $(".colReset").click(function () {
                userWin = 0;
                compWin = 0;
                $(".colWin").html("Win " + userWin);
                $(".colLose").html("Lose " + compWin);
            });
        });

    });
});