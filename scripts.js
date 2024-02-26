function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return b/a;
}
function subtract(a,b){
    return a-b;
}


function operate(operator,firstNumber,secondNumber){
    if (operator=='+'){
        result = add(firstNumber,secondNumber);
    }else if(operator=='*'){
        result = multiply(firstNumber,secondNumber);
    }else if(operator=='-'){
        result = subtract(firstNumber,secondNumber);
    }else if(operator=='/'){
        if(secondNumber==0){
            alert('hi butterflu u didnt call me back and also divided by 0 so now enjoy this popping up 2 or maybe 3 lol! times');
        }else{
        result = divide(secondNumber,firstNumber);
        }
    }else{
        result = 'Invalid';
    }
    return result;
}
function countOperators(arr) {
    const operators = ['+', '-', '*', '/']; 
    let count = 0;
    arr.forEach(item => {
        if (operators.includes(item)) {
            count++;
        }
    });
    return count;
}

let disp = document.querySelector('.disp');
let op = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let clr = document.querySelector('.clear');
let num_arr = document.querySelectorAll('.num');

let disp_arr = [];
let display_number;
let display_number_last;
let current_operator;
let last_digit ='';
let d;

let arru = [];
let daru = [];
num_arr.forEach((num)=>{
    num.addEventListener('click',()=>{
        last_digit = disp.textContent;
        disp.textContent =last_digit+num.value;
        display_number = disp.textContent;
        console.log(display_number);
        arru.push(display_number);
    
    })
})
op.forEach((ope)=>{
    ope.addEventListener('click',()=>{
        console.log('Hello');
        display_number_last= display_number;
        current_operator = ope.value;
        disp.textContent ='';
        arru.push(current_operator);

    })
})



let a;
let b;
let x;
let y;


function hasNumber(str) {
    return /\d/.test(str);
}
console.log(hasNumber('+'))

equal.addEventListener('click',()=>{
 
    let j = arru.length;

    for(let k=0;k<j;k++){
        console.log('k');
        console.log(k);
        if(Number(arru[k])>9){
        
            if(hasNumber(arru[k-1])){
               
            
            arru.splice(k-1,1);
            k=0;
            j=arru.length;
           

            }
        }

     
    }

 




    // arru.forEach((num)=>{
    //     h++;
    //     console.log('h');

    //     console.log(h)
    //     if(Number(num)>9){
    //         console.log('num');
    //         console.log(num)
    
    //         let index = arru.indexOf(num);
    //         arru.splice(index-1,1);
    //         console.log('arruumid');
    //         console.log(arru);
    //     }
    // })

    let cunt = countOperators(arru);

    x=Number(arru[0]);
    let i=0;
    while(i<cunt){
        console.log('cunt');
        console.log(cunt);
        console.log(i);
        console.log(x);
        console.log('huhu');
        console.log(arru[2*cunt-1]);
        
        x = operate(arru[2*i+1],Number(x),Number(arru[2*i+2]));

        console.log(x);
        i++;

    }
    d=x;

disp.textContent = d;
})

clr.addEventListener('click',()=>{
    disp.textContent='';
    arru.splice(0,arru.length);
    daru.splice(0,daru.length);


})















