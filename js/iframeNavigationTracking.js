let iframe = document.getElementById('pages');

let forwardStack = [];
let backwardStack = [];
let currentTitle = '';

function addNewTitle() {
    currentTitle = document.title;
    
    if (currentTitle) {
        backwardStack.push(currentTitle);
        backwardStack = [... new Set(backwardStack)];
    }
}

function goBackward() {
    if (!backwardStack.length) {
        return;
    }

    let newTitle = backwardStack.slice(-1)[0];
    console.log(newTitle);
    forwardStack.push(newTitle);
    currentTitle = backwardStack.pop();

    document.title = newTitle;
}

function goForward() {
    if (!forwardStack.length) {
        return;
    }

    backwardStack.push(currentTitle);
    currentTitle = forwardStack.pop();
}

iframe.onload = function () {
    addNewTitle();

    iframe.contentWindow.onpagehide = function () {
        console.log(backwardStack)
        goBackward();
    }
}