import { Calculator } from "../calchome";

let calcobj: Calculator = null;

beforeEach(() => {
    calcobj = new Calculator();
});

test('multiply 0', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('multiply 1', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("2");
});

test('multiply 2', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('square root 0', () => {
    calcobj.pressButton('9');
    calcobj.pressButton('R');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('square root 1', () => {
    calcobj.pressButton('16');
    calcobj.pressButton('R');
    expect(calcobj.getPanelContents()).toBe("4");
});
