const clockTitle = document.querySelector(".js-clock");
const Christmas = new Date("2022-12-25");
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
function Diff() {
  var now = new Date();
  var distance = Christmas - now;
  var days = Math.floor(distance / _day);
  var hours = String(Math.floor((distance % _day) / _hour)).padStart(2,'0');
  var minutes = String(Math.floor((distance % _hour) / _minute)).padStart(2,'0');
  var seconds = Math.floor((distance % _minute) / _second);
  clockTitle.innerText = `Until Christmas
  D-${days} + ${hours} : ${minutes} : ${seconds}`;
}

setInterval(Diff, 1000);