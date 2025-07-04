
    async function getRecentPost(){
        console.log("before sending the data");
        // const response= await fetch("https://app.100xdevs.com/courses/14/466/467?timestamp=1021&parentId=4542&_rsc=1ndsw");
        const data = await response.json();
        const response= await axios.get("")
        console.log(data);
        console.log("after sending the data");
    //    document.getElementById("posts").innerHTML = data.body;
         document.getElementById("posts").innerHTML = ("<div>" +arr[i].title +"<div>");

     }   
     getRecentPost(); 
//     parseInt() is a built-in JavaScript function used to convert a string into an integer.

// ✅ Syntax:
// js 
// Copy
// Edit
// parseInt(string, radix);
// string: The value you want to convert.

// radix (optional): The base of the number system (e.g., 10 for decimal, 2 for binary).

// 📌 Examples:
// js
// Copy
// Edit
// parseInt("42");         // ➜ 42 (string to number)
// parseInt("42.9");       // ➜ 42 (ignores decimal part)
// parseInt("abc123");     // ➜ NaN (not a number)
// parseInt("1010", 2);    // ➜ 10 (binary to decimal)
// ❗ Important:
// If the string starts with non-numeric characters, it returns NaN:

// js
// Copy
// Edit
// parseInt("abc") // ➜ NaN
// It only parses until it hits a non-number:

// js
// Copy
// Edit
// parseInt("123abc") // ➜ 123
// ✅ Use Case:
// js
// Copy
// Edit
// const strNumber = "25";
// const realNumber = parseInt(strNumber);  // ➜ 25 as a number
// console.log(realNumber + 5);             // ➜ 30
// Let me know if you want parseFloat() explained too (used for decimals).
// promise is class
//