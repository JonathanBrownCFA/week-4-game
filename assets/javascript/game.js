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

            var c01crystal = Math.floor(Math.random() * 4 + 9)
            console.log(c01crystal)

            var c02crystal = Math.floor(Math.random() * 4 + 9)
            console.log(c01crystal)

            var c03crystal = Math.floor(Math.random() * 11 + 4)
            console.log(c03crystal)

            var c04crystal = Math.floor(Math.random() * 4 + 8)
            console.log(c04crystal)
            $(document).ready(function() {
                console.log('document loaded')

                $('#c01crystal').click(function() {
                    guessTotValue = guessTotValue + c01crystal
                    $('#userGuess').html(guessTotValue)
                    if (guessTotValue === randomComputer) {
                        userWin++
                        alert('You win!')
                        $('.colWin').html('Won ' + userWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })
                if (guessTotValue > randomComputer) {
                    compWin++
                    alert('You Lost!')
                    $('.colLost').html('Lost ' + compWin)
                    guessTotValue = 0
                    $('#userGuess').html(guessTotValue)
                }
            })

            $(document).ready(function() {
                console.log('document loaded')
                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c02crystal').click(function() {
                        guessTotValue = guessTotValue + c01crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue === randomComputer) {
                            userWin++
                            alert('You win!')
                            $('.colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('.colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c03crystal').click(function() {
                        guessTotValue = guessTotValue + c01crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('.colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('.colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')

                    $('#c04crystal').click(function() {
                        guessTotValue = guessTotValue + c01crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue === randomComputer) {
                            userWin++
                            alert('You win!')
                            $('.colWin').html('Won ' + userWin)
                            guessTotValue = 0
                            $('#userGuess').html(guessTotValue)
                        }
                    })
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('.colLost').html('Lost ' + compWin)
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                    }
                })

                $(document).ready(function() {
                    console.log('document loaded')
                    $('.colReset').click(function() {
                        userWin = 0
                        compWin = 0
                        $('.colWin').html('Won ' + userWin)
                        $('.colLose').html('Lost ' + compWin)
                    })
                })
            })
        })