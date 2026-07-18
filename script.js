*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    width:100%;
    height:100vh;
    overflow:hidden;
    background:#050505;
    color:white;
}


/* Loading Screen */

#loading{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#000;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

#loading h1{
    color:#ffd700;
    font-size:30px;
    text-align:center;
}


.loader{
    margin-top:25px;
    width:50px;
    height:50px;
    border:5px solid #333;
    border-top:5px solid red;
    border-radius:50%;
    animation:spin 1s linear infinite;
}


@keyframes spin{

100%{
transform:rotate(360deg);
}

}



/* Background Stars */

.stars{
    position:fixed;
    width:100%;
    height:100%;
    background-image:
    radial-gradient(white 1px,transparent 1px);
    background-size:50px 50px;
    opacity:.3;
    animation:moveStars 20s linear infinite;
}


@keyframes moveStars{

from{
background-position:0 0;
}

to{
background-position:500px 500px;
}

}



/* Floating Hearts */

.hearts:before{

content:"❤️ ❤️ ❤️ ❤️ ❤️ ❤️";
position:absolute;
width:100%;
font-size:35px;
animation:float 12s linear infinite;
opacity:.5;

}


@keyframes float{

0%{
transform:translateY(100vh);
}

100%{
transform:translateY(-120vh);
}

}



/* Pages */

.page{

position:absolute;
width:100%;
height:100vh;

display:flex;
justify-content:center;
align-items:center;

opacity:0;
visibility:hidden;

transform:scale(.8);

transition:1s ease;

}


.page.active{

opacity:1;
visibility:visible;
transform:scale(1);

}



/* Glass Card */


.card{

width:90%;
max-width:650px;

padding:35px;

background:
rgba(255,255,255,0.08);

border:1px solid rgba(255,215,0,.4);

border-radius:25px;

backdrop-filter:blur(15px);

box-shadow:
0 0 40px rgba(255,0,0,.4);

text-align:center;

animation:appear 1.5s ease;

}


@keyframes appear{

from{
opacity:0;
transform:translateY(50px);
}

to{
opacity:1;
transform:translateY(0);
}

}



/* Heading */


h1{

font-size:42px;

color:#ffd700;

text-shadow:
0 0 10px red;

margin-bottom:20px;

}


p{

font-size:18px;

line-height:1.7;

color:#fff;

}



/* Birthday Message Scroll inside card */

.message{

max-height:330px;

overflow-y:auto;

padding:15px;

}


/* Button */


button{

margin-top:30px;

padding:15px 35px;

border:none;

border-radius:50px;

background:
linear-gradient(45deg,#ff0000,#ffd700);

color:white;

font-size:18px;

font-weight:600;

cursor:pointer;

box-shadow:
0 0 20px red;

transition:.4s;

}


button:hover{

transform:scale(1.1);

box-shadow:
0 0 40px gold;

}



/* Gift Animation */


.gift{

font-size:90px;

animation:bounce 2s infinite;

}


@keyframes bounce{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-25px);
}

}



/* Final Heart */


.heart{

font-size:100px;

animation:pulse 1.5s infinite;

}


@keyframes pulse{

50%{

transform:scale(1.3);

}

}



/* Mobile */

@media(max-width:600px){

h1{
font-size:30px;
}

.card{

padding:25px;

}

p{

font-size:15px;

}

button{

font-size:16px;

}

}
