function background(color) {
    const body = document.querySelector("body");
    const a = document.querySelectorAll(".sci li")
    const overlay = document.querySelector(".overlay");
    body.style.background = color;
    overlay.style.opacity = "0"
    a.forEach(element => { 
        element.addEventListener('mouseleave', function() {
            // body.style.background = "rgb(77, 77, 77)"
            overlay.style.opacity = "1"
        })
        
    });
}