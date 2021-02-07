function timeHour() {
    var handsec = document.querySelector('[dateSec]');
    var handMin = document.querySelector('[dateMin]');
    var handHour = document.querySelector('[dateHour]');
    var nowDate = new Date();
    var seconds = nowDate.getSeconds() / 60;
    var minute = (seconds + nowDate.getMinutes()) / 60;
    var hours = (minute + nowDate.getHours()) / 12;
    reotatesHand(handsec, seconds);
    reotatesHand(handMin, minute);
    reotatesHand(handHour, hours);

}

function reotatesHand(hand, r) {
    hand.style.setProperty('--rotation', r * 360);
}