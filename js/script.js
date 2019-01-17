var LAUNCHER_DELAY = 5000; //5s

var overlay = document.querySelector('.overlay');
var launcherBtn = overlay.querySelector('.launcher');

function showSlider () {
    overlay.classList.add('hidden');
}

launcherBtn.addEventListener('click', function () {
    setTimeout(showSlider, LAUNCHER_DELAY);
});
