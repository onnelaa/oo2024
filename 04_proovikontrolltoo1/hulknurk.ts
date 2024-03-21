class Kolmnurk {
  xKoordinaadid: number[];
  yKoordinaadid: number[];

  constructor(xKoordinaadid: number[], yKoordinaadid: number[]) {
    this.xKoordinaadid = xKoordinaadid;
    this.yKoordinaadid = yKoordinaadid;
  }

  prindiKoordinaadid() {
    console.log("Kolmnurga x-koordinaadid:", this.xKoordinaadid);
    console.log("Kolmnurga y-koordinaadid:", this.yKoordinaadid);
  }
}

let kolmnurk1 = new Kolmnurk([5, 1, 2], [6, 2, 3]);
let kolmnurk2 = new Kolmnurk([6, 5, 8], [9, 1, 2]);

console.log("Kolmnurk 1 andmed:");
kolmnurk1.prindiKoordinaadid();
console.log("Kolmnurk 2 andmed:");
kolmnurk2.prindiKoordinaadid();
