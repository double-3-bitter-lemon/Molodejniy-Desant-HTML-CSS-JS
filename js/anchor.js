<script>
$(document).ready(function() {
    // Обработчик клика по ссылкам в меню
    $('.header-element').click(function(event) {
        // Предотвращаем стандартное действие ссылки (переход по URL)
        event.preventDefault();
        // Получаем идентификатор блока, к которому нужно скроллить
        var targetId = $(this).attr('href');
        // Выполняем скроллинг к нужному блоку
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 1000); // 1000 - время анимации в миллисекундах
    })
});
</script>
