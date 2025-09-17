const text = `Chandra Prakash <br> Web Developer & Musician`;
let index = 0;

function typeEffect() {
    if (index < text.length) {
        // Check if current position starts with <br>
        if (text.substring(index, index + 4) === "<br>") {
            document.getElementById("typing-text").innerHTML += "<br>";
            index += 4; // Skip over the <br> tag in text
        } else {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
        }
        setTimeout(typeEffect, 150);
    }
}


window.onload = typeEffect;
 
//function to switch sections
function showSection(sectionId){
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}
// show homw section by default 
document.addEventListener("DOMContentLoaded",function(){
    showSection("home");
}) 

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            let offset = 100; // Hero section ya navbar ki height ke according adjust karo
            let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            let offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({ behavior:'smooth'});
}
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
 


 


// Check if user already has a preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀ Light Mode';
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});
function musicPlaying(){
    var audio = document.getElementById("Background-music");
    audio.muted = true;
    audio.play().then(() => {
        audio.muted = false;
    }).catch(error =>
        console.log("Playbaack failed:", error));


       
}

const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');
hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle('show');
   
});
// navItems.addEventListener('click', () =>{
//     hamburger.style.display("hide");
// })

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navlinks.classList.remove('show');
    })
})
 
