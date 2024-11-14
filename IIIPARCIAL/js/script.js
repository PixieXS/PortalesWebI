document.addEventListener('DOMContentLoaded', onPageLoaded);

function onPageLoaded() {

    /*
    alert('Evento Disparado Desde Archivo JS Externo!!!')
    */

    console.log('Inicio De Script');

    let intEdad = 10;
    const strMensaje = 'Esto A Mostrar En HTML';



    let dblResultado = 10 + 14.32;
    console.log("Suma", dblResultado);

    dblResultado = 10.54 - 123.2;
    console.log("Resta", dblResultado);

    dblResultado = 4 * 3.2;
    console.log("Multiplicacion", dblResultado);

    dblResultado = 4 / 3;
    console.log("Division", dblResultado);

    dblResultado++;
    console.log("Acumulador", dblResultado);

    dblResultado--;
    console.log("Reductor", dblResultado);

    dblResultado += 14;
    console.log("Acumular Por", dblResultado);

    dblResultado -= 5;
    console.log("Reducir Por", dblResultado);

    dblResultado *= 4;
    console.log("Multiplicar Por", dblResultado);

    dblResultado = 3 % 2;
    console.log("Modulo", dblResultado);



    let intExpressionAEvaluar = 3450;
    if (intExpressionAEvaluar == "3450") {
        console.log("Entro en la sección verdadera del if");
    } else {
        console.log("Entro en la sección falsa del if");
    }

    // Aquí está la corrección de la variable
    if (intExpressionAEvaluar <= 100) {
        console.log("Entre 0 y 100");
    } else {
        if (intExpressionAEvaluar <= 200) {
            console.log("Entre 101 y 200");
        } else {
            console.log("Mayor a 200");
        }
    }


    let switchClass = 'ABC';
    switch (switchClass) {
        case 'ABC':
            console.log("Entro a ABC del switch");
            break;
        case 'DEF':
            console.log("Entro a DEF del switch");
            break;
        default:
            console.log("Entro en Default del switch");
            break;
    }


    for (let i = 0; i < 100; i++) {
        console.log("Interado Por:", i);
    }


    let j = 0;

    while (j < 10) {
        console.log("While Iteration:", j);
        j++;
    }


    let k = 10;
    do {
        console.log("Iterando Do While:", k);
        k++;
    } while (k < 10);


    //// ARREGLOS --> RESTRICTIVOS

    let arrColores = ['rojo', 'azul', 0xffffff, 256, false]

    console.log("Color:", arrColores[1]);

    console.log("Length Color:", arrColores.length);


    for (let index in arrColores)
        console.log("Iteracion De Arreglo:", index, arrColores[index]);


    //Funciones Anonimas

    arrColores.forEach(
        function (value) {
            console.log("ForEach Method:", value);
        }
    );

    const arrColoresText = arrColores.map(
        function (value) {
            return `El Color Iterado Es... ${value}`;
        }
    );

    console.log("CSV Serialized:", arrColoresText.join(","));


    //JSON ------> Javascript Object Notation   json.org


    let objPersona = {
        "Nombre": "Carlos Eduardo Sagastume Arteaga",
        "Telefono": "96246825",
        "Email": "carlossagastume08@gmail.com",
        "Idin": "0501200002843",

    };

    console.log("Nombre En El Objecto:", objPersona.Nombre);
    console.log("Telefono En El Objecto:", objPersona.Telefono);
    console.log("Email En El Objecto:", objPersona.Email);
    console.log("Idin En El Objecto:", objPersona.Idin);



    let arrPersonas = [
        {
            "nombre": "Orlando J Betancourth",
            "telefono": "00000000",
            "email": "obetancourthunichah@gmail.com",
            "idin": "0801198412349"
        },
        {
            "nombre": "Camilo Betancourth",
            "telefono": "00000000",
            "email": "cbetancourthunichah@gmail.com",
            "idin": "08011986012934"
        },
        {
            "nombre": "Adriana Betancourth",
            "telefono": "00000000",
            "email": "abetancourthunichah@gmail.com",
            "idin": "0801198900132"
        }
    ];

    arrPersonas.forEach(
        function (persona) {
            console.log("Registro:", objPersona.Idin);
        }
    )


}