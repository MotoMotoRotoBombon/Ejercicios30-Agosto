function contarCaracteres (etr) {
    return [etr.replace(/\s/g, '')]
    .reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1;
        return obj;
    },{});
}  


function contarCaracteresV2(str) {
    let caracteres = [... new Set(str.toLowerCase())]

    for(var i=0; i<caracteres.length; i++){
        let arreglo=[]
        str.split('').map(n => {
            if(n.toLowerCase() === caracteres[i]){
                arreglo.push(n)
            } 
            
        })
        console.log(`La cantidad de ${caracteres[i]} es: ${arreglo.length}`);
    }

}

console.log(contarCaracteresV2("Abcaa"));
