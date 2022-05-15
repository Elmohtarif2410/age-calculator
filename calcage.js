var // value Times 
    MilliSecond = 1,
    Second = 1000,                                     // MilliSecond * 1   =>   1000
    Minuts = (1000 * 60),                             // Second * 60        =>   60000
    Hours = (1000 * 60 * 60),                        // Minuts * 60         =>   3600000
    Day = (1000 * 60 * 60 * 24),                    // Hours * 24           =>   86400000
    Month = (1000 * 60 * 60 * 24 * 30),            // Day * 30              =>   2592000000
    Year = (1000 * 60 * 60 * 24 * 365.25),        // Day * 365              =>   31557600000
    YMD = (1000 * 60 * 60 * 24 * 365.25) + 1;    // Day * 365               =>   31557600001


var out = document.getElementById("out"),
    inputDate = document.getElementById("date"),
    select = document.getElementById("select"),
    option = document.querySelectorAll("option"),
    optionValue = [MilliSecond, Second, Minuts, Hours, Day, Month, Year, YMD],
    ageMilliSecond,
    opt,
    optV;

           // create value into option by for loop  

for (opt = 0; opt < option.length; opt += 1) {
    
    for (optV = 0; optV < optionValue.length; optV += 1) {
        
        if (opt === optV) {
            
            option[opt].setAttribute("value", optionValue[optV]);
        }
    }
}

        
out.textContent = "Please change Date";     // inner Text to Output

    
            // date value by this value

inputDate.onchange = function inputFunc() {
    
    "use strict";
    
    var now = Date.now(),
        
        dateChange = Date.parse(inputDate.value);
    
    ageMilliSecond = now - dateChange;   // value date Milli Second
};


        // option value on slect  ++  events changes option

select.onchange = function () { // not end
    
    "use strict";
    
    //    ageMilliSecond = new Date - Change Date => ageMilliSecond = now - dateChange;
    
    
    if (isNaN(ageMilliSecond)) {                   // Not a Number
        
        out.textContent = "Please change Date before select";
           
    } else if (ageMilliSecond < 0) {               // Number Negative
        
        out.textContent = "Sorry Date change is Negative";
           
    } else {
        
        if (select.value === YMD.toString()) {                          // year month day

            out.textContent = Math.floor(ageMilliSecond / select.value) + " Year " +
                
                Math.floor((ageMilliSecond % select.value)  / Month) + " Month " +
                
                Math.round(((ageMilliSecond % select.value)  % Month) / Day) + " Day";
            
        } else if (select.value === Year.toString()) {               // year
                
            out.textContent = (ageMilliSecond / select.value).toFixed(3) + " Year";

        } else if (select.value === Month.toString()) {                // month

            out.textContent = Math.round(ageMilliSecond / select.value) + " Month";

        } else if (select.value === Day.toString()) {                 // day

            out.textContent = Math.round(ageMilliSecond / select.value) + " Day";
 
        } else if (select.value === Hours.toString()) {              // hours

            out.textContent = Math.round(ageMilliSecond / select.value) + " Hours";

        } else if (select.value === Minuts.toString()) {            //minut

            out.textContent = Math.round(ageMilliSecond / select.value) + " Minut";

        } else if (select.value === Second.toString()) {           // second

            out.textContent = Math.round(ageMilliSecond / select.value) + " Second";

        } else if (select.value === MilliSecond.toString()) {     // milli second

            out.textContent = (ageMilliSecond / select.value) + " Milli Second";
        }
    }
};
