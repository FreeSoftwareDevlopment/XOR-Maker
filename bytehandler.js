import xor from "./xor.js";

module.exports=(tex, key)=>{
    const splitex=tex.split("");
    let splitted=[];
    splitex.forEach(s=>{
        splitted.push(parseInt(s));
    });
    const ess=key.split("");
    let splittedkey=[];
    ess.forEach(s=>{
        splittedkey.push(parseInt(s));
    });
    const bytelenght = splitex.length;
    let ned=0;
    let news=0;
    let currents=null;
    let come=[];
    while(bytelenght>=ned){
        currents=xor(splitted[ned],splittedkey[news]);
        if(currents==null){
        }else{
            come.push(currents);
        }
        ned++;
        if(news<splittedkey.length){
            news++;
        }else{
        	news=0;
        }
    }
    return come.join("");
}