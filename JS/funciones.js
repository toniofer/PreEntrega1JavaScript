/*
Para calcular el dígito verificador de la cédula uruguaya se toman los primeros siete números
y se multiplican cada uno (respetando el lugar, es decir, primero x primero, segundo x el segundo, etc.) 
por el código 2987634. Luego se toma el resultado y se le busca el número mayor que termine en 0
y se le resta. Ej: 150 - 148 = 2. 
El número 2 es el dígito verificador para la cédula 1.234.567
*/

function verifica(cedula) {
    if (cedula > 999999 && cedula < 100000000) {

        let numeroCed = cedula;
        let digVerif = numeroCed % 10;          // obtengo código verificador con módulo 10 
        numeroCed = Math.floor(numeroCed / 10);       // con la división entera entre 10 le quito el dígito más a la derecha    
        let codigo = 2987634;
        let suma = 0;
        let digitoCedula = 0;
        let digitoCodigo = 0;

        for (let i = 1; i < 7; i++) {
            digitoCedula = numeroCed % 10;              // obtengo el dígito de la cédula que quiero operar
            digitoCodigo = codigo % 10;                  // obtengo el dígito del código que quiero operar
            suma += digitoCedula * digitoCodigo;        // multiplico los dígitos entre si y el resultado lo sumo a suma
            numeroCed = Math.floor(numeroCed / 10);     // le quito el dígito de la derecha
            codigo = Math.floor(codigo / 10);            // le quito el dígito de la derecha
        }

        if (numeroCed > 0) {
            digitoCedula = numeroCed % 10;              // obtengo el dígito de la cédula que quiero operar
            digitoCodigo = codigo % 10;                  // obtengo el dígito del código que quiero operar
            suma += digitoCedula * digitoCodigo;        // multiplico los dígitos entre si y el resultado lo sumo a suma
        }

        let tope = Math.ceil(suma / 10) * 10;           // con ceil obtengo el entero superior 
        
        if (tope - suma === digVerif)
            return true;
    }
    return false;                               
}