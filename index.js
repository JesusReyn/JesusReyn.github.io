
function bodyFatCalculator(){
    var bw = document.getElementById("input-bw").value;
    var daysOut = document.getElementById("input-daysOut").value;
    var goalBF = document.getElementById("input-goalBF").value;
    var currentBF = document.getElementById("input-currentBF").value;
    
      console.log("daysOut:", daysOut);
      console.log("goalBF:", goalBF);
     console.log("currentBF:", currentBF);


    if(goalBF>currentBF){
        var newBF = currentBF - goalBF;
    console.log("newBF: " + newBF);
    var calculation = bw - (OnePercentOfBodyWeight * newBF).toFixed(2);
    console.log("calculation: " + calculation);
    var calculationText = 0
    var sum = ((bw - calculation) / daysOut).toFixed(2); // Set the number of decimal places to 2
    console.log("sum: " + sum);
    var calculationText = "";
    document.getElementById("enter").innerHTML = "Your new weight goal is: " + calculation.toFixed(2) + " you need to gain " + sum*-1 + " lbs a day";
    }


    if(bw === " " || daysOut === " " ||goalBF  === " " ||currentBF  === " "){
        console.log("bw:", bw);
        document.getElementById("enter").innerHTML = "Please add a number for all the fields"	
        console.log("if statement bfCalc")
    }
    else{
    
    console.log("bw: " + bw);
    var OnePercentOfBodyWeight = bw / 100;
    
    console.log("daysOut: " + daysOut);
    
    console.log("goalBF: " + goalBF);
    
    console.log("currentBF: " + currentBF);
    var newBF = currentBF - goalBF;
    console.log("newBF: " + newBF);
    var calculation = bw - (OnePercentOfBodyWeight * newBF).toFixed(2);
    console.log("calculation: " + calculation);
    var calculationText = 0
    var sum = ((bw - calculation) / daysOut).toFixed(2); // Set the number of decimal places to 2
    console.log("sum: " + sum);
    var calculationText = "";
    document.getElementById("enter").innerHTML = "Your new weight goal is: " + calculation.toFixed(2) + " you need to lose " + sum + " lbs a day";
    }
}