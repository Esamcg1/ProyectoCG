(function() {
    const sliders = document.querySelectorAll('.testimony_body');
    let currentIndex = 0;

    const showSlide = (index) => {
        sliders.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('testimony_body--show');
            } else {
                slide.classList.remove('testimony_body--show');
            }
        });
    };

    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    buttonNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliders.length;
        showSlide(currentIndex);
    });

    buttonBefore.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
})();
