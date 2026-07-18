// Loading Screen
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    }, 1500);
});


// Button Page Change Function
function nextPage(pageNumber) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page){
        page.classList.remove("active");
    });


    // Show next page
    const next = document.getElementById("page" + pageNumber);

    if(next){
        next.classList.add("active");
    }
    else{
        console.log("Page not found");
    }

}


// Floating Hearts
setInterval(function(){

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floating-heart";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = 
    (Math.random()*20+20)+"px";

    document.body.appendChild(heart);


    setTimeout(function(){
        heart.remove();
    },5000);


},700);
