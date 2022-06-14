//
//      header
//

let header = document.querySelector(".header");

$(document).ready(function() {
    let header = $(".header");

    header.append(
        `
        <a href="index.html" class="logo"><h2>SHAN<span>.</span></h2></a>
        <nav>
            <ul class="navigation">
                <!-- <li><a href="resume/resume1.html">履歷</a></li> -->
            </ul>
        </nav>
        `
    )


})


//
//      index post
//
var indexPost = {
    "8" : {
        "title" : "Daily UI Day 9 - Music Player",
        "date" : "2022.4.24",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day9_music_player/Day9Index.html",
        "img" : "index/img/DailyUIDay9.png",
        "text" : "這次的題目是做一個Musci Player，其實之前自己私底下做番茄鐘的時候有做過類似的，但這次的功能更完整，心得之後有空再補吧，最近太忙了。"
    },

    "7" : {
        "title" : "Daily UI Day 6 - User Profile and Daily UI Day 7 - setting",
        "date" : "2022.4.17",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day6_User_profile/Day6Index.html",
        "img" : "index/img/DailyUIDay6_7.png",
        "text" : "沒錯我直接跳過Daily UI Day 5，因為他要做一個APP icon，我覺得用網頁做APP icon沒什麼意思就跳過了，然後我把Day 6和Day 7合在一起做了，可以點左邊的Profile和Setting做切換(但其他的都不能點)，主要是用到AJAX來做切換。"
    },

    "6" : {
        "title" : "畫圖表? plotly.js!",
        "date" : "2022.4.10",
        "hashtag" : "#javascript",
        "url" : "project/plotlyJS/plotly1.html",
        "img" : "index/img/plotly1.png  style='background: #5596a4; padding: 8px;'" ,
        "text" : "前陣子在統計資料的時候需要各種圖表，我就在想有沒有可以快速畫出圖表的東西(除了excel，我不太會用)，結果就被我發現這個!..."
    },

    "5" : {
        "title" : "偽聊天機器人",
        "date" : "2022.3.19",
        "hashtag" : "#Javascript",
        "url" : "project/robotChat/chatIndex.html",
        "img" : "index/img/chatRobot.jpg",
        "text" : "今天Daily UI 的題目是做一個計算機，但我懶得用，因為最近在學JQuery，然後就想試著用JQuery做一個聊天機器人，不過是假的哈哈，裡面的對話是我先打好了的，希望有一天能真的做出AI聊天機器人。"
    },
    "4" : {
        "title" : "Daily UI Day 4 - calculator 和 eval( )",
        "date" : "2022.4.3",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day4_Calculator/Day4Index.html",
        "img" : "index/img/DailyUIDay4.png",
        "text" : "這次的Daily UI 是做一個計算機，原本想做工程計算機的，但太花時間就算了(可能也做不出來)，其實這種基本的計算機還挺好做的，主要是用JS的<span class='code'>eval()</span>函式執行的，"
    },
    "3" : {
        "title" : "Daily UI Day 3 - Landing Page 以及 visibility",
        "date" : "2022.3.12",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day3_Landing_page/Day3Index.html",
        "img" : "index/img/DailyUIDay3.png",
        "text" : "這禮拜(疑? 的題目是做一個Landing Page，就是一種只有一頁的網頁，然後我就突發奇想想試試看背景是gif的效果會怎麼樣，剛做完的時候覺得蠻酷的哈哈，不過看久了反而覺得有點太複雜了，也有可能是因為gif的圖示網路上隨便找的資源，不是為產品網頁量身打造的。"
    },
    "2" : {
        "title" : "Daily UI Day 2 - Checkout Page",
        "date" : "2022.3.5",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day4_Calculator/Day4Index.html",
        "img" : "index/img/DailyUIDay2.png",
        "text" : "這次的題目是做一個結帳頁面，所以我就想左邊放商品的資訊，名字、數量和價錢，原本想做成可以新增刪除和自訂數量的，但做完就有點懶得搞了，右邊放輸入信用卡號的地方，比較有趣的是，上面的信用卡會跟著你輸入的文字做改變，輸入安全代碼的時候卡片還會翻到後面喔。"
    },
    "1" : {
        "title" : "Daily UI Day 1 - Sign Up",
        "date" : "2022.2.26",
        "hashtag" : "#Daily UI",
        "url" : "Daily_UI/Day1_Sign_Up/Day1Index.html",
        "img" : "index/img/DailyUIDay1.png",
        "text" : "今天看到一個很有趣的挑戰叫做Daily UI，只要給他email，他就會每天傳送一個UI的題目給你，總共會持續一百天，像第一天的題目為 Sign Up，要求你做一個簡單的登入頁面，雖然這是UI設計，但我覺得拿來做網頁排版也是一個不錯的練習。"
    }
}

