$(document).ready(() => {
    // Click Events
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(800);
    });

    $('.wrong-answer-one').on('click', () => {
        $('wrong-text-one').fadeOut('slow');
    });

    $('.wrong-answer-two').on('click', () => {
        $('wrong-text-two').fadeOut('slow');
    });

    $('.wrong-answer-three').on('click', () => {
        $('wrong-text-three').fadeOut('slow');
    });
});