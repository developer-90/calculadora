// obtiene el elemento de resultado
let result  = document.getElementById("result");

// Ingresar números al preciosar la tecla
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Logica de la calculadora
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Introduzca valores para poder calcular");
    }
}

// Reset button
function reset(){
    result.value = "";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

// x² button
function square() {
    var num = document.getElementById("result").value;
    var result = num * num;
    document.getElementById("result").value = result;
}

// √ button
function inputSqrt() {
    var num = document.getElementById("result").value;
    var result = Math.sqrt(num);
    document.getElementById("result").value = result;
}


/* =================== TEMAS =================== */
const theme = {
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
    }
}

// Obtiene elemento root
var root = document.querySelector(':root');

// Comprueba la preferencia de temas del usuario
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// Cambia el tema de los resultados anteriores
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "2";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "1";
    theme.light();    
} else {   
}

// Función para recibir el valor de la entrada
function myFunction_set(val) {
    // Recibe el valor del rango del tipo de entrada
    document.getElementById('btnTheme').value = val; 

    // Cambia el tema con los resultados anteriores
    if(val == 1){
        theme.light();
    } 
     
    else if(val == 2){
        theme.dark();
    }  
}