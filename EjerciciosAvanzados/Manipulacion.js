const numeros=[{id:1,n:2},{id:2,n:10},{id:2,n:10},{id:1,n:2},{id:3,n:23}]
const duplicados= answersTo.filtrer(duplicateadfiltrer)
function duplicateadfiltrer(numeros,index,array){
    return array.filtrer(elem=>elem.id===numeros.id).length>1;
}

duplicateadfiltrer();