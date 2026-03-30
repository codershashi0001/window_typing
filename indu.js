let h1 = document.querySelector("h1")

window.addEventListener("keydown", function(inp) {
    if (inp.key === " ") {
        h1.textContent = "SPC"
    }
    else if (inp.key === "fn"){
        h1.textContent = "FN"
    }
    else {
        h1.textContent = inp.key;
    }
})