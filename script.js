// Loading Screen

window.addEventListener("load", function(){

    setTimeout(function(){

        let loading = document.getElementById("loading");

        if(loading){

            loading.style.display = "none";

        }


        // Start from first page

        nextPage(1);


    },1500);


});




// Page Change Function

function nextPage(pageNumber){


    let pages = document.querySelectorAll(".page");



    pages.forEach(function(page){

        page.classList.remove("active");

    });



    let selectedPage = document.getElementById("page" + pageNumber);



    if(selectedPage){

        selectedPage.classList.add("active");

    }


}




// Floating Hearts

function createHeart(){


    let heart = document.createElement("div");


    heart.className = "floating-heart";


    heart.innerHTML = "❤️";


    heart.style.left = Math.random()*100 + "vw";


    heart.style.fontSize = 
    (Math.random()*20 + 20) + "px";



    document.body.appendChild(heart);



    setTimeout(function(){

        heart.remove();

    },5000);


}



setInterval(createHeart,800);
