class AverageFuelConsumption {
  calculate(distance: number, fuelAmount: number): number {
    if (distance <= 0 || fuelAmount <= 0) {
      throw new Error("Distants ja kütusekulu peavad olema positiivsed numbrid.");
    }
    return distance / fuelAmount;
  }
}

document.getElementById("fuelForm")!.addEventListener("submit", function(event) {
  event.preventDefault(); //takistab vaikimisi vormi esitamise käitumist
  
  const distanceInput = document.getElementById("distance") as HTMLInputElement; 
  const fuelAmountInput = document.getElementById("fuelAmount") as HTMLInputElement; //võtavad kinni kauguse ja kütuse sisestuse väärtused vastavalt nende elementide id-dele.
  
  const distance = parseFloat(distanceInput.value);
  const fuelAmount = parseFloat(fuelAmountInput.value);
  
  const calculator = new AverageFuelConsumption(); //loob uue objekti 
  const averageConsumption = calculator.calculate(distance, fuelAmount); //kasutab loodud objekti, et arvutada keskmine kütusekulu, kasutades sisestatud kaugust ja kütusekogust.
  
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = `Keskmine kütusekulu: ${averageConsumption.toFixed(2)} km/l`;
  }
});
