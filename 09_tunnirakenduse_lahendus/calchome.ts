class Calculator {
    protected panelContents: string = "";
    protected esimeneSisu: string = "";
    protected tyhjendada: boolean = false;

    pressButton(b: string): void {
        if (b == "C") {
            this.panelContents = "";
        } else if (b == "X") {
            this.esimeneSisu = this.panelContents;
            this.tyhjendada = true;
        } else if (b == "=") {
            this.panelContents = (parseInt(this.esimeneSisu) * parseInt(this.panelContents)).toString();
        } else if (b == "R") {
            this.panelContents = Math.sqrt(parseFloat(this.panelContents)).toString();
        } else {
            if (this.tyhjendada) {
                this.panelContents = b;
                this.tyhjendada = false;
            } else {
                this.panelContents += b;
            }
        }
    }

    getPanelContents(): string {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    }
}

export {
    Calculator
}
