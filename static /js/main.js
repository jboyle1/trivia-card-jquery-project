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

    $('.correct-answer').on('click', () => {
        $('.frown').hide();
        $('.smiley').show();
        $('.wrong-answer-one').fadeOut('medium');
        $('.wrong-answer-two').fadeOut('medium');
        $('.wrong-answer-three').fadeOut('medium');
    });
});