$(document).ready(function() {
            console.log('document loaded')

            var randomComputer = 0
            var userGuess = 0
            var guessTotValue = 0
            var userWin = 0
            var compWin = 0

            $(document).ready(function() {
                console.log('document loaded')
            })
            var randomComputer = Math.floor(Math.random() * 58 + 20)
            console.log(randomComputer)
            var c01crystal = Math.floor(Math.random() * 15 + 2)
            console.log(c01crystal)

            var c02crystal = Math.floor(Math.random() * 12 + 5)
            console.log(c02crystal)

            var c03crystal = Math.floor(Math.random() * 6 + 6)
            console.log(c03crystal)

            var c04crystal = Math.floor(Math.random() * 9 + 4)
            console.log(c04crystal)
            $(document).ready(function() {
                console.log('document loaded')
                $('#randomComputer').html(randomComputer)
                $('#c01crystal').click(function() {
                    guessTotValue = guessTotValue + c01crystal
                    $('#userGuess').html(guessTotValue)
                    if (guessTotValue == randomComputer) {
                        userWin++
                        alert('You win!')
                        $('#colWin').html('Won ' + userWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })
                if (guessTotValue > randomComputer) {
                    compWin++
                    alert('You Lost!')
                    $('#colLost').html('Lost ' + compWin)
                    guessTotValue = 0
                    $('#userGuess').html(guessTotValue)
                }
            })

            $(document).ready(function() {
                console.log('document loaded')
                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c02crystal').click(function() {
                        guessTotValue = guessTotValue + c02crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c03crystal').click(function() {
                        guessTotValue = guessTotValue + c03crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c04crystal').click(function() {
                        guessTotValue = guessTotValue + c04crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')
                    $('button').click(function() {
                        userWin = 0
                        compWin = 0
                        userGuess = 0
                        $('#colWin').html('Won ' + userWin)
                        $('#colLost').html('Lost ' + compWin)
                        $('#userGuess').html(+ userGuess)
                    })
                })
            })
        })