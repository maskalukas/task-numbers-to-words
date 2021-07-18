export class ConvertorNumbersToCharacters {

    private readonly numberForConverting: string;

    private static keyboard = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    }

    public constructor(numberForConverting: string) {
        this.numberForConverting = numberForConverting;
    }

    public convert() {

        if(!this.numberForConverting || this.numberForConverting.length === 1) {
            return [];
        }

        const f = (a: any, b: any) => [].concat(...a.map((d: any) => b.map((e: any) => [].concat(d, e))));
        // @ts-ignore
        const cartesianProduct = (a: string[], b: string[], ...c: string[]) => b ? cartesianProduct(f(a, b), ...c) : a;
        // @ts-ignore
        const cartesianArr = cartesianProduct(...this.getNumbersParts());
        return cartesianArr.map((charArr: string[]) => charArr.join(""));
    }

    private getNumbersParts(): string[] {
        const numberArr = this.numberForConverting.split("");

        return numberArr.map(number =>{
            const num: number = Number(number);
            // @ts-ignore
            return ConvertorNumbersToCharacters.keyboard[num];
        })
    }


}
