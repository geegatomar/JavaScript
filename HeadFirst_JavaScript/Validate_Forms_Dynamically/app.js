function validateNameWithAlert(thisForm)
{
    if(!thisForm["name"].value)
    {
        alert("Please enter name");
    }
}

function validateName(thisForm)
{
    console.log(typeof thisForm);                  // object
    console.log(typeof thisForm.value);            // string
    console.log(typeof thisForm["name"]);
    if(thisForm.value.length < 1 || thisForm.value.length > 32)
    {
        document.getElementById("name_help").textContent = "Please enter valid name";
    }
    else
    {
        document.getElementById("name_help").textContent = "";
    }
}