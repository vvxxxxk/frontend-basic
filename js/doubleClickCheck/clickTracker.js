var clickArea = document.getElementById('clickArea');
var textarea = document.getElementById('textarea');
var clicks = document.getElementById('count');
var dcCount = document.getElementById('dcCount');
var reset = document.getElementById('reset');

reset.onclick = function() {
    clicks.value = 0;
    dcCount.value = 0;
    textarea.value = '';
    clickArea.style.background = 'linear-gradient(135deg, #f0f8ff, #add8e6)';
};

var prevClickMicrotime = microtime(true);
function microtime(get_as_float) {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now, 10);
    return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
}

var prevClickMicrotime = microtime(true);

function clickEvent() {
    var clickTime = microtime(true);
    var diff = clickTime - prevClickMicrotime;
    if (diff <= 0.1) {
        clickArea.style.background = '#ff6347';
        dcCount.value++;
    } else {
        clickArea.style.background = 'linear-gradient(135deg, #f0f8ff, #add8e6)';
    }
    textarea.value = diff.toFixed(3) + " seconds\n" + textarea.value;
    prevClickMicrotime = clickTime;
    clicks.value++;
}