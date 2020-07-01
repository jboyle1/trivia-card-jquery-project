$(document).ready(() => {
    // Click Events
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(800);
    });

    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('medium');
        $('.frown').show();
    });

    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('medium');
        $('.frown').show();
    });

    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('medium');
        $('.frown').show();
    });
});