var newPost = {
    "1" : {
        "title" : "Daily UI Day 6 - User Profile and Daily UI Day 7 - setting",
        "date" : "2022.4.17",
        "href" : "../Day6 User profile/Day6Index.html",
        "img" : "../../index/img/DailyUIDay6_7.png"
    },

    "2" : {
        "title" : "畫圖表? plotly.js!",
        "date" : "2022.4.10",
        "href" : "../../project/plotlyJS/plotly1.html",
        "img" : "../../index/img/plotly1.png"
    },

    "3" : {
        "title" : "Daily UI Day 4 - calculator 和 eval( )",
        "date" : "2022.4.3",
        "href" : "../Day4 Calculator/Day4Index.html",
        "img" : "../../index/img/DailyUIDay4.png"
    }

    
}



$(document).ready(function() {

    let post = $(".newPostBox");

    for (let i = 1; i <= 3; i++) {
        post.append(
            '<div class="newPost">' + 
                '<a href="' + newPost[i].href + '">' + 
                    '<h5>'+ newPost[i].title + '</h5><img src="' + newPost[i].img + '">' + 
                    '<p class="date">' + newPost[i].date + '</p>' +
                '</a>' +
            '</div>'
        )
    }
    
})


