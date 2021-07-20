import {ConvertorNumbersToCharacters} from "../convertor-numbers-to-characters";

test("Should returns 9 items without filter.",() => {
    const d = new ConvertorNumbersToCharacters("23");
    const result = d.convertWithoutRealWords();

    expect(result.length).toEqual(9);
    expect(result).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test("Should returns 27 items without filter.",() => {
    const d = new ConvertorNumbersToCharacters("234");
    const result = d.convertWithoutRealWords();

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
