export class ConvertorNumbersToCharacters {

    private readonly numberForConverting: string;

    private static keyboard = {
        1: [],
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"],
        0: []
    }

    public constructor(numberForConverting: string) {
        this.numberForConverting = numberForConverting;
    }

    public convert(): string[][] {

        if(!this.numberForConverting || this.numberForConverting.length === 1) {
            return [];
        }

        // @ts-ignore
        let cartesianArr = this.cartesian(this.getNumbersParts());
        // @ts-ignore
        return cartesianArr.map((charArr: string[]) => charArr.join(""));
    }

    private cartesian(parts: string[][]) {
        // @ts-ignore
        let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
        // @ts-ignore
        let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;
        // @ts-ignore
        return cartesian(...parts);
    }


    private getNumbersParts(): string[][] {
        const numberArr = this.numberForConverting.split("");

        const a = numberArr.map(number =>{
            const num: number = Number(number);
            // @ts-ignore
            return ConvertorNumbersToCharacters.keyboard[num];
        });

        return a;
    }


}
