document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const dateString = dd + ' ' + getMonthName(mm) + ' ' + yyyy;
    document.querySelector('.content h1').textContent = `Bugün hayatında yaşayacağın son ${dateString} olabilir.`;

    const video = document.getElementById('video-bg');
    const muteButton = document.getElementById('muteButton');
    const icon = muteButton.querySelector('i');

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        } else {
            video.muted = true;
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        }
    });
});

function getMonthName(month) {
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    return months[parseInt(month) - 1];
}
