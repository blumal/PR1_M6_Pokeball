window.onload = function() {
    saludo();
    console.log(getListRandom(10, 1, 10));
}

function saludo() {
    var today = new Date();
    var hour = today.getHours();
    if (hour < 7 || hour > 17) {
        document.getElementById('saludo').innerHTML = "¡Buenas noches!"
        document.body.style.backgroundColor = "#646464"
    } else {
        document.getElementById('saludo').innerHTML = "¡Buenos días!"
        document.body.style.backgroundColor = "rgb(238, 107, 47)"
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomList(n, min, max) {
    var array = []
    for (let i = 0; i < n; i++) {
        let a = getRndInteger(min, max); //En variable a
        if (array.includes(a)) {
            i--;
        } else {
            array.push(a);
        }
    }
    return array; //Devulve res de array
}

function Randomlist() {
    buttonOpacity();
    galleryRandom(0, 10, null, null);
}

function buttonOpacity() {
    if (document.getElementById("pokeball").style.opacity == "1") {
        document.getElementById("pokeball").style.opacity = "0.5";
    } else {
        document.getElementById("pokeball").style.opacity = "1";
    }
}

function galleryRandom(min, max, images, listRnd) {
    images = document.getElementsByTagName("img");
    listRnd = getRandomList(10, 1, 10);
    for (let i = min; i < max; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
        console.log(images[i]);
    }
    return images;
}