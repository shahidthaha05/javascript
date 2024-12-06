// var a=10
// var a=20
// alert(a)
// let a=10
// a=20
// const a=10
// a=20
// console.log(a);
// var let const



// let a=10.20  
// let a="hello"
// let a="123"
// let a=[1,2,3,['abc']]
// let a={name:'shahid',age:22}
// let a=null  for giving null values
// let a=true
// console.log(typeof a);for checking the types of variables


// operators
// arithametic
// +,-,*,/,**,++,--,

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);

// a=10
// // a++
// // ++a
// console.log(a);

// assignment 

// =,+=,-=,/=,**=

// ==

// console.log(10=="10");
// console.log(10==="10");


// console.log(10!="11");
// console.log(10!=="10");


// console.log(10==10 && 10==11);  and
// console.log(10==10 || 10==11);  or


// function
// -------------------------


// function fun1(){
//     let a=parseInt(document.getElementById("demo").value)
//     console.log(typeof a)
//     console.log(a);
    

//     console.log('welcome');
    
// }

// fun1()




// function add(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     console.log(a+b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a+b
    
// }
// function sub(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     console.log(a-b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a-b
    
// }
// function mult(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     console.log(a*b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a*b
    
// }
// function div(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     console.log(a/b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a/b
    
// }
// function mod(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     console.log(a%b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a%b
    
// }


// let a=10
// let b=10
// if (a==b){
//     console.log('equal');
    
// }
// else if(a!=b){
//     console.log('not equal');
    
// }
// else{
//     console.log('invalid');
    
// }


// bonus

// function fun1(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     let h3=document.getElementById('h1')

//     if (b>=5){
//         t=a*0.05
//         s=a+t
//         h3.innerHTML=s
        
//     }
//     else{
//         h3.innerHTML='no bonus'
        
//     }
// }


// divisble by 3

// function fun2(){
//     let a=parseInt(document.getElementById("a").value)
//     let h3=document.getElementById('h1')
//     d=a%3
//     if (d%3==0){
//         h3.innerHTML='divisble '
//     }
//     else{
//         h3.innerHTML='not divisble'
//     }
// }


// # a=input("enter the city : ")

// # if a=='delhi':
// #     print('red fort')
// # elif a=='agra':
// #     print('taj mahal')
// # elif a=='jaipur':
// #     print('jal mahal')
// # else:
// #     print('not found')



function city(){
    let a=parseInt(document.getElementById("a").value)
    let h3=document.getElementById('h1')
    if (a='delhi'){
        h3.innerHTML='red fort '
    }
    else if (a='agra'){
        h3.innerHTML='taj mahal'
    }
    else if (a='jaipur'){
        h3.innerHTML='jal mahal'
    }
    else{
        h3.innerHTML='not found'
    }
}



