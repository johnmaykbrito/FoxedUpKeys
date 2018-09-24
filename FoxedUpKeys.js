// ==UserScript==
// @name         Fuckedup keyboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This is basically a silly prank script
// @author       Me
// @match        https://www.facebook.com
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

// This code should be used on Greasemonkey (Firefox extension) or Tempermonkey (Chrome Extension).
// It's clearly a prankCode. Have Fun.
setTimeout(createDivs, 5000);
function createDivs() {
    //a
    var n = 65;
    var links = [];
    links.push("http://static1.grsites.com/archive/sounds/animals/animals024.mp3","http://static1.grsites.com/archive/sounds/animals/animals010.mp3","http://static1.grsites.com/archive/sounds/comic/comic011.mp3");
    links.push("http://static1.grsites.com/archive/sounds/cartoon/cartoon004.mp3","http://static1.grsites.com/archive/sounds/cartoon/cartoon007.mp3","http://static1.grsites.com/archive/sounds/cartoon/cartoon012.mp3");
    links.push("http://static1.grsites.com/archive/sounds/cartoon/cartoon036.mp3","http://static1.grsites.com/archive/sounds/farm/farm007.mp3","http://static1.grsites.com/archive/sounds/farm/farm033.mp3");
    links.push("http://static1.grsites.com/archive/sounds/farm/farm048.mp3","http://static1.grsites.com/archive/sounds/emergency/emergency007.mp3","http://static1.grsites.com/archive/sounds/bells/bells004.mp3");
    links.push("http://static1.grsites.com/archive/sounds/bells/bells007.mp3","http://static1.grsites.com/archive/sounds/battle/battle003.mp3","http://static1.grsites.com/archive/sounds/battle/battle009.mp3");
    links.push("http://static1.grsites.com/archive/sounds/comic/comic002.mp3","http://static1.grsites.com/archive/sounds/comic/comic004.mp3","http://static1.grsites.com/archive/sounds/comic/comic012.mp3");
    links.push("http://static1.grsites.com/archive/sounds/comic/comic018.mp3","http://static1.grsites.com/archive/sounds/comic/comic023.mp3","http://www.whatstube.com.br/wp-content/uploads/2015/10/mulher-gemendo-alto.mp3");
    links.push("http://static1.grsites.com/archive/sounds/horror/horror006.mp3","http://static1.grsites.com/archive/sounds/people/people001.mp3","http://static1.grsites.com/archive/sounds/people/people010.mp3");
    links.push("http://static1.grsites.com/archive/sounds/electronics/electronics001.mp3","http://static1.grsites.com/archive/sounds/electronics/electronics019.mp3");
    var audio = [];
    for (var i = 0; i < links.length; i++) {
        audio[i] = document.createElement("audio");
        audio[i].src=links[i];
        audio[i].id=String.fromCharCode(n+32); n++;
        audio[i].type="audio/mp3";
        document.body.appendChild(audio[i]);
    }
}
// a : keyCode 65
window.onkeydown = function(event) {
    var keyCode = event.keyCode; // 65
    if (keyCode == 65) {
        // alert("KeyCode: " + keyCode + "\npressedKey: " + pressedKey);
        document.getElementById('a').play();
    }
    if (keyCode == 66) {
        document.getElementById('b').play();
    }
    if (keyCode == 67) {
        document.getElementById('c').play();
    }
    if (keyCode == 68) {
        document.getElementById('d').play();
    }
    if (keyCode == 69) {
        document.getElementById('e').play();
    }
    if (keyCode == 70) {
        document.getElementById('f').play();
    }
    if (keyCode == 71) {
        document.getElementById('g').play();
    }
    if (keyCode == 72) {
        document.getElementById('h').play();
    }
    if (keyCode == 73) {
        document.getElementById('i').play();
    }
    if (keyCode == 74) {
        document.getElementById('j').play();
    }
    if (keyCode == 75) {
        document.getElementById('k').play();
    }
    if (keyCode == 76) {
        document.getElementById('l').play();
    }
    if (keyCode == 77) {
        document.getElementById('m').play();
    }
    if (keyCode == 78) {
        document.getElementById('n').play();
    }
    if (keyCode == 79) {
        document.getElementById('o').play();
    }
    if (keyCode == 80) {
        document.getElementById('p').play();
    }
    if (keyCode == 81) {
        document.getElementById('q').play();
    }
    if (keyCode == 82) {
        document.getElementById('r').play();
    }
    if (keyCode == 83) {
        document.getElementById('s').play();
    }
    if (keyCode == 84) {
        document.getElementById('t').play();
    }
    if (keyCode == 85) {
        document.getElementById('u').play();
    }
    if (keyCode == 86) {
        document.getElementById('v').play();
    }
    if (keyCode == 87) {
        document.getElementById('w').play();
    }
    if (keyCode == 88) {
        document.getElementById('x').play();
    }
    if (keyCode == 89) {
        document.getElementById('y').play();
    }
    if (keyCode == 90) {
        document.getElementById('z').play();
    }
    if (keyCode == 37) {
        document.getElementById('q').play();
    }
    if (keyCode == 38) {
        document.getElementById('d').play();
    }
    if (keyCode == 39) {
        document.getElementById('f').play();
    }
    if (keyCode == 40) {
        document.getElementById('u').play();
    }
};
