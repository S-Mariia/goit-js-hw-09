import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/confetti.css");


const f = flatpickr("#datetime-picker", {});
console.log(f)