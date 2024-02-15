function liigaasta(aasta: number): string {
    if ((aasta % 4 == 0 && aasta % 100 != 0) || aasta % 400 == 0) {
        return "On liigaasta";
    } else {
        return "Ei ole liigaasta";
    }
}

console.log(liigaasta(2024));

//On liigaasta