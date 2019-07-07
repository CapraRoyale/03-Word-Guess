window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    var word; // Selected word
    var guess; // Guess
    var guesses = []; // Stored guesses
    var lives; // Lives
    var counter; // Count correct guesses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");

    // create alphabet ul
    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('button');
            list.setAttribute('class', "btn btn-outline-primary");
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Create guesses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess btn btn-light');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives left.";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            document.location.reload();
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "Winner";
            }
        }
    }


    // OnClick Function
    check = function() {
        list.onclick = function() {
            var guess = (this.innerHTML);
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    this.setAttribute("class", "btn btn-success");
                    guesses[i].innerHTML = guess;
                    counter += 1;
                } else {
                    this.setAttribute("class",
                        "btn btn-danger");
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function() {
        words = ["jargon", "crap", "unintelligible", "tripe", "gibberish", "balls", "claptrap", "nonsense", "rubbish", "balderdash", "bullshit", "blather", "blether", "shit", "argle bargle", "mumbo jumbo", "drivel", "rot", "hogwash", "baloney", "bilge", "bosh", "bull", "bunk", "guff", "eyewash", "piffle", "twaddle", "horseshit", "poppycock", "crapola", "phooey", "hooey", "malarkey", "dribble", "codswallop", "cock", "stuff and nonsense", "double", "dutch", "tosh", "cack", "havers", "garbage", "flapdoodle", "blathers", "wack", "bushwa", "applesauce", "bunkum", "tommyrot", "cod", "gammon", "toffee", "bullshit", "bollocks", "bulldust"];
        word = words[Math.floor(Math.random() * words.length)];
        word = word.replace("-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
    }

    play();
}