let indexPost_length = Object.keys(indexPost).length;

$(document).ready(function() {

    
    let indexPostBox = $("#index_mainContentBox");

    for (let i = 1; i <= indexPost_length; i++) {
        indexPostBox.prepend(
            '<div class="mainContent">' +
                '<a href="' + indexPost[i].url + '">' + 
                    '<img src =' + indexPost[i].img + '>' +
                    '<div>' +
                        '<h3 class="contentTitle">'+ indexPost[i].title +'</h3>' +
                        '<div class="hashtag JSHash">'+ indexPost[i].hashtag +'</div>' +
                        '<p class="contentText">' + indexPost[i].text + '</p>' +
                        '<p class="date">'+ indexPost[i].date+'</p>' +
                    '</div>' +
                '</a>' +
            '</div>'
        )
    }
        
    
})


//
//      new post
//

var newPost = {
    "1" : {
        "title" : "Daily UI Day 6 - User Profile and Daily UI Day 7 - setting",
        "date" : "2022.4.17",
        "url" : "Daily_UI/Day6_User_profile/Day6Index.html",
        "img" : "index/img/DailyUIDay6_7.png"
    },

    "2" : {
        "title" : "畫圖表? plotly.js!",
        "date" : "2022.4.10",
        "url" : "project/plotlyJS/plotly1.html",
        "img" : "index/img/plotly1.png"
    },

    "3" : {
        "title" : "Daily UI Day 4 - calculator 和 eval( )",
        "date" : "2022.4.3",
        "url" : "Daily_UI/Day4_Calculator/Day4Index.html",
        "img" : "index/img/DailyUIDay4.png"
    }
}



$(document).ready(function() {

    let newpost = $(".newPostBox");

    for (let i = 1; i <= 3; i++) {
        newpost.append(
            '<div class="newPost">' + 
                '<a href="' + newPost[i].url + '">' + 
                    '<h5>'+ newPost[i].title + '</h5><img src="' + newPost[i].img + '">' + 
                    '<p class="date">' + newPost[i].date + '</p>' +
                '</a>' +
            '</div>'
        )
    }
})
    


//
//      daily UI page
//

var dailyUI_newpost = {
    "1" : {
        "title" : "Daily UI Day 1 - Sign Up",
        "date" : "2022.2.26",
        "url" : "../Daily_UI/Day1_Sign_Up/Day1Index.html",
        "img" : "img/DailyUIDay1.png",
        "text" : "今天看到一個很有趣的挑戰叫做Daily UI，只要給他email，他就會每天傳送一個UI的題目給你，總共會持續一百天，像第一天的題目為 Sign Up，要求你做一個簡單的登入頁面，雖然這是UI設計，但我覺得拿來做網頁排版也是一個不錯的練習。"
    },
    "2" : {
        "title" : "Daily UI Day 2 - Checkout Page",
        "date" : "2022.3.5",
        "url" : "../Daily_UI/Day2_Credit_Card_Checkout/Day2Index.html",
        "img" : "img/DailyUIDay2.png",
        "text" : "這次的題目是做一個結帳頁面，所以我就想左邊放商品的資訊，名字、數量和價錢，原本想做成可以新增刪除和自訂數量的，但做完就有點懶得搞了，右邊放輸入信用卡號的地方，比較有趣的是，上面的信用卡會跟著你輸入的文字做改變，輸入安全代碼的時候卡片還會翻到後面喔。"
    },
    "3" : {
        "title" : "Daily UI Day 3 - Landing Page 以及 visibility",
        "date" : "2022.3.12",
        "url" : "../Daily_UI/Day3_Landing_page/Day3Index.html",
        "img" : "img/DailyUIDay3.png",
        "text" : "這禮拜(疑? 的題目是做一個Landing Page，就是一種只有一頁的網頁，然後我就突發奇想想試試看背景是gif的效果會怎麼樣，剛做完的時候覺得蠻酷的哈哈，不過看久了反而覺得有點太複雜了，也有可能是因為gif的圖示網路上隨便找的資源，不是為產品網頁量身打造的。 "
    },
    "4" : {
        "title" : "Daily UI Day 4 - calculator 和eval( )",
        "date" : "2022.4.3",
        "url" : "../Daily_UI/Day4_Calculator/Day4Index.html",
        "img" : "img/DailyUIDay4.png",
        "text" : "這次的Daily UI 是做一個計算機，原本想做工程計算機的，但太花時間就算了(可能也做不出來)，其實這種基本的計算機還挺好做的，主要是用JS的eval()函式執行的，"
    },
    "5" : {
        "title" : "Daily UI Day 6 - User Profile and Daily UI Day 7 - setting",
        "date" : "2022.4.17",
        "url" : "../Daily_UI/Day6_User_profile/Day6Index.html",
        "img" : "img/DailyUIDay6_7.png",
        "text" : "沒錯我直接跳過Daily UI Day 5，因為他要做一個APP icon，我覺得用網頁做APP icon沒什麼意思就跳過了，然後我把Day 6和Day 7合在一起做了，可以點左邊的Profile和Setting做切換(但其他的都不能點)，主要是用到AJAX來做切換。"
    },
    "6" : {
        "title" : "Daily UI Day 9 - Music Player",
        "date" : "2022.4.24",
        "url" : "../Daily_UI/Day9_music_player/Day9Index.html",
        "img" : "img/DailyUIDay9.png",
        "text" : "這次的題目是做一個Musci Player，其實之前自己私底下做番茄鐘的時候有做過類似的，但這次的功能更完整，心得之後有空再補吧，最近太忙了。"
    },

    
}

