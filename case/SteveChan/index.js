window.onload = () => {

    let y;

    window.addEventListener("scroll", () => {
        y = scrollY;
        console.log(y)
        
        document.getElementById('header').classList.toggle('black', y > 110);
        let contentBoxes = document.querySelectorAll('.contentBox .content .box');

        contentBoxes[0].classList.toggle('fade_in', y > 142); //367 588 1381 2333
        contentBoxes[1].classList.toggle('fade_in', y > 367);
        contentBoxes[2].classList.toggle('fade_in', y > 588);
        contentBoxes[3].classList.toggle('fade_in', y > 1381);

        document.querySelector('.contactBox .contact').classList.toggle('fade_in', y > 2333);
        document.querySelector('.contactBox .title').classList.toggle('fade_in', y > 2333);
        
    })
   
    

}