// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    let alphanumeric ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        result = true;
    
    for(let i = 0; i<string.length; i++)
    { let check = alphanumeric.includes(string.charAt(i))
        if(!check) result = false
        else if(!result) break
      }
   
    if(string === "") return false
    else return result
 }

  alphanumeric("")