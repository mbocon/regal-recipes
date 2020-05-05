// jQuery onLoad
$(() => {

    // variable to hold our cards to get the length
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

    
        // $("#search").on("keyup", function() {
        //     $('.recipe-card').hide();
        //     var searchTerm = $(this).val().toLowerCase();
        //      $('.recipe-card').filter(function(){
        //           return  $(this).find(searchTerm).text().toLowerCase().indexOf(searchTerm) > -1;
        //     }).show();
        // });
    

});