class Hulknurk{
  constructor(protected xid:number[]=[], protected yid:number[]=[]){}
  lisa(x:number, y:number){this.xid.push(x); this.yid.push(y);}
}

let k1 = new Hulknurk([3,6,7], [1,4,3]);
let k2 = new Hulknurk();
k2.lisa(3,5)
console.log(k1);
console.log(k2);
