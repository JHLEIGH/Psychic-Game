var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    newGame = true,
    randomLetter,
    winsCount = 0,
    lossesCount = 0,
    guessesLeftCount,
    letters;

document.onkeyup = function(event) {

    if (alphabet.includes(event.key) === true) {

        if (newGame === true) {
            randomLetter = generate_letter();
            letters = "";
            guessesLeftCount = 9;
            newGame = false;
        }
        
        letters = letters + event.key;
        document.getElementById("guesses").textContent = letters;

        if (event.key.toLowerCase() !== randomLetter) {
            guessesLeftCount--;
            if (guessesLeftCount === 0) {
                lossesCount++;
                document.getElementById("losses").textContent = lossesCount;
                document.getElementById("guesses").textContent = "";
                guessesLeftCount = 9;
                newGame = true;
            }

        } else {
            winsCount++;
            document.getElementById("wins").textContent = winsCount;
            document.getElementById("guesses").textContent = "";
            guessesLeftCount = 9;
            newGame = true;
        }
        document.getElementById("guessesLeft").textContent = guessesLeftCount;
    }

    function generate_letter() {
        var chars = "abcdefghijklmnopqurstuvwxyz";
        return chars.substr( Math.floor(Math.random() * 26), 1);
    }

}