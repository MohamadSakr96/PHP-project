// let API_number_link = "http://localhost/PHP-project/PHP/getNumber.php?x=&y=";
let API_palindrom_link = "http://localhost/PHP-project/PHP/palindrome.php?string=";
let API_spaces_link = "";
let API_password_link = "";

document.getElementById("submit_number").addEventListener("click", getNumber);
document.getElementById("submit_string").addEventListener("click", getString);
document.getElementById("submit_text").addEventListener("click", getText);

function getText() {
    let text = document.getElementById("text").value;
    alert(typeof(text));
    let API_spaces_link = `http://localhost/PHP-project/PHP/spaces.php?text=${text}`;
    
    fetchData(API_spaces_link, "text");
}

function getString() {
    let str = document.getElementById("string").value;
    let API_palindrom_link = `http://localhost/PHP-project/PHP/palindrome.php?string=${str}`;

    fetchData(API_palindrom_link, "string");
}

function getNumber() {
    let x = document.getElementById("first_number").value;
    let y = document.getElementById("second_number").value;

    let API_number_link = `http://localhost/PHP-project/PHP/getNumber.php?x=${x}&y=${y}`;

    fetchData(API_number_link,"number");
}

async function fetchData(url, data_type) {
    let result = await fetch(url);
    let data = await result.json();

    if (data_type === "number") {
        renderNumber(data);
    }else if (data_type === "string") {
        renderString(data);
    }else if (data_type === "text") {
        renderText(data);
    }
}

function renderNumber(data_number) {
    console.log(data_number);
}

function renderString (data_string) {
    console.log(data_string);
}

function renderText (data_text) {
    console.log(data_text);
}

