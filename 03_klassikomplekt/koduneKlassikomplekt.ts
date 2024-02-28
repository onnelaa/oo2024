//Mööbel, mis esindab ühte mööblieset
class Mööbel {
    private nimi: string;
    private kogus: number;

    constructor(nimi: string, kogus: number) {
        this.nimi = nimi;
        this.kogus = kogus;
    }

    public saaNimi(): string {
        return this.nimi;
    }

    public saaKogus(): number {
        return this.kogus;
    }

    public muudaKogust(uusKogus: number): void {
        this.kogus = uusKogus;
    }
}

//Ladu, mis haldab mööbli laoseisu
class Ladu {
    private mööbliLoend: Mööbel[];

    constructor() {
        this.mööbliLoend = [];
    }

    public lisaMööbel(mööbel: Mööbel): void {
        this.mööbliLoend.push(mööbel);
    }

    public näitaKoguLaoseis(): void {
        console.log("Laoseis:");
        for (let i = 0; i < this.mööbliLoend.length; i++) {
            const mööbel = this.mööbliLoend[i];
            console.log(`${mööbel.saaNimi()} - ${mööbel.saaKogus()}`);
        }
    }
}

//Rakenduse näide
let ladu = new Ladu();

let tool1 = new Mööbel("Tool", 10);
let laud1 = new Mööbel("Laud", 5);

ladu.lisaMööbel(tool1);
ladu.lisaMööbel(laud1);

ladu.näitaKoguLaoseis();
