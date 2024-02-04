let x = false;
let container = document.getElementsByClassName("profile-card");



function darkmode(){
    x = !x;
    console.log(x);
    if (x){
        console.log(container);
        document.getElementById("card").classList.add("dt");
        document.getElementById("card2").classList.add("dt");

        document.getElementById("card").classList.remove("lt")
        document.getElementById("card2").classList.remove("lt")
        document.querySelector('body').style.setProperty('background-color' , '#716868');
        console.log("if works");
    }
    else{
        document.getElementById("card").classList.remove("dt");
        document.getElementById("card2").classList.remove("dt");
        document.getElementById("card").classList.add("lt")
        document.getElementById("card2").classList.add("lt")
        document.querySelector('body').style.setProperty('background-color' , '#f4f4f4');
    }
;}
