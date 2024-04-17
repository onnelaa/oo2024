interface Arvutusfunktsioon {
  arvuta(celsius: number): number;
  sisendÜhik(): string;
  väljundÜhik(): string;
}

class CelsiusFahrenheitiks implements Arvutusfunktsioon {
  arvuta(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  sisendÜhik(): string {
    return "°C";
  }
  väljundÜhik(): string {
    return "°F";
  }
}

class FahrenheitCelsiuseks implements Arvutusfunktsioon {
  arvuta(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
  sisendÜhik(): string {
    return "°F";
  }
  väljundÜhik(): string {
    return "°C";
  }
}

class Kalkulaator implements Arvutusfunktsioon {
  constructor(
    protected koefitsient: number,
    protected sisendÜhikuTüüp: string,
    protected väljundÜhikuTüüp: string
  ) {}
  arvuta(x: number): number {
    return this.koefitsient * x;
  }
  sisendÜhik(): string {
    return this.sisendÜhikuTüüp;
  }
  väljundÜhik(): string {
    return this.väljundÜhikuTüüp;
  }
}
