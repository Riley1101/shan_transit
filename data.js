
let main_char = {
    "ၵ": "k",
    "ၶ": "kh",
    "ၷ": "g",
    "ꧠ": "gh",
    "င": "ng",
    "ၸ": "ts",
    "ꧡ": "tsh",
    "ၹ": "z",
    "ꧢ": "zh",
    "ၺ": "ny",
    "ꩦ": "tt",
    "ꩧ": "tth",
    "ꩨ": "dd",
    "ꩩ": "ddh",
    "ꧣ": "nn",
    "တ": "t",
    "ထ": "th",
    "ၻ": "d",
    "ꩪ": "dh",
    "ၼ": "n",
    "ပ": "p",
    "ၽ": "ph",
    "ၾ": "f",
    "ၿ": "b",
    "ꧤ": "bh",
    "မ": "m",
    "ယ": "y",
    "ရ": "r",
    "လ": "l",
    "ဝ": "w",
    "ႀ": "x",
    "သ": "s",
    "ႁ": "h",
    "ꩮ": "ll",
    "ဢ": "ʼ",
}

let glide = {
    "ျ": "y",
    "ြ": "r",
    "ႂ": "w",
    "": "",
}

let vowel = {
    "": "a",
    "ၢ": "aa",
    "ိ": "i",
    "ဵ": "ae",
    "ႅ": "e",
    "ု": "u",
    "ူ": "uu",
    "ွ": "au",
    "ို": "ue",
    "ိူ": "oe",
    "ႃ": "aa",
    "ီ": "ii",
    "ေ": "ae",
    "ႄ": "e",
    "ူဝ်": "o",
    "ူၵ်": "ok",
    "ူင်": "ong",
    "ူတ်": "ot",
    "ူၼ်": "on",
    "ူပ်": "op",
    "ူမ်": "om",
    "ေႃ": "au",
    "ိုဝ်": "ue",
    "ိူဝ်": "oe",
    "ႆ": "ai",
    "ႆၢ": "aai",
    "ၢႆ": "aai",
    "ုၺ်": "ui",
    "ူၺ်": "oi",
    "ွႆ": "aui",
    "ိုၺ်": "uei",
    "ိူၺ်": "oei",
    "ဝ်": "ao",
    "ၢဝ်": "aao",
    "ိဝ်": "io",
    "ဵဝ်": "aei",
    "ႅဝ်": "eo",
    "ႂ်": "aue",
}

let coda = {
    "မ်": "m",
    "ၼ်": "n",
    "င်": "ng",
    "ပ်": "p",
    "တ်": "t",
    "ၵ်": "k",
    "": "",
}

//   ဝိၵ်ႇ    သျိၼ်ႇ  ၼရီႇ    တႆးၼႆႉ

let tone = {
    "": "u\0x030C",
    "ႇ": "\\u(0x0300)",
    "ႈ": "\\u(0x0304)",
    "း": "\\u(0x0301)",
    "ႉ": ["\\u(0x0302)", "\\u(0x0303)", "\\u(0x0330)"],
    "ႊ": "\\u(0x1DC8)",
}

let digits = {
    "႐": "0", "႑": "1", "႒": "2", "႓": "3", "႔": "4",
    "႕": "5", "႖": "6", "႗": "7", "႘": "8", "႙": "9",
    "၀": "0", "၁": "1", "၂": "2", "၃": "3", "၄": "4",
    "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9",
}


exports.main_char = main_char
exports.glide = glide
exports.vowel = vowel
exports.coda = coda
exports.tone = tone
exports.digits = digits


// [...targeted].map(e => {
//     if (char.hasOwnProperty(e)) {
//         tmp.push(char[e])
//     } else if (glide.hasOwnProperty(e)) {
//         tmp.push(glide[e])
//     } else if (vowel.hasOwnProperty(e)) {
//         tmp.push(vowel[e])
//     } else if (coda.hasOwnProperty(e)) {
//         tmp.push(coda[e])
//     } else if (tone.hasOwnProperty(e)) {
//         // tone here 
//         tmp.push(``)
//     }
//     else if (data.digits.hasOwnProperty(e)) {
//         tmp.push(digit[e])
//     }
// })