const sounds = {
    dog: new Audio('https://raw.githubusercontent.com/ImSaMPro/Animal-Sound/master/sounds/dog.mp3'),
    cat: new Audio('https://raw.githubusercontent.com/ImSaMPro/Animal-Sound/master/sounds/cat.mp3'),
    lion: new Audio('https://raw.githubusercontent.com/YashNita/Animal-Sound-Dataset/master/Aslan/aslan_1.wav'),
    cow: new Audio('https://raw.githubusercontent.com/ImSaMPro/Animal-Sound/master/sounds/cow.mp3'),
    elephant: new Audio('https://raw.githubusercontent.com/ImSaMPro/Animal-Sound/master/sounds/elephant.mp3')
};

document.querySelectorAll('.animal').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.sound;
        const sound = sounds[key];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    });
});
