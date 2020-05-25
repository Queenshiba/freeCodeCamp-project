function convertHTML(str) {
    const reg =
    {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&apos;',
        '"': '&quot;'
    }

    // split str with each word
const strSplit = str.split('')
// if strSprit has key in reg, return the value
const converted = strSplit.map((item) => {
    if (reg[item]) {
        return reg[item]
    } else {
        return item;
    }
})
// join strSplit together
return converted.join('')

}

console.log(convertHTML("Dolce & Gabbana")) // should return Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // should return Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // should return Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // should return Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")) // should return Schindler&apos;s List.
console.log(convertHTML("<>")) // should return &lt;&gt;.
console.log(convertHTML("abc")) // should return abc.