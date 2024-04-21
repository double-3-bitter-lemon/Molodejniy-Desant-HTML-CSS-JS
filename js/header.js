document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = 0; // Последняя позиция прокрутки
    var header = document.querySelector('.header-line'); // Получаем хедер

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Получаем текущую позицию прокрутки

        if (scrollTop > lastScrollTop) {
            // Прокрутка вниз
            header.classList.add('header-hidden');
        } else {
            // Прокрутка вверх
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop;
    });
});