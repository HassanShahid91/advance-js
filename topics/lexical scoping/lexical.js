// lexical scoping
// ap physically kahan avaliable ho depend jrta ha ap kya acces kr sakta ho 
function lexicalscope(){
    let a = 'hassan'
    function b(){
        console.log(a)
    }
    return b;
}
lexicalscope()();

// dynamic scoping -> ap jahan sa call kr rahe ho os pa depend krta ha value kahan sa mila gi

let a = 1;
function abc(){
    console.log(a);
}

function def(){
    let a = 42;
   abc(); 
}
def();
// agr js dynamic scope mein hota to a ki value 42 hoti kyonka dynamic pehla global stack k nai dekhta ha mgr js lexical scope mein ha to vo pehla function stack  ka bad global stack ko dekha ga is lya a ki value 1 print hogi