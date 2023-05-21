const left = document.getElementById("left");
const right = document.getElementById("right");

const leftInput = document.getElementById("left-input");
const rightInput = document.getElementById("right-input");

const leftImg = document.getElementById("left-img");
const rightImg = document.getElementById("right-img");

const leftPrice = document.getElementById("left-price");
const rightPrice = document.getElementById("right-price");

const coinMoney = document.getElementById("coin-money");

const arrow = document.getElementById("arrow");

let colMoney = 10;
let colCoin = 2;

let activePosition = 0;

coinMoney.innerHTML = (colCoin / colMoney).toFixed(2);

leftInput.value = 0;
rightInput.value = 0;

leftInput.disabled = false;
rightInput.disabled = true;

arrow.addEventListener("click", () => {
    activePosition = activePosition == 0 ? 1: 0;

    switch (activePosition) {
        case 0:
            left.classList.remove("coin-currency");
            left.classList.add("money-currency");

            right.classList.remove("money-currency");
            right.classList.add("coin-currency");

            leftInput.classList.remove("coin-input");
            leftInput.classList.add("money-input");

            rightInput.classList.remove("money-input");
            rightInput.classList.add("coin-input");

            leftImg.classList.remove("currency-img-coin");
            leftImg.classList.add("currency-img-money");

            rightImg.classList.remove("currency-img-money");
            rightImg.classList.add("currency-img-coin");

            leftPrice.classList.remove("coin-text");
            leftPrice.classList.add("money-text");

            rightPrice.classList.remove("money-text");
            rightPrice.classList.add("coin-text");

            leftPrice.innerHTML = "$"
            rightPrice.innerHTML = "coin"

            coinMoney.innerHTML = (colCoin / colMoney).toFixed(2);

            break;
        case 1:
            left.classList.remove("money-currency");
            left.classList.add("coin-currency");

            right.classList.remove("coin-currency");
            right.classList.add("money-currency");

            leftInput.classList.remove("money-input");
            leftInput.classList.add("coin-input");

            rightInput.classList.remove("coin-input");
            rightInput.classList.add("money-input");

            leftImg.classList.remove("currency-img-money");
            leftImg.classList.add("currency-img-coin");

            rightImg.classList.remove("currency-img-coin");
            rightImg.classList.add("currency-img-money");

            leftPrice.classList.remove("money-text");
            leftPrice.classList.add("coin-text");

            rightPrice.classList.remove("coin-text");
            rightPrice.classList.add("money-text");

            leftPrice.innerHTML = "coin"
            rightPrice.innerHTML = "$"

            coinMoney.innerHTML = (colMoney / colCoin).toFixed(2);

            break;
    }

    const value = parseInt(leftInput.value);
    if (!isNaN(value)) {
        rightInput.value = (value * coinMoney.innerHTML).toFixed(2)
    } else {
        rightInput.value = 0;
    }
});

leftInput.addEventListener("focus", () => {
    leftInput.value = "";
}); 

leftInput.addEventListener("keyup", () => {
    const value = parseInt(leftInput.value);
    if (!isNaN(value)) {
        console.log(coinMoney)
        rightInput.value = (value * coinMoney.innerHTML).toFixed(2);
    } else {
        rightInput.value = 0;
    }
});