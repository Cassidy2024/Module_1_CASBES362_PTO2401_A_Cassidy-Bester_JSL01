
   document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('validateButton').addEventListener('click', function() {
    //Event listener added to validate button to validate text input from the user
        let input = document.getElementById('petInput').value;
   
    let pattern= /^pet_\d{4}\w+/; //defined pattern that the user must follow in order for input to be valid

    let result;
    
    if (pattern.test(input)) {  //checks that if input follows the pattern it will return "valid syntax" or "Invalid Syntax" if not
        
        result = "Valid Syntax" + '\u{1F7E2}' ;
    } else {
        result = "Invalid Syntax" + '\u{1F534}';
        
        }
   

    
     
    
            document.getElementById('result').innerText = result; //the result will be shown on the webpage since result is the ID of a <p>
        });
 })();



