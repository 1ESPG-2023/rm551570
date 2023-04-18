

// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }
// console.log(liElement)

//Declaração de arrays
let nr1 = [1, 2, 3, 4, 5];
let nr2 = [6, 7, 8, 9, 10];
//Espalhar o array com spread [ ... ]
let nr3 = [...nr1,... nr2];

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

//Listando um array! Técnica Especial
nr3.forEach((itemDoArray)=>{
    console.log(`Array-3 sendo listado ${nr3}`);
})

nr3.map((numero,key)=>{
    console.log(`${(key+1)} - Itens do array - ${numero}`);
    numero.forEach((digitos)=>{
        console.log(digitos)
    })
})

//Convertendo HTMLCollection m Array de forma indireta
const liElement = document.getElementsByTagName("li");
const LiElementArray =  [...liElementHtml];

LiElementArray.map((item,key)=>{
    if (item.textContent == "item-39") {
        console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
    }

})
