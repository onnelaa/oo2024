function kmi(kaal:number, pikkus:number){
  return kaal/(pikkus*pikkus);
}
console.log(kmi(90, 1.68))
console.log(kmi(90, 1.68).toFixed(1))

function kmiHinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal";}
  if(indeks<18.5){return "Alakaal";}
  if(indeks<25){return "Normaalkaal";}
  if(indeks<30){return "Üekaal";}
  if(indeks<35){return "Rasvumine";}
  if(indeks<40){return "Tugev rasvumine";}
  return "Tervisele ohtlik rasvumine";
}

console.log(kmiHinnang(31))

let kmiArvud:number[]=[25, 18, 38, 28];
let hinnangud=kmiArvud.map(kmiHinnang);
//map rakendab kõikidele masiivis olijatele funktsiooni
console.log(hinnangud);