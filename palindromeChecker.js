module.exports.palindrome_checker = function checkPL(word){
    word.toLowerCase();

   let str = word.split("")

   //identifier
    let i;
    let reversed ="";

    for(i = str.length - 1;i >= 0;i--){
           reversed += str[i];
    }

    if(reversed ==word){
       return true;
    }else{
        return  false;
    }

}