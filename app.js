console.log("Ejercicio 1. Imprimir impares 1-20");
for (let i=1; i<=20;i+=2)
   console.log(i);

//////////////////////////////////////////////////////////7
console.log("Ejercicio 2. Disminuir múltiplos de 3, de 100 a 0");
for (let i=100; i>=0;i--){
    if (i % 3 == 0)
        console.log(i);
}
 
console.log("Ejercicio 4.Imprime la secuencia  4, 2.5, 1, -0.5, -2, -3.5.");
for (let i=4; i>=-3.5;i-=1.5){    
        console.log(i);
}


console.log("Ejercicio 5. Sume todos los valores del 1 al 100 en una variable sum = 5050")
let sum = 0;
let texto = "";
for (let i=1; i<=100;i++){
        sum = sum + i;
        texto+=i + " + ";       
}
console.log("La sumatoria de los numeros " + texto + " es  --> " + (sum));

console.log("Ejercicio 6. Factorial de 12, total 479001600")
let facto = 1;
let texto_facto = "";
for (let i=1; i<=12;i++){
        facto*=i;
        texto_facto+=i + " * ";       
}
console.log("El Factorial de los numeros " + texto_facto + " es  --> " + (facto));
