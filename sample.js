let heading_element = document.getElementById("Heading");
let Btn_element = document.getElementById("Btn");
let originalText = heading_element.innerHTML;

function change_heading() {
    // Toggle classes automatically
    heading_element.classList.toggle("heading");
    heading_element.classList.toggle("heading_js");
    Btn_element.classList.toggle("button");
    Btn_element.classList.toggle("button_js");  // Fixed typo
    
    // Toggle text content
    if (heading_element.classList.contains("heading_js")) {
        heading_element.innerHTML = "Iam web developer and I have knowledge of HTML, CSS and JavaScript.";
        Btn_element.innerHTML = "Back";
    } else {
        heading_element.innerHTML = originalText;
        Btn_element.innerHTML = "Click Me";
    }
}

Btn_element.addEventListener('click', change_heading);