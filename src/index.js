import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";



function counter(amount){
  const amountInCents = Math.round(amount * 100);
  return function calculateChange(){
    const quarters = Math.floor(amountInCents / 25);
    const afterQuarter = amountInCents % 25;

    const dimes = Math.floor(afterQuarter / 10);
    const afterDimes = afterQuarter % 10;

    const nickels = Math.floor(afterDimes / 5);
    const pennies = afterDimes % 5;

    return {
      quarters,
      dimes,
      nickels, 
      pennies
    };
  };
}


function resetForm() {
  const form = document.querySelector("form");
  form.reset();
}


function handleForm(e) {
  e.preventDefault();
  const inputAmount = parseFloat(document.querySelector("#amount").value);
  const output = document.querySelector("#output");
  const resultFunction = counter(inputAmount);
  const result = resultFunction();
  output.innerHTML = `Quarters: ${result.quarters}, Dimes: ${result.dimes}, Nickels: ${result.nickels}, Pennies: ${result.pennies}`;
  resetForm();
}

document.querySelector("form").addEventListener("submit", handleForm);
