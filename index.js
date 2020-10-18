const data = require('./data')
const syllable = require('./syllable')

let char = data.main_char
let coda = data.coda
let tone = data.tone
let vowel = data.vowel
let glide = data.glide
let digit = data.digits


let breaker = syllable.ShanWordBreaker

let syllabled = breaker('ပေႃးၶႂ်ႈၵျၶႅၼ်ႇၵႂႃႇၸိုင် တေလႆႈႁွင်ႉသြႃႇလီရဵၼ်းႁူႉသွၼ်ၽိုၵ်း')
console.log(syllabled)

let result = []


for (let i = 0; i < syllabled.length; i++) {
    let targeted = syllabled[i]

    if (targeted.length === 1) {

        let tmp = []
        tmp.push(char[targeted])

        result.push(tmp)
    }
    else {
        let tmp = []
        function loop() {
            if (targeted[0] === "ေ" & targeted[2] === 'ႃ') {
                tmp.push(targeted[1])
                tmp.push('au')

            } else if (targeted[0] === "ေ") {
                tmp.push(targeted[1])
                tmp.push('au')
            } else {
                [...targeted].map(e => {
                    if (char.hasOwnProperty(e)) {
                        tmp.push(char[e])
                    } else if (glide.hasOwnProperty(e)) {
                        tmp.push(glide[e])
                    } else if (vowel.hasOwnProperty(e)) {
                        tmp.push(vowel[e])
                    } else if (coda.hasOwnProperty(e)) {
                        tmp.push(coda[e])
                    } else if (tone.hasOwnProperty(e)) {
                        // tone here 
                        tmp.push(``)
                    }
                    else if (data.digits.hasOwnProperty(e)) {
                        tmp.push(digit[e])
                    }
                })
            }
        }
        loop()
        result.push(tmp)
    }

}
let text = ""
result.map(e => {
    let a = e.join('')
    text += a + ' | '
})
console.log(text)

