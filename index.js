const zodiac=document.getElementById("zodiac");

const body=document.body;

const changeBackground=()=>{
    switch(zodiac.value){
        case "aries":
            body.style.backgroundColor="yellow";
            break;
        case "taurus":
            body.style.backgroundColor="green";
            break;
        case "gemini":
            body.style.backgroundColor="red";
            break;
        case "cancer":
            body.style.backgroundColor="blue";
            break;
        case "leo":
            body.style.backgroundColor="gold";
            break;
        case "virgo":
            body.style.backgroundColor="pink";
            break;
        case "libra":
            body.style.backgroundColor="aqua";
            break;
        case "scorpio":
            body.style.backgroundColor="silver";
            break;
        case "sagitarius":
            body.style.backgroundColor="lavender";
            break;
        case "aquarius":
            body.style.backgroundColor="bisque";
            break;
        case "capricorn":
            body.style.backgroundColor="coral";
            break;
        case "pisces":
            body.style.backgroundColor="grey";
            break;
        default:
            body.style.backgroundColor="white";
            break;
    }
};