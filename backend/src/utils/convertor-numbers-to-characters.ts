import {  readFileSync } from 'fs';

/**
 * The convertor from numbers to words
 */
export class ConvertorNumbersToCharacters {
    /**
     * The number that is converted.
     */
    private readonly numberForConverting: string;
    /**
     * If a filter is included, if it is, then a file with words is loaded.
     */
    private filter: boolean;
    /**
     * Words from file
     */
    private words: string[] = [];

    /**
     * Keyboard numbers and corresponding chars
     */
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
            // load file with real words
            this.words = readFileSync("./words-list/list.txt", "utf-8").split("\n");
        }
    }

    /**
     * Converts numbers without real words to characters
     */
    public convertWithoutRealWords(): string[] {
        const f = (a: any, b: any) => [].concat(...a.map((d: any) => b.map((e: any) => [].concat(d, e))));
        // @ts-ignore
        const cartesianProduct = (a: string[], b: string[], ...c: string[]) => b ? cartesianProduct(f(a, b), ...c) : a;
        // @ts-ignore
        const cartesianArr = cartesianProduct(...this.getNumbersParts());
        return cartesianArr.map((charArr: string[]) => charArr.join(""));
    }

    /**
     * Converts numbers to real words
     */
    public convertWithRealWords(): string[] {
        let pattern = "^";
        let regExpKeys: {[key: number]: string} = {};

        Object.entries(ConvertorNumbersToCharacters.keyboard).forEach(([key,value]) => {
            regExpKeys[key as any] = "(" + value.join("|") + ")";
        });

        this.numberForConverting.split("").forEach(number => {
            // @ts-ignore
            pattern += regExpKeys[Number(number)];
        })

        pattern += "$";

        const words: string[] = [];
        this.words.forEach(word => {
            if (RegExp(pattern).test(word)) {
                words.push(word)
            }
        })

        return words
    }

    /**
     * Returns parts from keyboard according to number
     */
    private getNumbersParts(): string[][] {
        const numberArr = this.numberForConverting.split("");

        return  numberArr.map(number =>{
            const num: number = Number(number);
            // @ts-ignore
            return ConvertorNumbersToCharacters.keyboard[num];
        });
    }


}
