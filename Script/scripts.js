let slider = document.getElementById("weightSlider");
let output = document.getElementById("eggWeight");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    document.getElementById("eggAnswer").innerHTML = "";
}

function calculateEggTime(){
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
            document.getElementById("eggAnswer").innerHTML = "6 minutes";
        }
        else if (eggSize === "mediumEgg") {
            document.getElementById("eggAnswer").innerHTML = "7 minutes"; 
        }
        else {
            document.getElementById("eggAnswer").innerHTML = "8 minutes";
        }
        
    }
    else if (document.getElementById("mediumBoiled").checked) {
        eggStyle ="mediumBoiled";
        if (eggSize === "smallEgg") {
            document.getElementById("eggAnswer").innerHTML = "8 minutes";
        }
        else if (eggSize === "mediumEgg") {
            document.getElementById("eggAnswer").innerHTML = "9 minutes"; 
        }
        else {
            document.getElementById("eggAnswer").innerHTML = "10 minutes";
        }
    }
    else {
        eggStyle ="hardBoiled";
        if (eggSize === "smallEgg") {
            document.getElementById("eggAnswer").innerHTML = "10 minutes";
        }
        else if (eggSize === "mediumEgg") {
            document.getElementById("eggAnswer").innerHTML = "11 minutes"; 
        }
        else {
            document.getElementById("eggAnswer").innerHTML = "12 minutes";
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