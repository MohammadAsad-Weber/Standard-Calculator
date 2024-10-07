const Input = document.getElementById(`Input`);

function Type(text) {
    Input.value += text;
}

function Calculate() {
    if (Input.value != ``) {
        let Eval = eval(Input.value);    
        Input.value = Eval
    }
}

function Clear() {
    Input.value = null;
}

function Back() {
    let Arr = Array.from(Input.value);
    Arr.pop();
    Input.value = Arr.join("")
}