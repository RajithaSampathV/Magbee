navigation = document.querySelector('nav');
linkslist = document.querySelector('ul');
barIcon = document.getElementById("bar");
closeIcon = document.getElementById("close");

function shownav()
{
    navigation.classList.add("mobilenav");
    linkslist.style.display = "flex";
    barIcon.style.display = "none";
    closeIcon.style.display = "block";
}

function hidenav()
{
    if(navigation.classList.contains('mobilenav'))
    {
        navigation.classList.remove("mobilenav");
        linkslist.style.display = "none";
        barIcon.style.display = "block";
        closeIcon.style.display = "none";
    } 
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    }));
});

const leftElement = document.querySelectorAll('.left');
const rightElement = document.querySelectorAll('.right');
const topElement = document.querySelectorAll('.top');

leftElement.forEach((element) => observer.observe(element));
rightElement.forEach((element) =>observer.observe(element));
topElement.forEach((element) => observer.observe(element));