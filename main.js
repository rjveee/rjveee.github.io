document.getElementById("messageState").addEventListener("change", function(x) {
    var messageElements = document.getElementsByClassName("message");
    for (var i = 0; i < messageElements.length; i++) {
        messageElements[i].classList.remove("openNor", "closeNor");
    }
    if (document.getElementById("messageState").checked) {
        for (var i = 0; i < messageElements.length; i++) {
            messageElements[i].classList.remove("closed", "no-anim");
            messageElements[i].classList.add("openNor");
        }
        var heartElement = document.querySelector(".heart");
        heartElement.classList.remove("closeHer", "openedHer");
        heartElement.classList.add("openHer");
        var containerElement = document.querySelector(".container");
        containerElement.style.backgroundColor = "#f48fb1";
        containerElement.style.transition = "background-color 2s";
        console.log("Abrindo");
    } else {
        for (var i = 0; i < messageElements.length; i++) {
            messageElements[i].classList.remove("no-anim");
            messageElements[i].classList.add("closeNor");
        }
        var heartElement = document.querySelector(".heart");
        heartElement.classList.remove("openHer", "openedHer");
        heartElement.classList.add("closeHer");
        var containerElement = document.querySelector(".container");
        containerElement.style.backgroundColor = "#fce4ec";
        containerElement.style.transition = "background-color 2s";
        console.log("fechando");
    }
});

var messageElements = document.getElementsByClassName("message");
for (var i = 0; i < messageElements.length; i++) {
    messageElements[i].addEventListener('animationend', function(e) {
        console.log("Animation End");
        if (this.classList.contains("closeNor")) {
            this.classList.add("closed");
        }
        this.classList.remove("openNor", "closeNor");
        this.classList.add("no-anim");
    });
}

var heartElement = document.querySelector(".heart");
heartElement.addEventListener('animationend', function(e) {
    console.log("Animation End");
    if (!this.classList.contains("closeHer")) {
        this.classList.add("openedHer", "beating");
    } else {
        this.classList.add("no-anim");
        this.classList.remove("beating");
    }
    this.classList.remove("openHer", "closeHer");
});
	    
