// closure => vo function jo parent function ka andar ho or parent function ka variable use kr rha ho

let abc = () => {
    let a = 12;
    return function (){
        console.log(a);
    }
}
abc()();

// jab function return kya to prent fuction or os ka variable destroy ho gya leikn jb closure bna to os function or variable na backlink bnaya jisa [[environment]] kehta hein


console.log('');



// uses
function privatecounter(){
    let num = 0;
    return function(){
        num++;
        console.log (num);
    }
}
let countednum = privatecounter();   //privatecounter ko yahan save kr liya kyonka vo yahan chal nahisakta
countednum();                       //yahan call kya let (countednum) ko to function chal gya


let countednum2 = privatecounter();
countednum2();                        //yahan jab caall kya to aik or box bna jis mein yeh run hoga
countednum2();
countednum2();
countednum2();
countednum2();
countednum2();