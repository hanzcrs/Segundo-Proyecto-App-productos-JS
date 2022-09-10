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
    // crear funcion donde se crean las constantes obteniendo desde product-list los valores
    // ademas un element que creara en html para mostrarlos en pantalla
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
               <strong>Product Nombre</strong>: ${product.name}
               <strong>Product Precio</strong>: ${product.price}
               <strong>Product Año</strong>: ${product.year}
               <a href="#" class="btn btn-danger" name="delete">eliminar</a>
            </div>
       </div>
        `;
        //insertar un elemento hijo
        productList.appendChild(element);

    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        //llama el nombre delete que se crea por html boton = name="delete"
        if(element.name === 'delete') {
         element.parentElement.parentElement.parentElement.remove();
         this.showMessage('producto eliminado satisfactoriamente', 'danger')
        }

    }
 // se crea una funcion con un parametro de mensaje y su clase para crearlo
    showMessage(message, cssClass){
        const div = document.createElement('div');
        // mt-4 para dar margen
        div.className = ` alert alert-${cssClass} mt-4` ;
        div.appendChild(document.createTextNode(message));
        // mostrara en dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 3000);
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
   //creacion constante que guardara el metodo constructor
   const product = new Product(name, price,year);
   

   // revisar que se creo como objeto copiar esto en esta parte
   //console.log(name, price, year);
   //console.log(new Product(name,price,year))
 
   //crear nueva instancia para que se enlace arriba en addProduct(product)
   //basicamente se crea un oibjeto que interactua con otro que es el de mas arriba
   const ui = new UI();

   if (name === "" || price === "" || year === "") {
    return ui.showMessage("Por favor inserta algun dato", "danger");
  }

   ui.addProduct(product);
   // para resetear lo mismo
   ui.resetForm();
   ui.showMessage('Producto agregado con exito!', 'success');
      // console.log(name, price, year);  SI APLICO ESTO SE VERA EN CONSOLA, 
   //DEBO ACTIVAR EL PRESERVE LOG PARA MARCAR POR CONSOLA OJO ejemplo = 
   e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
 const ui = new UI();
 ui.deleteProduct(e.target);
});