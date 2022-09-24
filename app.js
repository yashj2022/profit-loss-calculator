const ourFirstInput = document.querySelector("#inputOne");
const ourSecondInput = document.querySelector("#inputTwo");
const ourThirdInput = document.querySelector("#inputThree");
const profitDisplays = document.querySelector("#profit");
const lossesDisplay = document.querySelector("#loss");
const samesDisplay = document.querySelector("#same");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  const bPrice = Number(ourFirstInput.value);
  let quantity = Number(ourSecondInput.value);
  const sPrice = Number(ourThirdInput.value);
  if (!quantity) {
    quantity = 1;
  }
  if (bPrice && sPrice) {
    if (sPrice <= 0 || bPrice <= 0 || quantity <= 0) {
      samesDisplay.innerHTML = `Enter valid inputs 😐 `;
      profitDisplays.innerHTML = ``;
      lossesDisplay.innerHTML = ``;
      
    } else if (bPrice > sPrice) {
      const values = lossCalculator(bPrice, sPrice, quantity);
      lossesDisplay.innerHTML = `You have incured loss of ${values[1]}% and total loss of amount ${values[2]} 😞`;
      profitDisplays.innerHTML = ``;
      samesDisplay.innerHTML = ``;
    
    } else if (sPrice > bPrice) {
      const values = profitCalculator(bPrice, sPrice, quantity);
      profitDisplays.innerHTML = `You have gained profit of ${values[1]}% and total profit of amount ${values[2]} 😁`;
      lossesDisplay.innerHTML = ``;
      samesDisplay.innerHTML = ``;
      
    } else if (sPrice === bPrice) {
      samesDisplay.innerHTML = `The price of stock is same so neither Profit nor Loss 😐 `;
      profitDisplays.innerHTML = ``;
      lossesDisplay.innerHTML = ``;

    }
  } else {
    alert("Please first Complete the inputs.");
  }
});

function profitCalculator(bp, sp, q) {
  const profit = sp - bp;
  const profitPercent = (profit / bp) * 100;
  const totalProfit = profit * q;

  return [profit, profitPercent.toFixed(2), totalProfit];
}

function lossCalculator(bp, sp, q) {
  const loss = bp - sp;
  const lossPercent = (loss / bp) * 100;
  const totalLoss = loss * q;

  return [loss, lossPercent.toFixed(2), totalLoss];
}