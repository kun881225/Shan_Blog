
const answerArr = [
    "我最近在學JQuery","這個偽機器人聊天就是用JQuery做的","我搞了三個小時","欸你想知道怎麼做的嗎",
    "不告訴你哈哈","希望我有一天能真的做出AI機器人聊天","就這樣掰掰"
]

const chatClass = document.querySelector('.chat');

let i = 0;

function answer() {
    if (i < answerArr.length) {
        $('.chat').append(
            "<div class='contentBox1'><img src='5.jpg' class='shot'><div class='arrow'></div><p class='text'>" + answerArr[i] + "</p></div>"
        );
        i++
    }
    
}

function send() {
    let textContent = $(".type").val();
    if (textContent != '') {
        $('.chat').append("<div class='contentBox2'><div class='arrow2'></div><p class='text'>"+ textContent + "</p></div>")
        $(".type").val("");
        answer();
        $(".chat").animate({ scrollTop: $(".chat").get(0).scrollHeight},500) 
    };
    
    
}

// 
// Main
//

$(document).ready(function() {
    $('.send').click(send);
    $(document).keypress(function(event){
        if(event.key == 'Enter') {
            send();
        }
    })
})