let dailyUI_newpost_length = Object.keys(dailyUI_newpost).length;

$(document).ready(function() {
    let dailyUI_post = $("#dailyUIPost");

    for (let i = 1; i <= dailyUI_newpost_length; i++) {
        dailyUI_post.prepend(
            '<div class="mainContent">' + 
                '<a href="' + dailyUI_newpost[i].url + '">' + 
                    '<img src="' + dailyUI_newpost[i].img + ' ">' +
                    '<div>' +
                        '<h3 class="contentTitle">' + dailyUI_newpost[i].title + '</h3>' +
                        '<div class="hashtag dailyHash">#Dail UI</div>' +
                        '<p class="contentText">' + dailyUI_newpost[i].text + '</p>' +
                        '<p class="date">' + dailyUI_newpost[i].date + '</p>' +
                    '</div>' +
                '</a>' +
            '</div>'
        )
    }

    let dailyNum = $("#dailyNum");
    dailyNum.html("("+dailyUI_newpost_length+")");
})

//
// Javascript
//

var JS_newpost = {
    "1" : {
        "title" : "偽聊天機器人",
        "date" : "2022.4.24",
        "url" : "../project/robotChat/chatIndex.html",
        "img" : "img/chatRobot.jpg",
        "text" : "今天Daily UI 的題目是做一個計算機，但我懶得用，因為最近在學JQuery，然後就想試著用JQuery做一個聊天機器人，不過是假的哈哈，裡面的對話是我先打好了的，希望有一天能真的做出AI聊天機器人。"
    },
    "2" : {
        "title" : "畫圖表? plotly.js!",
        "date" : "2022.4.10",
        "url" : "../project/plotlyJS/plotly1.html",
        "img" : "img/plotly1.png",
        "text" : "前陣子在統計資料的時候需要各種圖表，我就在想有沒有可以快速畫出圖表的東西(除了excel，我不太會用)，結果就被我發現這個!"
    },

}

let JS_newpost_length = Object.keys(JS_newpost).length;

$(document).ready(function() {
    let JS_post = $("#javascriptPost");

    for (let i = 1; i <= JS_newpost_length; i++) {
        JS_post.prepend(
            '<div class="mainContent">' + 
                '<a href="' + JS_newpost[i].url + '">' + 
                    '<img src="' + JS_newpost[i].img + ' ">' +
                    '<div>' +
                        '<h3 class="contentTitle">' + JS_newpost[i].title + '</h3>' +
                        '<div class="hashtag JSHash">#Javascript</div>' +
                        '<p class="contentText">' + JS_newpost[i].text + '</p>' +
                        '<p class="date">' + JS_newpost[i].date + '</p>' +
                    '</div>' +
                '</a>' +
            '</div>'
        )
    }

    let JSNum = $("#JSNum");
    JSNum.html("("+JS_newpost_length+")");
})

