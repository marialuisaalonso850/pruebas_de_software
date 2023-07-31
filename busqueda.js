function busqueda(nombre) {
    let res= "";
 if (nombre=="juan") {
    res="entre";
 }   else{
    res= "salga";
 }
 return res;
}

module.exports=busqueda;