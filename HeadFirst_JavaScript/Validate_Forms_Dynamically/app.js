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
    console.log(typeof thisForm["name"]);          // string
    
    if(thisForm.value.length < 1 || thisForm.value.length > 32)
    {
        document.getElementById("name_help").textContent = "Please enter valid name";
        // can also do .innerHTML
    }
    else
    {
        document.getElementById("name_help").textContent = "";
    }
}

/*
class myClass{
    name = "un";
}

var exampleobject = new myClass();

console.log(typeof myClass);
console.log(typeof exampleobject);
*/