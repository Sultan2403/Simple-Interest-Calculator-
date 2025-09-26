// Setting up constants

const Principal = document.getElementById("principal");
const Rate = document.getElementById("Rate");
const Time = document.getElementById("Time");
const Time_Unit = document.getElementById("Time-Unit");
const Calc_Button = document.getElementById("calculate-button");
const result_total_amount = document.getElementById("result_1");
const result_simple_interest = document.getElementById("result_2");

// When button is clicked.....

Calc_Button.addEventListener("click", function () {
    const P = parseFloat(Principal.value);
    const R = parseFloat(Rate.value);
    const T = parseFloat(Time.value);
    const U = Time_Unit.value;

    // If this then that.....
    if (isNaN(P) || isNaN(R) || isNaN(T) || !U) {
        result_total_amount.textContent = "⚠️ Please fill out all fields correctly.";
        return;
    }

    // Time Variable
    const chosen_opt = Time_Unit.options[Time_Unit.selectedIndex].id

    // Result
    const Simple_Interest = (P * R * T) / 100;
    const Total_Amount = Simple_Interest + P;
    result_total_amount.innerHTML = ("Total Amount After " + Time.value + chosen_opt + " is " + Total_Amount);
    result_simple_interest.textContent = (" Your Simple Interest is: " + Simple_Interest);
});