var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = r;
        this.height = 30;
        this.width = 70;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    Resistor.prototype.setParent = function (p) {
        this.parent = p;
    };
    Resistor.prototype.draw = function (g, startx, y) {
        g.beginPath();
        g.moveTo(startx, y);
        g.lineTo(startx + this.width / 4, y);
        g.rect(startx + this.width / 4, y - 10, this.width / 2, 20);
        g.fillText(this.r + " Ω", startx + this.width / 4 + 1, y + 2);
        g.moveTo(startx + this.width * 3 / 4, y);
        g.lineTo(startx + this.width, y);
        g.stroke();
    };
    Resistor.prototype.getWidth = function () {
        return this.width;
    };
    Resistor.prototype.getR = function () {
        return this.r;
    };
    Resistor.prototype.setR = function (r) {
        this.r = r;
        if (this.parent) {
            this.parent.draw();
        }
        if (this.parent && this.parent.getR() > 1500) {
            this.parent.drawRed();
        }
    };
    return Resistor;
}());
var SeriesCircuit = /** @class */ (function () {
    function SeriesCircuit(g, startx, y) {
        this.g = g;
        this.startx = startx;
        this.y = y;
        this.resistors = [];
        this.width = 10;
    }
    SeriesCircuit.prototype.push = function (r) {
        this.resistors.push(r);
        this.width += r.getWidth();
        r.setParent(this);
        this.draw();
    };
    SeriesCircuit.prototype.draw = function () {
        this.g.clearRect(0, this.y - 20, this.width, 40);
        var x = this.startx;
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x += 5;
        this.g.lineTo(x, this.y);
        this.g.stroke();
        var areaStartX = x;
        for (var i = 0; i < this.resistors.length; i++) {
            this.resistors[i].draw(this.g, x, this.y);
            x += this.resistors[i].getWidth();
        }
        this.g.strokeStyle = "lightgray";
        this.g.beginPath();
        this.g.rect(areaStartX, this.y - 20, x - areaStartX, 40);
        this.g.stroke();
        this.g.strokeStyle = "black";
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x += 5;
        this.g.lineTo(x, this.y);
        this.g.stroke();
        this.g.fillText(this.getR() + " Ω", this.startx + this.width / 2 - 10, this.y + 20);
        if (this.getR() > 1500) { //see kontrollib oomide kogusummat, kui on rohek kui 1500 siis muutub punaseks
            this.g.strokeStyle = "red";
            this.g.beginPath();
            this.g.moveTo(this.startx, this.y);
            this.g.lineTo(x, this.y);
            this.g.stroke();
        }
    };
    SeriesCircuit.prototype.drawRed = function () {
        this.g.clearRect(0, this.y - 20, this.width, 40); // joonistab üle eelneva joone
        var x = this.startx;
        this.g.beginPath();
        this.g.moveTo(x, this.y);
        x += 5; //lisab x-koord. 5 px, et tekitada väike vahe eelneva joone ja uue punase joone vahel.
        this.g.lineTo(x, this.y);
        this.g.stroke(); //kinnitab joone joonistamise.
        var areaStartX = x;
        for (var i = 0; i < this.resistors.length; i++) { //tsükkel läbib kõik takistid ja joonistab need koos nende tekstiga punasele joonele
            this.resistors[i].draw(this.g, x, this.y);
            x += this.resistors[i].getWidth();
        }
        this.g.strokeStyle = "red";
        this.g.beginPath();
        this.g.rect(areaStartX, this.y - 20, x - areaStartX, 40); //joonistab ristküliku (takistite ümber) antud koordinaatidele.
        this.g.stroke();
        //this.g.strokeStyle = "black";
        //this.g.beginPath();
        //this.g.moveTo(x, this.y);
        //x += 5; 
        //this.g.lineTo(x, this.y);
        //this.g.stroke();
        this.g.fillText(this.getR() + " Ω", this.startx + this.width / 2 - 10, this.y + 20); //joonistab teksti, mis näitab kogutakistust punase joone kohale.
    };
    SeriesCircuit.prototype.getR = function () {
        var result = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var r = _a[_i];
            result += r.getR();
        }
        return result;
    };
    return SeriesCircuit;
}());
