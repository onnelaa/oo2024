import {Ladu} from "../homeTest";

let ladu: Ladu | null = null;

beforeEach(() => {
  ladu = new Ladu(5); // algselt on 5 lauda laos
});

test('algne laoseis', () => {
  expect(ladu!.saaLaoseis()).toBe(5); //kontrolli, kas algne laoseis on õige
});

test('osta yks laud', () => {
  ladu!.ostaLaud(); //osta üks laud
  expect(ladu!.saaLaoseis()).toBe(4); //kontrolli, kas laoseis väheneb pärast ühe laua ostu
});

test('osta koik lauad', () => {
  for (let i = 0; i < 5; i++) {
    ladu!.ostaLaud(); //osta kõik lauad
  }
  expect(ladu!.saaLaoseis()).toBe(0); //kontrolli, kas laoseis on null pärast kõikide laudade ostu
});
