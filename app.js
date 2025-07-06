let textarea = document.querySelector("textarea");

let count = document.querySelector("#count");

let limit = document.querySelector("#limit").innerText;


textarea.addEventListener("input", () => {
    let length = textarea.value.length;
    count.innerText = length;
    if(length > limit) {
       count.classList.add("color");
       textarea.classList.add("color");
    } else {
        count.classList.remove("color");
        textarea.classList.remove("color");
    }
});