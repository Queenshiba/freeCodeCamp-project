function spinalCase(str) {
    //find and replace each occurrence of a lower case character followed by an upper case character, and insert a space between them
const addedSpace = str.replace(/([a-z])([A-Z])/g, '$1 $2');
//replace underscore to dash and make all lowercase
const allReplaced = addedSpace.replace(/_/g, '-').replace(/\s+/g, '-').toLowerCase();;

return allReplaced

}

console.log(spinalCase('This Is Spinal Tap'));

//should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"))
//should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"))
//should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"))
//should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"))
//should return "all-the-small-things".