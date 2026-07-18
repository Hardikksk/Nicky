// Loading Screen

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },3000);

});




// Love Letter Text

const message = 
"Dear Monika ❤️,\n\n" +
"Happy Birthday my love. On this special day, I just want to say that you are one of the most beautiful parts of my life. ✨\n\n" +
"Your smile makes my world brighter and your happiness means everything to me. I promise to always support you, respect you and stand beside you. ❤️\n\n" +
"May this birthday bring you endless happiness, success and all the love you deserve.\n\n" +
"Forever yours,\nHardik ❤️";



let index = 0;


function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += 
        message.charAt(index)
        .replace("\n","<br>");

        index++;

        setTimeout(typeWriter,50);

    }

}



window.onload=function(){

    setTimeout(typeWriter,3500);

};





// Start Surprise Button

function startLove(){

    let music=document.getElementById("music");

    music.play();

    document.querySelector(".letter")
    .scrollIntoView({

        behavior:"smooth"

    });

}




// Gift Opening

function openGift(){

    let gift=document.querySelector(".gift-box");

    let text=document.getElementById("giftText");


    gift.innerHTML="💝";


    text.innerHTML=
    "My biggest gift is your smile ❤️<br>" +
    "I love you forever Monika ❤️";


    gift.style.animation="pulse 1s infinite";


}





// Extra Heart Creation

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="extra-heart";


    heart.style.left=
    Math.random()*100+"vw";


    heart.style.animationDuration=
    (Math.random()*5+5)+"s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}


setInterval(createHeart,800);
// Love Counter

let loveDate = new Date("2025-07-22");

function updateCounter(){

let now = new Date();

let difference = now - loveDate;


let days=Math.floor(
difference/(1000*60*60*24)
);


let hours=Math.floor(
(difference/(1000*60*60))%24
);


let minutes=Math.floor(
(difference/(1000*60))%60
);


let seconds=Math.floor(
(difference/1000)%60
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;


}


setInterval(updateCounter,1000);

updateCounter();




// Fireworks Effect

function fireworks(){


for(let i=0;i<80;i++){


let spark=document.createElement("div");

spark.className="spark";


spark.style.left="50%";

spark.style.top="50%";


spark.style.setProperty(
"--x",
Math.random()*600-300
);


spark.style.setProperty(
"--y",
Math.random()*600-300
);



document.body.appendChild(spark);



setTimeout(()=>{

spark.remove();

},1000);


}


}