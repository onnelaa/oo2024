var CelsiusFahrenheitiks = /** @class */ (function () {
  function CelsiusFahrenheitiks() {
  }
  CelsiusFahrenheitiks.prototype.arvuta = function (celsius) {
      return (celsius * 9 / 5) + 32;
  };
  CelsiusFahrenheitiks.prototype.sisendÜhik = function () {
      return "°C";
  };
  CelsiusFahrenheitiks.prototype.väljundÜhik = function () {
      return "°F";
  };
  return CelsiusFahrenheitiks;
}());
var FahrenheitCelsiuseks = /** @class */ (function () {
  function FahrenheitCelsiuseks() {
  }
  FahrenheitCelsiuseks.prototype.arvuta = function (fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
  };
  FahrenheitCelsiuseks.prototype.sisendÜhik = function () {
      return "°F";
  };
  FahrenheitCelsiuseks.prototype.väljundÜhik = function () {
      return "°C";
  };
  return FahrenheitCelsiuseks;
}());
var Kalkulaator = /** @class */ (function () {
  function Kalkulaator(koefitsient, sisendÜhikuTüüp, väljundÜhikuTüüp) {
      this.koefitsient = koefitsient;
      this.sisendÜhikuTüüp = sisendÜhikuTüüp;
      this.väljundÜhikuTüüp = väljundÜhikuTüüp;
  }
  Kalkulaator.prototype.arvuta = function (x) {
      return this.koefitsient * x;
  };
  Kalkulaator.prototype.sisendÜhik = function () {
      return this.sisendÜhikuTüüp;
  };
  Kalkulaator.prototype.väljundÜhik = function () {
      return this.väljundÜhikuTüüp;
  };
  return Kalkulaator;
}());
