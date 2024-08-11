//_ Spread Operatörü
/**
 * ..numbers ---  number[0],number[1],number[2],number[3] 
*/
 
let numbers = [1,2,3,4,5];

function add(a,b,c,d) {
    console.log(a+b+c+d);
}
// add(10,20,30,40);

//eski yöntem
add(numbers[0],numbers[1],numbers[2],numbers[3])

//Spread kullanarak --Yeni Yöntem
add(...numbers);

const diller = ["Java","C#"];
const diller2 = ["Python","Javascript", ...diller];
console.log(diller2);


const number= [1,2,3,4,5,6,7,8,9];
let [a,b,...kalansayilar]= number;
console.log(a,b,...kalansayilar);




