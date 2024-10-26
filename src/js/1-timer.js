import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const datetimePicker = document.querySelector("#datetime-picker");
let userSelectedDate = null;
const startButton = document.querySelector("[data-start]");

startButton.disabled = true;

datetimePicker.addEventListener("change", () => {
  const flatpickrInstance = datetimePicker._flatpickr;
  const selectedDate = flatpickrInstance.selectedDates[0];
  
  if (selectedDate) {
    userSelectedDate = selectedDate;
    handleDateSelection(userSelectedDate);
  }
});

function handleDateSelection(date) {
  const currentDate = new Date();
  
  if (date <= currentDate) {
    iziToast.error({
      title: "Error",
      message: "Please choose a date in the future",
    });
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

flatpickr("#datetime-picker", options);

startButton.addEventListener("click", () => {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  datetimePicker.disabled = true;

  const intervalId = setInterval(() => {
    const timeLeft = userSelectedDate - new Date();

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      updateTimer(0);
      iziToast.success({
        title: "Success",
        message: "Countdown finished!",
      });
      datetimePicker.disabled = false;
      return;
    }

    updateTimer(timeLeft);
  }, 1000);
});

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  document.querySelector("[data-days]").textContent = addZero(days);
  document.querySelector("[data-hours]").textContent = addZero(hours);
  document.querySelector("[data-minutes]").textContent = addZero(minutes);
  document.querySelector("[data-seconds]").textContent = addZero(seconds);
}

function addZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
