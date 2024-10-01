const input = document.getElementById("text-input");
const submit = document.getElementById("check-btn");
const result = document.getElementById("result");
const textResult = document.getElementById("text-result");

submit.onclick = function() {
    if (input.value == "") {
        alert("Please input a value");
    } else {
        textResult.innerText = palindrome(input.value);
    }
}

function palindrome(str) {
    let newStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
    let testStr = newStr.split("").reverse().join("");
    return newStr === testStr ? `${str} is a Palindrome` : `${str} is not a Palindrome`;
}
