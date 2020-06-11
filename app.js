
//Roman number convertor


let input ;

// lets create a function to capture and and hold user input
function passNum() {
    input = document.getElementById("userInput").value;
    //alert(input);
    return c;onsole.log(input);

}

convert(input);
// lets pass the input data into the function


//lets create a function that will take care of converting the numbers

function convert(num) {
    
    // now lets create an object variable that will hold the key value data
    var romanToDecimals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };


    //  create an empty strig variable that will capture the adding from our ++ variable bellow
    var romans = '';

    //create a for/let/in loop to scan trough all the possible options for the entered number
    for (var i in romanToDecimals) {

        //testing key and value
        //console.log(i);
        //console.log(romanToDecimals[i]);

        //let create another loop that will do the math for us
        // ..while num is less or equal to our romanToDecimals 'keys'
        while (num >= romanToDecimals[i]) {
            //add 1 to the above variable 'romans'
            romans += i;
            // we also need to take way the value we just added to romans variable from 'num' every time the loop passes
            num -= romanToDecimals[i];
        }
    } // the return the final converted number
    
    function backToUser() {
        document.getElementById('romans').innerText = romans;
    }


};        
