// principalmente lo deje para ver si hay conexion entre js y html figura como alerta
// tambien se podria con console.log
//alert('funciona el codigo!!')


// se crea la clase producto que estara conformada por nombre, precio y año
// con el constructor se crea los distintos parametros que tendra dicho producto
class Product {
    constructor(name,price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
     }
}

//objeto de interfaz
//contendra los metodos como listar-eliminar etc, 
class UI {
    addProduct(){
    }

    deleteProduct(){

    }

    showMessage(){

    }
}


// (DOM-DOCUMENT OBJECT MODEL) EVENTOS 
//DE ESTA FORMA PUEDO TESTEAR QUE FUNCIONA EN PRIMERA INSTANCIA
//document.getElementById('product-form').addEventListener('submit', function () {alert('Enviando Formulario') })  


document.getElementById('product-form')
.addEventListener('submit', function (e) {
   const name =  document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year =  document.getElementById('year').value;
   // console.log(name, price, year);  SI APLICO ESTO SE VERA EN CONSOLA, DEBO ACTIVAR EL PRESERVE LOG PARA MARCAR POR CONSOLA OJO
e.preventDefault();
})