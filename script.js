function findsign() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    
    if (month == 1&& day >= 20 || month == 2&& day <= 18){
        document.getElementById("zodiac").innerHTML="Aquarius";
            
        }

    if (month == 2&& day >= 19 || month == 3&& day <= 20){
        document.getElementById("zodiac").innerHTML="Pisces";
}

if (month == 3&& day >= 21 || month == 4 && day <= 19){
    document.getElementById("zodiac").innerHTML="Aries";
}

if (month == 4&& day >= 20|| month == 5 && day <= 20){
    document.getElementById("zodiac").innerHTML="Taurus";

}
if (month == 5&& day >= 21 || month == 6 && day <= 20){
        document.getElementById("zodiac").innerHTML="Gemini";

}

if (month == 6&& day >= 21 || month == 7&& day <= 22){
    document.getElementById("zodiac").innerHTML="Cancer";
}

if (month == 7&& day >= 23 || month == 8 && day <= 22){
    document.getElementById("zodiac").innerHTML="Leo";
}

if (month == 8 && day >= 23 || month == 9 && day <= 22){
    document.getElementById("zodiac").innerHTML="Virgo";
}

if (month == 9&& day >= 23 || month == 10&& day <= 22){
    document.getElementById("zodiac").innerHTML="Libra";
}

if (month == 10 && day >= 23|| month == 11 && day <= 21){
    document.getElementById("zodiac").innerHTML="Scorpio";

}
if (month == 11 && day >= 22 || month == 12 && day <= 21){
    document.getElementById("zodiac").innerHTML="Sagittarius";
}

if(month == 12 && day >= 22 || month == 1 && day <= 19){
 
    document.getElementById("zodiac").innerHTML="Capricorn";
}
else if (month>12||day>31){
    document.getElementById("zodiac").innerHTML="Invalid Input!";
 }

}


function date() {
    var date =document.getElementById("date").value;
    console.log(date);

    var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);

        if (this.responseText == '{"is_retrograde":true}') {
            document.getElementById("output").innerHTML = "in Retrograde!";
           
        }
       
        if (this.responseText ==  '{"is_retrograde":false}') {
            document.getElementById("output").innerHTML = "NOT in Retrograde!";
           
        } 
        
        }
}


xhttp.open("GET", "https://mercuryretrogradeapi.com?date=" + date , true);
xhttp.send();
}

