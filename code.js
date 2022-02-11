//1
let numbers = ["one","two", "three", "four", "five"]
numbers.forEach(item => console.log(item));
//2
let prices = [50,88,564,123,60,100]
prices= prices.map(x=>x*0.2+"€")
console.log(prices);
//3
let names = ["John", "Johannes", "John", "Pekka",]
names=names.map(item=> item==="John" ? "Matti" :item)
console.log(names);
//4
let numbers2=[-3,-2,-1,1,2,3]
numbers2=numbers2.filter(item=>item>=0)
console.log(numbers2);
//5
let names2 = ["teija", "tukiainen", "talipää", "tauno", "Tukkiukko","Tukiainen","Talonmies" ]
names2 =names2.filter(x=>x.length>=8&&x[0]==="T")
console.log(names2);
//6
if(names.every(sana=>sana.length>0)){
let pituudet=names.map(sana=>sana.length)
let summa =pituudet.reduce((previous, current)=>previous+current)
console.log(summa);
}
