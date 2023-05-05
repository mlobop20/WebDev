window.onload = function () {
    // //const beers = ["imperial", "silver", "corona"];
    // let wines = ["merlot", "frontera", "espumeante"];

    // const beers = [{
    //     name: "IMPERIAL",
    //     price: 2000,
    //     alcohol: 4.5
    // }, {
    //     name: "Silver",
    //     price: 2100,
    //     alcohol: 4.9
    // }
    //     , {
    //     name: "PILSEN",
    //     price: 2500,
    //     alcohol: 5.6
    // }
    // ];



    // //crea una nueva colección a partir de la original, se puede modificar, puede ser de menos campos
    // const beers2 = beers.map(element=>{
    //     return{
    //         name: element.name,
    //         price: element.price*2,
    //         alcohol: element.alcohol
    //     }
    // })

    // //buscar
    // // let fn = (e) => e.alcohol > 5;
    // // console.log(beers.every(fn));//evalua todos los elementos para que todos cumplan, da true false
    // // console.log(beers.some(fn));//al menos un elemento cumple con la condición

    // //buscar
    // // const beer = beers.find(element => element.name === "Silver");
    // // console.log(beer);

    // // const beert = beers.find(element => element.alcohol <6);
    // // console.log(beert);

    // // const beer = beers.filter(element => element.alcohol < 5);


    // // //ordanado por nombre
    // // beers.sort((a,b)=>a.alcohol - b.alcohol);
    // // beers.sort((a, b) => {
    // //     if (a.name > b.name) {
    // //         return 1;
    // //     } if (a.name < b.name) {
    // //         return -1;
    // //     } 
    // //     return 0;
    // // });
    // //ordenar
    // // const num = [2,4,99,33,56];
    // // num.sort();
    // show(beers2)



    // //sumar algun contenido de array
    // const sum = beers.reduce((acc, curr) => acc+curr.price, 0);
    // console.log(sum)




    const fns = [
        ()=>console.log("Primero"),
        ()=>console.log("Segundo"),
        ()=>console.log("Tercero"),
    ];

fns.forEach(element => element());


    function show(arreglo) {
        for (let index = 0; index < arreglo.length; index++) {
            console.log(arreglo[index]);

        }
    }

    //     let fn = function(name, lastname){
    //         console.log("Hola "+name + " " +lastname)
    //     }    
    //     let flecha = () => console.log("FUNCION flecha")



    // function some(f, flecha) {
    //     console.log("ANTES")
    //     f("Maikol", "Lobo");
    //     flecha();
    //     console.log("Después")
    // }

    // some(fn, flecha);

    // beers.forEach((element, i)=>{
    //     console.log(element);
    //     console.log("Index: "+i);
    //     })

    // const numbers = [1,2,3,4];
    // const arr = [...numbers, ...beers]
    // const arra =  numbers

    // const arra2 =  [...numbers]
    // arra2[0] = 100;
    // numbers[1]=200;



    //const alcoholDrinks = beers.concat(wines);

    // alcoholDrinks.push("Leche");

    // const alcoholDrinks = beers.slice(0,2)//muestra los 2 primeros

    // beers.fill("Leche",0,beers.length)//se llena todo con uno
    //console.log(beers.indexOf("silver")); //en que posición está

    // console.log(numbers.length);
    // console.log(numbers[2]);
    // console.log(numbers[numbers.length-1]);
    // console.log(numbers.at(2));

    // show(numbers);
    // //Recorrer
    // function show(numbers) {
    //     for (let i = 0; i < numbers.length; i++) {
    //         console.log(numbers[i]);

    //     }
    // }

    // //En reversa
    //     for (let i = numbers.length - 1; i >= 0; i--) {
    //         console.log(numbers[i]);

    //     }

    // show(numbers);
    // //Recorrer
    // function show(numbers) {
    //     for (let i = 0; i < numbers.length; i++) {
    //         console.log(numbers[i]);

    //     }
    // }


    // //muteables
    //     beers.push("Ron"); //al final
    //     beers.unshift("Wisky"); //al inicio
    //     beers.splice(3,0,"Toña"); //al medio

    //     beers.pop("Wisky"); //al inicio

    //     let b = beers.pop();
    //     let b2 = beers.shift();
    //     console.log(b);
    //     console.log(b2);
    //showDom("array2", alcoholDrinks);


    //showDom("array2", beers);

    //showDom("array2", beers);
    //showDom("array1", beers2);

    function showDom(element, beers) {
        document.getElementById(element).innerHTML = "";
        for (let e of beers) {
            document.getElementById(element).innerHTML +=
                `<div>${e.name} ${e.price} (${e.alcohol})<div>`;


        }
    }

}