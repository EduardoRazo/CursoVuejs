/* Crear una instancia de vue */
var app = new Vue({ //se recibe un objeto Json con 4 propiedades el,data,method,watch
    el : '#app',  //propiedad el: objeto de nuestro archivo html cuyo id sera "app" 
    data : {
        lista : [ 
        ], //declaramos rreglo llamado lista
        nombre : '', //declaramos agregar variable e incianizarla en blanco
        promedio : ''

    }, //.data
    methods : {
        //metodo para determinar si el alumno esta aprobado 
        agregarNota:  function (){
            estadoA=false; //declara una variable que solo funciona dentro del metodo e iniciarla en "false"
            if (this.promedio>=12.5){
                estadoA=true;
            }
            //validar que los datos en el input nombre y promedio no esten vacios
            if (this.nombre!="" && this.promedio!=""){ //si nombre y promedio es diferente de vacio entonces guardamos

                //push es un metodo propio de javascript que permite agregar valores al array
                this.lista.push({nombre:this.nombre, promedio:this.promedio, estado:estadoA}); //enviamos un nombre que es igual a lo que tenemos en nuestra variable nombre de nuestro data
                
                //Dejar en blanco las variables de promedio y nombre, ya que estas estan relacionadas con el input
                this.nombre = "";
                this.promedio = "";
            }
            else{
                alert ("Ingrese el nombre y promedio del estudiante");
            } 
        } //.agregarNota
    }, //.methods


})