class Ladu {
  r: number = 0;

  constructor(r: number) {
    this.r = r;
  }

  saaLaoseis(): number {
    return this.r;
  }

  lisaKast() {
    this.r++;
    return this.r;
  }
}

class Kast extends Ladu {
  constructor() {
    super(0);
  }

  lisaJaatis() {
    this.r += 10;
    return this.r;
  }

  eemaldaJaatis() {
  if(this.r >= 10) {
    this.r--;
  }
  return this.r;
  }
}

class Jaatis extends Ladu {
  constructor() {
    super(0);
  }
}

let kast1: Kast = new Kast();
console.log(kast1.lisaKast()); //lisab ühe kasti
console.log(kast1.lisaKast()); //lisab teise kasti veel

let jaatis1: Kast = new Kast();
console.log(jaatis1.lisaJaatis()); //lisab kümme jäätist kasti
console.log(jaatis1.lisaJaatis());  //lisab veel kümme jäätist teise kasti

console.log(kast1.saaLaoseis()); //kontrollib mitu kasti on laos
console.log(jaatis1.saaLaoseis()); //kontrollib palju jäätisi on laos

console.log(jaatis1.eemaldaJaatis()); //eemaldab ühe jäätise kui jäätiseid on rohkem kui 10
