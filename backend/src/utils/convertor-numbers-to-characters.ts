import {  readFileSync } from 'fs';

export class ConvertorNumbersToCharacters {

    private readonly numberForConverting: string;
    private filter: boolean;
    private words: string[] = [];

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

    public constructor(numberForConverting: string, filter: boolean = false) {
        this.numberForConverting = numberForConverting;
        this.filter = filter;

        if(this.filter) {
            this.words = readFileSync("./words-list/list.txt", "utf8").split("\n");
        }
    }

    public convert(): string[] {
        if(!this.numberForConverting || this.numberForConverting.length === 1) {
            return [];
        }

        let output: string[] = [];
        this.cartesianProduct(this.getNumbersParts(), output);

        return output;
    }


    public cartesianProduct(parts: string[][], output: string[]) {
        let i, j, l, m, a1, o = [];
        if (!parts || parts.length == 0) return parts;

        a1 = parts.splice(0, 1)[0];
        parts = this.cartesianProduct(parts, output);

        for (i = 0, l = a1.length; i < l; i++) {
            if (parts && parts.length) for (j = 0, m = parts.length; j < m; j++) {
                o.push([a1[i]].concat(parts[j]));
                const finaleValue = a1[i]+parts[j].join("");
                output.push(finaleValue);
            }
            else {
                o.push([a1[i]]);
            }
        }
        return o;
    }

    public findRealWorlds(): string[] {
        let pattern = "^";
        let regExpKeys: {[key: number]: string} = {};

        Object.entries(ConvertorNumbersToCharacters.keyboard).forEach(([key,value]) => {
            regExpKeys[key as any] = "(" + value.join("|") + ")";
        });

        this.numberForConverting.split("").forEach(number => {
            // @ts-ignore
            pattern += regExpKeys[Number(number)];
        })

        pattern += "$"

        const words: string[] = [];
        this.words.forEach(word => {
            if (RegExp(pattern).test(word)) {
                words.push(word)
            }
        })

        return words
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
