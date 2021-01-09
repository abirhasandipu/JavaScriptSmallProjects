function tipCalculator(){
    // get elements
    var billAmount = document.getElementById("BillAmount").value;
    var serviceQuality = document.getElementById("QualityOfService").value;
    var numOfPeople = document.getElementById("NumberOfPeople").value; 

    if(billAmount==="" || billAmount <=0 ){
        alert("Please enter the bill amount!");
    }
    else if(serviceQuality==0){
        alert("Specify the quality of service");
    }
    else if(numOfPeople<=0){
        alert("Please enter the number of people");
    }
    else{
        //total tip
        var totalTipAmount = Math.round(billAmount * serviceQuality) //Math.round is for getting rounded value
        //tip amount per person
        var tipPerPerson = Math.round(totalTipAmount / numOfPeople);

        //take only 2 decimal places
        totalTipAmount = totalTipAmount.toFixed(2);
        tipPerPerson = tipPerPerson.toFixed(2);

        //Let's split the bill
        var billPerPerson = (billAmount / numOfPeople).toFixed(2);

        document.getElementById("text").innerHTML = "Total tip amount you have to pay ";
        //display amount of tip
        document.getElementById("DisplayTotalTip").innerHTML = totalTipAmount + " taka";
        //display amount of tip per person
        document.getElementById("DisplayTipPerPerson").innerHTML = tipPerPerson + " taka/Person";
        //bill per person
        document.getElementById("BillPerPerson").innerHTML = billPerPerson + " taka/person"

    }

}

document.getElementById("Calculate").onclick = function(){tipCalculator()};