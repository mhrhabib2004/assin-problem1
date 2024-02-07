function checkName(inArray){
    // console.log(inArray);
if (typeof inArray !== 'string' ){
    return 'invalid';
}
const lastGoodWordlow = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
const lastGoodWorduper= ['A', 'Y', 'I', 'E', 'O', 'U', 'W'];
const lastWord=inArray.charAt(inArray.length-1);
if(lastGoodWorduper.includes(lastWord) || lastGoodWordlow.includes(lastWord)){
    
    return '"Good name"';
}
else{
    
    return '"Bad name"';
}
}

const name1 = checkName(["Rashed"]);
console.log(name1);