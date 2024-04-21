document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const slider = document.getElementById('slider');
    const backButton = document.getElementById('back');
    const forwardButton = document.getElementById('forward');

    const songs = [
        {
            title: "В доме моём",
            author: "ОСД «Горизонт», Юлия Ашихмина, Евгений Трофимов",
            cover: "./content/cover1.png",
            src: "./content/вДомеМоем.mp3"
        },
        {
            title: "Красная нить",
            author: "ОСД «Горизонт»",
            cover: "./content/cover2.png",
            src: "./content/КраснаяНить.mp3"
        },
        {
            title: "Молодость",
            author: "ОСД «Горизонт»",
            cover: "./content/cover3.png",
            src: "./content/Молодость.mp3"
        },
        {
            title: "Эй Брат!",
            author: "ССО «Приморец» (Владивосток)",
            cover: "./content/cover4.png",
            src: "./content/Брат.mp3"
        },
        {
            title: "Мы лучшее движение в стране",
            author: "Артем Колобов",
            cover: "./content/cover5.png",
            src: "./content/Движение.mp3"
        },
        {
            title: "Снова в отряд",
            author: "Оля Шевченко",
            cover: "./content/cover6.png",
            src: "./content/Отряд.mp3"
        }
    ];

    let currentSongIndex = 0; // Индекс текущей песни

    function loadSong(song) {
        document.getElementById('cover').src = song.cover;
        document.getElementById('title').textContent = song.title;
        document.getElementById('author').textContent = song.author;
        const audioElement = document.getElementById('audio');
        audioElement.src = song.src;
        audioElement.load(); // Загружаем новый источник аудио
        updateSlider(); // Обновляем слайдер
        updateTimeDisplay(); // Обновляем отображение времени
    }

    function updateSlider() {
        slider.max = audio.duration;
        slider.value = audio.currentTime;
    }

    function updateTimeDisplay() {
        // Убедитесь, что элементы current-time и duration существуют в HTML
        document.getElementById('current-time').textContent = formatTime(audio.currentTime);
        document.getElementById('duration').textContent = formatTime(audio.duration);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    slider.addEventListener('input', function() {
        audio.currentTime = slider.value;
    });

    audio.addEventListener('timeupdate', updateSlider);
    audio.addEventListener('timeupdate', updateTimeDisplay);

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.error("Ошибка воспроизведения:", error);
            });
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    backButton.addEventListener('click', function() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; // Возвращаемся к последней песне
        }
        loadSong(songs[currentSongIndex]);
    });

    forwardButton.addEventListener('click', function() {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Возвращаемся к первой песне
        }
        loadSong(songs[currentSongIndex]);
    });

    audio.addEventListener('loadedmetadata', function() {
        updateSlider();
        updateTimeDisplay();
    });

    loadSong(songs[currentSongIndex]); // Загружаем первую песню
});
