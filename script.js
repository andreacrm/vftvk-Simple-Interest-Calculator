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
    
    //Provide message to user on total interest amount for the time and amount specified
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+",</mark>\<br\>in the year "+year+"\<br\>"
    
}

function updateRate()
{
    //Updating the value from the slider to show the one selected by user
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


