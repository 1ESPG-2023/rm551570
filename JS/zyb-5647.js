
const liElement = document.getElementsByTagName("li");


// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)    
// }
// // console.log(liElement.lenght)

// Declaração de arrays
let nmr1 = [1,2,3,4,5];
let nmr2 = [6,7,8,9,10];
let nmr3 = [nmr1+nmr2];

console.log(`Array-1 ${nmr1}`);
console.log(`Array-2 ${nmr2}`);
console.log(`Array-3 ${nmr3}`);

//listando um array Tecnica especial
nmr3.forEach((itemDoArray)=>{
console.log(`Array-3 sendo listado ${itemDoArray}`);
})