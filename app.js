var comparar = function(array,array2){

  if(array.length !== array2.length){
    return false;
  }else{
    for(i = 0; i < array.length; i+=1){
      if(array[i] !== array2[i]){
        return false;
      }
    }
  }
  return false
}


var array = [1,2,3,4,5,6,7,8,9,5];
var array2 = [1,2,3,4,5,6,7,8,9,10];

comparar(array,array2);
