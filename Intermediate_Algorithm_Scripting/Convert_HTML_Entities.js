function convertHTML(str) {
    const reg =
    {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }


    const strSplit = str.split(' ')
const objectKeys = Object.keys(reg).toString()
const objectValue = Object.values(reg).toString()
console.log(objectKeys)
    for (let j = 0; j < strSplit.length; j++) {
        for (let i = 0; i < objectKeys.length; i++) {
        if (strSplit[j] = objectKeys[i]) {
            
            replaced = str.replace(strSplit[j], objectValue[j]);
            // return 

        }
        return replaced
    }
    }


}

console.log(convertHTML("Dolce & Gabbana")) // should return Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // should return Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // should return Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // should return Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")) // should return Schindler&apos;s List.
console.log(convertHTML("<>")) // should return &lt;&gt;.
console.log(convertHTML("abc")) // should return abc.