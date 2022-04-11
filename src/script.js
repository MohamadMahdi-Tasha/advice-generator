// Codes By Mahdi Tasha
// Variables
const advice_number = document.getElementById('advice-number');
const advice_paragraph = document.getElementById('advice-paragraph');
const dice_button = document.getElementById('dice-button');
const spinner_holder = document.getElementById('spinner-holder');

// A Function That Shows Loading Animation
function show_loading() {
    spinner_holder.style.display = 'flex';
    advice_paragraph.style.display = 'none';
}

// A Function That Hides Loading Animation
function hide_loading() {
    spinner_holder.style.display = 'none';
    advice_paragraph.style.display = 'block';
}

// A Function That Fetches Advice Api And Sets Advice Number And text To Returned Data.
function fetch_and_set_txt() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            hide_loading()
            const advice_txt = data.slip.advice;
            const advice_id = data.slip.id;

            advice_number.textContent = advice_id;
            advice_paragraph.textContent = advice_txt;
        })
}

// Adding Event Listener On Window That Listens To Load Event And Calls 'fetch_and_set_txt' Function
window.addEventListener('load', fetch_and_set_txt);

// Adding Event Listener On Dice Button That Listens To Click And Calls 'fetch_and_set_txt' Function
dice_button.addEventListener('click', () => {
    show_loading();
    fetch_and_set_txt();
});