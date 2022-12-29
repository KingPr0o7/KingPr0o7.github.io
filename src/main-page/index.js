// Elements
const hamburger = document.querySelector('.mobile-hamburger');
const mobile_navlist = document.getElementById('mobile-navlist');
const body = document.body;
const links = document.getElementsByClassName('navlist-link');
const snackbar = document.getElementById('snackbar');

// iOS Viewport Height Fix (Thanks to: coreuter "shorturl.at/abGT6")
function fixHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

addEventListener('load', fixHeight);
addEventListener('resize', fixHeight);
addEventListener('orientationchange', fixHeight);

// Change Navigation Visbility 

function changeNav(state) {
    if (state == "Enabled") {
        // Hamburger
        hamburger.removeAttribute('closed', "");
        hamburger.setAttribute('open', "");
        // Navlist
        mobile_navlist.removeAttribute('closed', "");
        mobile_navlist.setAttribute('open', "");
        // Body
        body.removeAttribute('enabled', "");
        body.setAttribute('disabled', "");  
        // Snackbar   
        snackbar.style.visibility = "hidden";
    } 
    if (state == "Disabled") {
        // Hamburger
        hamburger.removeAttribute('open', "");
        hamburger.setAttribute('closed', "");
        // Navlist
        mobile_navlist.removeAttribute('open', "");
        mobile_navlist.setAttribute('closed', "");
        // Body
        body.removeAttribute('disabled', "");
        body.setAttribute('enabled', "");
        // Snackbar
        snackbar.style.visibility = "visible";
    }
}

// Smooth Anchor Scrolling (Thanks to: Web Dev Tutorials "shorturl.at/fENRZ")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

hamburger.addEventListener('click', function () {
    if (mobile_navlist.hasAttribute('closed')) {
        changeNav("Enabled");
    } else {
        changeNav("Disabled");
    }
});

// Add Link Clicking Events
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click',(evt) => changeNav("Disabled"), false);
}