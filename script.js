// Loading Screen

window.addEventListener("load", function () {

    setTimeout(function () {

        let loading = document.getElementById("loading");

        if (loading) {
            loading.style.display = "none";
        }

        // Show first page
        showPage(1);

    }, 1500);

});



// Button Page Change Function

function nextPage(pageNumber) {

    const pages = document.querySelectorAll(".page");


    pages.forEach(function(page){

        page.classList.remove("active");

    });



    const next = document.getElementById("page" + pageNumber);


    if(next){

        next.classList.add("active");

    }

    else{

        console.log("Page not found: page" + pageNumber);

    }

}



// First Page Function

function showPage(pageNumber){

    const pages = document.querySelectorAll(".page");


    pages.forEach(function(page){

        page.classList.remove("active");

    });


    const page = document.getElementById("page" + pageNumber);


    if(page){

        page.classList.add("active");

    }

}



// Floating Hearts

setInterval(function(){


    let heart = document.createElement("div");


    heart.innerHTML = "❤️";


    heart.className = "floating-heart";


    heart.style.left = Math.random()*100 + "vw";


    heart.style.fontSize = 
    (Math.random()*20 + 20) + "px";


    document.body.appendChild(heart);



    setTimeout(function(){

        heart.remove();

    },5000);



},700);
