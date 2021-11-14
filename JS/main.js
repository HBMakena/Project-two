function fn() {
    var d = new Date();
var date = parseInt(document.getElementsByClass("day").value);
var month = parseInt(document.getElementsByClass("month").value) - 1;
var year = parseInt(document.getElementsByClass("year").value);

if (day < 0 || day > 31) {
    document.getElementsByClassName("dayerror").innerHtml = "Enter valid date";
} else {
    d.setDay(day);
}

if (month < 0 || month > 12) {
    document.getElementsByClassName("montherror").innerHtml = "Enter valid month";
} else {
    d.setMonth(month);
}

if (year < 0) {
    document.getElementsByClassName("yearerror").innerHtml = "Enter valid year"
}  else {
    d.setFullYear(year);
}

var day = d.setDay();
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

function getAkan() {
    var ismale = document.getElementsByClass("male").checked;
    var isfemale = document.getElementsByClass("female").checked;
    if (ismale == true && isfemale == false) {
        if (day == 0) {
            alert("Akan name is " + male[0]);
        }
        else if (day == 1) {
            alert("Akan name is " + male[1]);
        }
        else if (day == 2) {
            alert("Akan name is " + male[2]);
        }
        else if (day == 3) {
            alert("Akan name is " + male[3])
        }        
        else if (day == 4) {
            alert("Akan name is " + male[4]);
        }
        else if (day == 5) {
            alert("Akan name is " + male[5]);
        }
        else if (day == 6) {
            alert("Akan name is " + Male[6]);     
        }
    }
   else if (ismale == false && isfemale == true) {
       if (day == 0) {
           alert("Akan name is " + female[0]);
       }
       else if (day == 1) {
           alert("Akan name is " + female[1]);
       }
       else if (day == 2) {
           alert("Akan name is " + female[2]);
       }
       else if (day == 3) {
           alert("Akan name is " + female[3]);
       }
       else if (day == 4) {
           alert("Akan name is " + female[4]);
       } 
       else if (day == 5) {
           alert("Akan name is " + female[5]);
       }
       else if (day == 6) {
           alert("Akan name is " + female[6]);
       }
    }
 }
 getAkan();
}
