var AverageFuelConsumption = /** @class */ (function () {
    function AverageFuelConsumption() {}
    AverageFuelConsumption.prototype.calculate = function (distance, fuelAmount) {
      if (distance <= 0 || fuelAmount <= 0) {
        throw new Error("Distance and fuel amount must be positive numbers.");
      }
      return distance / fuelAmount;
    };
    return AverageFuelConsumption;
  }());
  
  document.getElementById("fuelForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var distance = parseFloat(document.getElementById("distance").value);
    var fuelAmount = parseFloat(document.getElementById("fuelAmount").value);
    
    var calculator = new AverageFuelConsumption();
    var averageConsumption = calculator.calculate(distance, fuelAmount);
    
    document.getElementById("result").textContent = "Keskmine kütusekulu: " + averageConsumption.toFixed(2) + " km/l";
  });
  
