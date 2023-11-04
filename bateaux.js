if(localStorage.getItem("1") == "true") {
    var liked = true;
} else {
    var liked = false;
}
function like() {
    liked = !liked;
    if(liked) {
        localStorage.setItem("1", true);
    } else {
        localStorage.setItem("1", false);
    }
}
function update() {
    if(liked) {
        document.getElementById("like_button").style.backgroundColor = "#FF3A2F";
        document.getElementById("like_button").style.fill = "#FFF";
    } else {
        document.getElementById("like_button").style.backgroundColor = "rgb(255, 248, 231)"
        document.getElementById("like_button").style.fill = "black";
    }
}
setInterval(update, 100)