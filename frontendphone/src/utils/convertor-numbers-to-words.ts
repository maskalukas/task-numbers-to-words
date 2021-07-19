
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

    public convert(): string[] {
        if(!this.numberForConverting || this.numberForConverting.length === 1) {
            return [];
        }

        return this.cartesianProduct(this.getNumbersParts()) as any;
    }


    public cartesianProduct(parts: string[][]) {
        let i, j, l, m, a1, o = [];
        if (!parts || parts.length == 0) return parts;

        a1 = parts.splice(0, 1)[0];
        parts = this.cartesianProduct(parts);

        for (i = 0, l = a1.length; i < l; i++) {
            if (parts && parts.length) for (j = 0, m = parts.length; j < m; j++) {
                o.push([a1[i]].concat(parts[j]));
            }
            else {
                o.push([a1[i]]);
            }
        }
        return o;
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
