// $(document).ready(function () {
//     console.log("yay, javascript working")

// })

// console.log($('h1').text()); // getter
// $('h1').text("This got replaced!") // setter




/* anatomy of events

    $('selected element').eventListener(function () {
        // event handler
        stuff that happens when event is triggered
    })

*/

// $('button').click(function () {
//     // $('button').text("I got clicked!!");
//     // console.log($(this));
//     // $(this).text("I got clicked!");
//     // $(this).parent().append("<img src='images/this.png' alt='meme'>");
//     // $(this).parent().append("<button>New Button</button>")
    
//     var buttonText = $(this).text();
//     var newButtonText = $(this).parent().attr("data-when"); // getter
//     var htmlString = `
//         <img src='images/${buttonText}.png' alt='meme'>
//         <button>${newButtonText}</button>
//     `
//     $(this).parent().append(htmlString);
//     // .text, .html --> replace existing content
//     // .append, .before, .after, .prepend --> add new content
// })




/* anatomy of .on() Event Listener

    $('where dynamic elements will be added').on('event to be added', 'element to add event to', function () {
        // what happens when event is triggered (i.e. the event handler)
    }

*/

// Events on Dynamically Created Content
$('.main').on('click', 'button', function () {
    console.log("all buttons working now");
    var buttonText = $(this).text();
    var newButtonText = $(this).parent().attr("data-when"); // getter
    var htmlString = `
        <img src='images/${buttonText}.png' alt='meme'>
    `
    
    if (buttonText == "THIS" || buttonText == "NOT" || buttonText == "THAT") {
        htmlString += ` <button>${newButtonText}</button>`
    }


    $(this).parent().append(htmlString);
})





// Swapping images
$("img").click(function () {
    var newImageSource = $(this).attr("data-alt-src");
    var oldImgSource = $(this).attr("src");
    // console.log(newImageSource, oldImgSource);

    $(this).attr("src", newImageSource);
    $(this).attr("data-alt-src", oldImgSource);
})

