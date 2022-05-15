var out = document.getElementById("out"),
    inputDate = document.getElementById("date"),
    select = document.getElementById("select");
    
out.innerHTML = "Please change Date";
    

inputDate.onchange = function inputFunc() {
    
    "use strict";
    
    var now = Date.now(),
        date = new Date("oct 24, 2001 00:00:00:001").getTime(),
        dateChange = Date.parse(inputDate.value),
        ageMilliSecond = now - dateChange,
        ageSecond = Math.round(ageMilliSecond / 1000),
        ageMinuts = Math.round(ageMilliSecond / (1000 * 60)),
        ageHours = Math.round(ageMilliSecond / (1000 * 60 * 60)),
        ageDay = Math.round(ageMilliSecond / (1000 * 60 * 60 * 24)),
        ageYear = (ageMilliSecond / (1000 * 60 * 60 * 24 * 365)).toFixed(2);
        
    
    out.innerHTML = ageYear + " YEAR";
};



select.onchange = function () { // not end
    "use strict";
    

    var now = Date.now(),
        dateChange = Date.parse(inputDate.value),
        ageMilliSecond = now - dateChange;
    
    if (select.value === "31536000000") {               // year
        
        out.innerHTML = (ageMilliSecond / select.value).toFixed(3) + " Year";
           
    } else if (select.value === "86400000") {     // day
                        
        out.innerHTML = Math.round(ageMilliSecond / select.value) + " Day";
            
    } else if (select.value === "3600000") {     // hours

        out.innerHTML = Math.round(ageMilliSecond / select.value) + " Hours";

    } else if (select.value === "60000") {      //minut

        out.innerHTML = Math.round(ageMilliSecond / select.value) + " Minut";

    } else if (select.value === "1000") {     // second

        out.innerHTML = Math.round(ageMilliSecond / select.value) + " Second";

    } else if (select.value === "1") {     // milli second

        out.innerHTML = (ageMilliSecond / select.value) + " Milli Second";

    }
    
    
};
