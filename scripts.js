// Relief Projects India – Homepage slideshow
// Uses older JS syntax for maximum browser compatibility.

window.onload = function () {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    var current = 0;

    if (slides.length <= 1) {
        return;
    }

    function goToSlide(index) {
        slides[current].className = slides[current].className.replace(' active', '');
        if (dots[current]) {
            dots[current].className = dots[current].className.replace(' active', '');
        }

        current = index;
        if (current >= slides.length) {
            current = 0;
        }

        slides[current].className = slides[current].className + ' active';
        if (dots[current]) {
            dots[current].className = dots[current].className + ' active';
        }
    }

    // Dot click navigation
    for (var i = 0; i < dots.length; i++) {
        (function (idx) {
            dots[idx].addEventListener('click', function () {
                goToSlide(idx);
            });
        })(i);
    }

    // Auto-advance every 5 seconds
    setInterval(function () {
        goToSlide(current + 1);
    }, 5000);
};
