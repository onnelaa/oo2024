class Ladu {
  lauadLaos: number;

  constructor(algneLaoseis: number) {
    this.lauadLaos = algneLaoseis;
  }

  ostaLaud(): void {
    if (this.lauadLaos > 0) {
      this.lauadLaos--;
    }
  }

  saaLaoseis(): number {
    return this.lauadLaos;
  }
}

export { 
  Ladu 
};
