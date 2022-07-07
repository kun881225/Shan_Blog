

$(document).ready(function() {

   let y;
   let contentFadeIn = [140, 280, 500, 1160];

   $(window).on('scroll', function() {
        y = scrollY;
        console.log(y);

        $('header').toggleClass('black', y > 110);

        let contentBoxes = document.querySelectorAll('.contentBox .content .box');
        for(let i = 0; i < contentBoxes.length; i++) {
            $(contentBoxes[i]).toggleClass('fade_in', y > contentFadeIn[i]);
        }

        $('.contactBox .contact').toggleClass('fade_in', y > 2160);
        $('.contactBox .title').toggleClass('fade_in', y > 2160);


   })

    
})