const boxCodeKey = document.querySelector(".box_code_key span");
const keyName = document.querySelector("h1");
const keyNames = document.querySelector(".keys_deti .key").lastElementChild;
const code = document.querySelector(".keys_deti .code").lastElementChild;
window.addEventListener("keydown", function (e) {
    boxCodeKey.textContent = e.keyCode;
    keyName.textContent = (e.key == " ") ? "SPACE" : e.key.toUpperCase();

    code.textContent = e.keyCode;
    keyNames.textContent = (e.key == " ") ? "SPACE" : e.key;
})