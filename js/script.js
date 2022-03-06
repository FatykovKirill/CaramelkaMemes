document.querySelector(".generetion").onclick = myClick;

function myClick() {

    //get inpuct
    let top = document.querySelector('.top_meme').value;
    //let bot = document.querySelector('.bot_meme').value;
    console.log(top);
    //console.log(bot);
    document.querySelector('.add_text_top').innerHTML = top;
    document.querySelector('.top_meme').value = ''
}