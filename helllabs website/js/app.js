const inputs = document.querySelectorAll(".input");

/*adding focus class when input get focused and removing focus class when input focus gets removed*/
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") { /*remove focus class only when there in null value in input*/
        parent.classList.remove("focus");
    }
}


inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});