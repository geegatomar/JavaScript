//document.addEventListener('load', alert("Yes you got it"));

const text = document.querySelector('.title');

text.style.color = 'red';


function onTouchRock()
{
    var username = prompt('Hey, enter your name');
    if(username)
    {
        alert("Good to meet you " + username);
        document.getElementById("rockImg").src = "images/after_click.png";
        setTimeout(function(){ document.getElementById('rockImg').src = 'images/before_click.jpg'; }, 5*1000);
    }
}


//document.getElementById('btn').addEventListener('click', onTouchRock());
