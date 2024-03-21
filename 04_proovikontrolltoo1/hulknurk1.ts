class Hulknurk{
  constructor(protected xid:number[]=[], protected yid:number[]=[]){}
  lisa(x:number, y:number){this.xid.push(x); this.yid.push(y);}
  kyljepikkus(koht1:number, koht2:number){
    let dx=this.xid[koht1]-this.xid[koht2];
    let dy=this.yid[koht1]-this.yid[koht2];
    return Math.sqrt(dx*dx+dy*dy);
  }

  punktiPaarid(){
    let v=[];
    for(let i=1; i<this.xid.length; i++){
      v.push([i, i-1]);
    }
    v.push([this.xid.length-1,0]);
    return v;
  }

  ymbermoot():number{
    if(this.xid.length<2){return 0;}
    let summa:number=0;
    let paarid=this.punktiPaarid();
    for(let i=0; i<paarid.length; i++){
      summa+=this.kyljepikkus(paarid[i][0], paarid[i][1])
    }
    return summa;
  }
}


let k1 = new Hulknurk([3,6,7], [1,4,3]);
console.log(k1.punktiPaarid());
console.log(k1.ymbermoot());
console.log(k1.kyljepikkus(0,1));
let k2 = new Hulknurk();
console.log(k2.ymbermoot());
k2.lisa(3,5)
console.log(k1);
console.log(k2);
