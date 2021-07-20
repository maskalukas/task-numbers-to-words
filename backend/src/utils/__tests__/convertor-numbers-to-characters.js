import {ConvertorNumbersToCharacters} from "../convertor-numbers-to-characters";

test("Should returns 9 items without filter.",() => {
    const d = new ConvertorNumbersToCharacters("23");
    const result = d.convertWithoutRealWords();

    expect(result.length).toEqual(9);
    expect(result).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test("Should returns 27 items without filter.",() => {
    const conv = new ConvertorNumbersToCharacters("234");
    const result = conv.convertWithoutRealWords();

    expect(result.length).toEqual(27);
    expect(result).toEqual([
        "adg",
        "adh",
        "adi",
        "aeg",
        "aeh",
        "aei",
        "afg",
        "afh",
        "afi",
        "bdg",
        "bdh",
        "bdi",
        "beg",
        "beh",
        "bei",
        "bfg",
        "bfh",
        "bfi",
        "cdg",
        "cdh",
        "cdi",
        "ceg",
        "ceh",
        "cei",
        "cfg",
        "cfh",
        "cfi"
    ]);
});

test("Should return 3 items with filter",() => {
    const conv = new ConvertorNumbersToCharacters("22",true);
    const result = conv.convertWithRealWords([
        "aa","ba","ne","baa","boo","ca","do","dasdsad","dasd"
    ]);

    expect(result.length).toEqual(3);
    expect(result).toEqual([ 'aa', 'ba', 'ca' ])
})
