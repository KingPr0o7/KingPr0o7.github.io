// Variables
const cursor = document.getElementById("cursor");
var build = false;
// Onload Event
window.onload = function () {
    type("start-line", "npm run view", 100, 0, true);
}

// File Load Listing
const timer = ms => new Promise(res => setTimeout(res, ms))
async function fileLoop() {
    const files = document.getElementsByClassName("file-output-line");
    for (let i = 0; i < files.length; i++) {
        files[i].classList.toggle("is-active");
        window.scrollBy(0, 100);
        await timer(100);
    }   
    await timer(1000);
    window.location.assign('https://kingpr0o7.github.io/src/main-page/main.html');
}

// Displaying Lines/Dots
window.setInterval(function() {
    if (build == true) {
        document.getElementById("running-line").classList.toggle("is-active");
        type("running-line", "...", 90, 0, false);
        setTimeout(function() {
            document.getElementById("gathering-line").classList.toggle("is-active");
            type("gathering-line", "...", 90, 0, false);
        }, 1000);
        setTimeout(function() {
            fileLoop();
        }, 1600)
        build = false;
    }
}, 400)

// "Real" Typing Characters
function type(targetElement, textToType, speed, index, cursorMode) {
    let element = document.getElementById(`${targetElement}`);
    let text = `${textToType}`;
    if (index < text.length) {
        if (cursorMode == true) {
            element.removeChild(cursor);
            element.innerHTML += text.charAt(index);  
            index++;
            element.appendChild(cursor);          
        } else {
            element.innerHTML += text.charAt(index);  
            index++;            
        }
        setTimeout(type, speed, `${targetElement}`, text, speed, index, cursorMode);
        if (text == "npm run view") {
            if (element.innerHTML.includes(text)) {
                build = true;
            }
        }
    }
}

// Skip Animation
document.getElementById("x").addEventListener('click', function() {
    window.location.assign('https://kingpr0o7.github.io/src/main-page/main.html');
});