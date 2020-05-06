// jQuery onLoad
$(() => {

    // CAROUSEL FUNCTIONALITY 

    // variable to hold recipe cards to get the length
    const numOfCards = $('.carousel').children().length - 1;
    // card counter
    let currentCardIndex = 0;

    $('.next').on('click', () => {
        // hide the current card
        $('.carousel').children().eq(currentCardIndex).css('display', 'none');

        (currentCardIndex < numOfCards) ? currentCardIndex++ : currentCardIndex = 0;

        // show the next card
        $('.carousel').children().eq(currentCardIndex).css('display', 'block');
    })

    $('.previous').on('click', () => {
        $('.carousel').children().eq(currentCardIndex).css('display', 'none');

        if (currentCardIndex > 0) {
            currentCardIndex--;
        } else {
            currentCardIndex = numOfCards;
        }

        $('.carousel').children().eq(currentCardIndex).css('display', 'block');

    })
    
    // HANDLING OPTIONS FOR CATEGORY SELECTION
    $(document).on("click", "input[type='radio']", function(){
        thisRadio = $(this);
        if (thisRadio.hasClass("imChecked")) {
            thisRadio.removeClass("imChecked");
            thisRadio.prop('checked', false);
        } else { 
            thisRadio.prop('checked', true);
            thisRadio.addClass("imChecked");
        };
    })
    
});