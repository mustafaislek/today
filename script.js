document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  // document.querySelector('.content h1').textContent = `Bugün hayatında yaşayacağın son ${dateString} olabilir.`;

  const dayNumber = new Date().getDay();
  const dayName = getDayName(dayNumber);
  const dayNameEn = getDayName(dayNumber, 'en')
  console.log(dayNameEn,dayName);
  
  const englishText = `Today, could be the last ${dayNameEn} of your life.`;
  const turkishText = `Bugün, hayatında belki de son ${dayName}.`;

  // document.querySelector(
  //   ".content h1"
  // ).textContent = `Bugün, yaşamında belki de son ${dayName} günü olabilir.`;

  document.querySelector('.content h1:nth-child(2)').textContent = englishText;
  document.querySelector('.content h1:nth-child(1)').textContent = turkishText;

  const video = document.getElementById("video-bg");
  // const muteButton = document.getElementById("muteButton");
  // // const icon = muteButton.querySelector("i");

  // muteButton.addEventListener("click", () => {
  //   if (video.muted) {
  //     video.muted = false;
  //     icon.classList.remove("fa-volume-mute");
  //     icon.classList.add("fa-volume-up");
  //   } else {
  //     video.muted = true;
  //     icon.classList.remove("fa-volume-up");
  //     icon.classList.add("fa-volume-mute");
  //   }
  // });
});

function getDayName(dayNumber, lang) {
  const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysTr = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  if (lang === 'en') {
   return daysEn[dayNumber]
  } 
  return daysTr[dayNumber];
}

function getMonthName(month) {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  return months[parseInt(month) - 1];
}
