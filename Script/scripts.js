let slider = document.getElementById("weightSlider");
let output = document.getElementById("eggWeight");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    document.getElementById("eggAnswer").innerHTML = "";
}

function calculateEggTime(){
    let cookingTime = 0;
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
            cookingTime = 6;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            cookingTime = 7;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes"; 
        }
        else {
            cookingTime = 8;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
        }
        
    }
    else if (document.getElementById("mediumBoiled").checked) {
        eggStyle ="mediumBoiled";
        if (eggSize === "smallEgg") {
            cookingTime = 8;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            cookingTime = 9;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes"; 
        }
        else {
            cookingTime = 10;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
        }
    }
    else {
        eggStyle ="hardBoiled";
        if (eggSize === "smallEgg") {
            cookingTime = 10;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
        }
        else if (eggSize === "mediumEgg") {
            cookingTime = 11;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes"; 
        }
        else {
            cookingTime = 12;
            document.getElementById("eggAnswer").innerHTML = cookingTime + " minutes";
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