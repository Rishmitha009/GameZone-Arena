// Countdown Timer
const countdownDate = new Date("March 10, 2026 18:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Tournament Started!";
    }

}, 1000);


// Registration Alert
function registerUser(event) {
    event.preventDefault();
    alert("🎉 Registration Successful! Welcome to GameZone Arena!");
}
function sendMessage(event) {
    event.preventDefault();
    alert("✅ Message Sent Successfully!");
}
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});