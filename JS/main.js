
document.getElementById("submit_number").addEventListener("click", getNumber);
document.getElementById("submit_string").addEventListener("click", getString);
document.getElementById("submit_text").addEventListener("click", getText);
document.getElementById("submit_password").addEventListener("click", getPassword);

function getPassword() {
    let password = document.getElementById("password").value;
    let API_password_link = `http://localhost/PHP-project/PHP/password.php?password=${password}`;

    fetchData(API_password_link, "password");
}

function getText() {
    let text = document.getElementById("text").value;
    let API_spaces_link = `http://localhost/PHP-project/PHP/spaces.php?text=${text}`;
    
    fetchData(API_spaces_link, "text");
}

function getString() {
    let input = document.getElementById("string");
    let str = input.value;
    let API_palindrom_link = `http://localhost/PHP-project/PHP/palindrome.php?string=${str}`;

    if (str.length === 0) {
        input.classList.add("border-red");
        input.placeholder = "Please Enter a String";
    }else {
        input.classList.remove("border-red");
        fetchData(API_palindrom_link, "string");
    }
}

function getNumber() {
    let input_x = document.getElementById("first_number");
    let input_y = document.getElementById("second_number");
    let x = input_x.value;
    let y = input_y.value;

    let API_number_link = `http://localhost/PHP-project/PHP/getNumber.php?x=${x}&y=${y}`;
    
    if (x == "" || y == "") {
        input_x.classList.add("border-red");
        input_y.classList.add("border-red");
    }else {
        input_x.classList.remove("border-red");
        input_y.classList.remove("border-red")
        fetchData(API_number_link,"number");
    }
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
    }else if (data_type === "password") {
        renderPassword(data);        
    }
}

function renderNumber(data_number) {
    let result_number = data_number['result_number'];
    let element = document.getElementById("result_number");
    element.classList.add("result");
    element.innerHTML = `Your Result is ${result_number} `;
}

function renderString (data_string) {
    let result_string = data_string['state'];
    let element = document.getElementById("result_string");
    element.classList.add("result");
    if (result_string) {
        element.innerHTML = "Your String is Palindrome";
    }else {
        element.innerHTML = "Your String is Not Palindrome";
    }
}

function renderText (data_text) {
    let result_text = data_text['text'];
    let element = document.getElementById("result_text");
    element.classList.add("result");
    element.innerHTML = `${result_text}`;
}

function renderPassword (data_password) {
    let result_password = data_password['state'];
    let element = document.getElementById("result_password");
    element.classList.add("result");
    if (result_password) {
        element.innerHTML = "Strong Password";
    }else {
        element.innerHTML = "Weak Password";
    }
}

