

window.onload = () => {
    let con = document.querySelector(".container");

    // con.addEventListener("mousemove",(e) => {
    //     let x = e.clientX;
    //     let y = e.clientY;
    
    //     console.log(x);
    //     console.log(y);
    
    // })

    
    document.body.addEventListener("mousemove",(e) => {
        let x = e.clientX;
        let y = e.clientY;
    
        console.log(x);
        console.log(y);
    
    })

}