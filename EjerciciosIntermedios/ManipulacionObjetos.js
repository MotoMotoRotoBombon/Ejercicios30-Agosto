let persona = {

nombre:"Julio",
edad:20,
ciudad:"Tepic",

imprimirInfo: function(){
    console.log(`Soy ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`);
}
};
persona.imprimirInfo();
