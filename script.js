function compute()
{

    //Create references to the input elements we wish to validate
    var principal = document.getElementById("principal").value;

    //Check if principal field is empty
    if(parseInt(principal) <= 0){
        alert("please enter a positive value");
        principal.focus();
        return false;
    }

    //Getting all the values to compute interest
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years /100;

    //Setting time into current date plus number of years
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    
}

function updateRate()
{
    console.log("HERE working");
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


