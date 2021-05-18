let slider = document.getElementById("weightSlider");
let output = document.getElementById("eggWeight");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    document.getElementById("eggAnswer").innerHTML = "";
}

function calculateEggTime(){
    let minutes = 0;
    let seconds = 0;
    let eggWeight = document.getElementById("weightSlider").value;
    if (eggWeight <=50 ) {
        eggSize = "smallEgg"
    }
    else if (eggWeight >=51 && eggWeight <=79 ) {
        eggSize = "mediumEgg"
    }
    else {
        eggSize = "largeEgg"
    }
    if (document.getElementById("softBoiled").checked) {
        eggStyle ="softBoiled";
        if (eggSize === "smallEgg") {
            minutes = 6;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            minutes = 7;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes"; 
        }
        else {
            minutes = 8;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
        
    }
    else if (document.getElementById("mediumBoiled").checked) {
        eggStyle ="mediumBoiled";
        if (eggSize === "smallEgg") {
            minutes = 8;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            minutes = 9;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes"; 
        }
        else {
            minutes = 10;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
    }
    else {
        eggStyle ="hardBoiled";
        if (eggSize === "smallEgg") {
            minutes = 10;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            minutes = 11;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes"; 
        }
        else {
            minutes = 12;
            document.getElementById("eggAnswer").innerHTML = minutes + " minutes";
        }
    }
}


/* 
Egg times

soft boiled
small egg <50g - 6 minutes
medium egg ~60g  - 7 minutes
big egg >80g - 8 minutes

medium boiled
small egg - 8 minutes
medium egg - 9 minutes
large egg - 10 minutes

hard boiled
small egg - 10 minutes
medium egg - 11 minutes
large egg - 12 minutes
*/