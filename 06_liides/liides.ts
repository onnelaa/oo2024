class AverageFuelConsumption {
  calculate(distance: number, fuelAmount: number): number {
    if (distance <= 0 || fuelAmount <= 0) {
      throw new Error("Distants ja kütusekulu peavad olema positiivsed numbrid.");
    }
    return distance / fuelAmount;
  }
}

document.getElementById("fuelForm")!.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const distanceInput = document.getElementById("distance") as HTMLInputElement;
  const fuelAmountInput = document.getElementById("fuelAmount") as HTMLInputElement;
  
  const distance = parseFloat(distanceInput.value);
  const fuelAmount = parseFloat(fuelAmountInput.value);
  
  const calculator = new AverageFuelConsumption();
  const averageConsumption = calculator.calculate(distance, fuelAmount);
  
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = `Keskmine kütusekulu: ${averageConsumption.toFixed(2)} km/l`;
  }
});
