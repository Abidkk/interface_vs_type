//  // //   type  vs  interface


//  // diff -1
//  type abc = {}; // with =
//  interface xyz {};  // without =


//  //diff -2
//  type name1 = string; // can assign datatype
//  //interface name2 = string; //  can not assign datatype


// // diff -3
// //// in type we can use assigned string in object
// type myName = string;
// let data : {
//     name:myName,
// } = {
//     name:'Abid Ali'
// }
// console.log(data)

// //// in interface we can not use assigned string in object although we can't assign datatype
// // interface yourName = string;
// // let data1 : {
// //     name:myName,
// // } = {
// //     name:'Abid kk'
// // }
// // console.log(data1)



// /// diff -4
// // //  type can not be defined multiple with a same name
// type a ={
//     name:string
// };
// type a = {
//     age:number
// }
// // error (duplicate)


// // //  interface can be defined multiple times with same name
// interface b {
//     name:string
// }

// interface b {
//     age:number
// }
// // no duplicate error
// let mydata : b = {
//     name:"abid",
//     age:24
// }

// console.log(mydata)



// // diff -4


// type ( do not support extends)

type ab = {
    name:string,
    age:number
}

type abz  extends ab = {
    city:string
}

// error

// interface (  support extends)

interface ba  {
    name:string,
    age:number
}

interface zba  extends ab 
 {
    city:string
}

let data3 : zba = {
    name:'Abid',
    age:24,
    city:'Mirpurkhas'
}
console.log(data3)