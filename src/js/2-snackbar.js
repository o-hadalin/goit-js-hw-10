import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElement = document.querySelector(".form");
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const delay = Number(this.elements.delay.value);
    const state = this.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            }
            else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Error",
                message: `Rejected promise in ${delay}ms`,
            });
        });
});