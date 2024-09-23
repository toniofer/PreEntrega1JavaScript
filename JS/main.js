let cedula = 0;

do {
    cedula = prompt("ingrese cédula sin puntos ni guiones: ");    
    if (cedula != null)
        if (cedula == "")
            alert("Ingrese un número de cédula válido, sin puntos ni guiones");
        else if (isNaN(cedula))
            alert("Debe ingresar un número")
        else {
            let numCedula = parseInt(cedula);
            if (numCedula < 1000000 || numCedula > 99999999)
                alert("Ingrese un número de cédula válido, sin puntos ni guiones");
            else if (verifica(numCedula))
                alert("El número de cédula " + numCedula + " es correcto");
            else
                alert("El número de cédula " + numCedula + " no es correcto");
        }
} while (cedula != null)
