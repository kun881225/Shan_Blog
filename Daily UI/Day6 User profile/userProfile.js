let count = false;
let info = ["First Name : ", "Last Nace : ", "Age : ", "Birth : "];
$(document).ready(function(event) {
    
    

    $(window).resize(checkSize);
    
    toggleSetting();    
    toggleProfile();
    toggleMenu();
})



function checkSize() {
    let $windowSize = $(window).width();
    
    if ($windowSize < 810) {
        $(".menu").fadeOut();
    }
    else {
        $(".menu").fadeIn();
    }
}

function toggleSetting() {
    
    $(".setting").click(function() {

        $(".profileBox").load("setting.html #profileBox2", function(resTxt, statusTxt) {

            if (statusTxt = "success") {

                toggleMenu();
                $(".setting").addClass("active");
                $(".user").removeClass("active");
                $(".menuBar div").css({"background": "#ad7c67"});
                $("#submit").unbind('click').click(function() {

                    let value = '';
    
                    for(let i = 0; i < 4; i++) {
                        
                        value += (info[i] + $("#profileBox2 input[type='text']:eq("+i+")").val() + "\n" + "\n") ;

                    }

                    alert(value);
                });

            }
            
        });

    })

}

function toggleProfile() {

    $(".user").click(function() {
        $(".profileBox").load("userProfile.html #profileBox1", function(resTxt, statusTxt) {
            if(statusTxt = "success") {
                toggleMenu();
                $(".setting").removeClass("active");
                $(".user").addClass("active");
            }
        });
    })

}

function toggleMenu() {
    
    $(".menuBar").unbind('click').click(function() {
        $('.menu').fadeToggle();
    })

}