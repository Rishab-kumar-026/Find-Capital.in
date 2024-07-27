const nav_dialogue = document.getElementById("navigation");

function handle(){
    nav_dialogue.classList.toggle('hidden');
};

const box_divs = document.querySelectorAll(".box");

box_divs.forEach((box_div) => {
    box_div.addEventListener("mouseover", () => {
        box_div.style.backgroundColor = "#FFDEE9";
        box_div.style.backgroundImage = "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)";
        box_div.style.backgroundSize = "cover";
        box_div.style.backgroundRepeat = "no-repeat";
    });

    box_div.addEventListener("mouseout", () => {
        box_div.style.background = "#FBFBFD";
    });
});


const links = document.querySelectorAll(".nav-links-mb a");
const div = document.getElementById("navigation");

links.forEach((link) =>{
    link.addEventListener("click",()=>{
       div.classList.add("hidden");
    });
  
});

const investor_box = document.querySelectorAll(".detail-box h1");
const details = document.querySelectorAll(".more-details");
const investor_icon = document.querySelectorAll(".detail-box h1 i");

investor_box.forEach((investor, index) => {
    investor.addEventListener("click", () => {
        details[index].classList.toggle("hidden");
        investor_icon[index].classList.toggle("fa-xmark");
    });
});

