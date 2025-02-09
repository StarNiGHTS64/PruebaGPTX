//Time: O(n)
//Space: O(n)

function StringArray2IntArray(strArray: string[]): number[]{
    //Base Case 
    if(strArray.length === 0){
      return [];
    }
  
    let intArray: number[] = [];
    
    for(let i = 0; i < strArray.length; i++){
      
      let strLenght: number = strArray[i].length;
      
      if(strLenght > 2) intArray.push((strLenght));
      
    }
      
    return intArray;
  };
  console.log('Input: ', ["Hola", "mundo", "es", "una", "prueba"])
  console.log('Output: ', StringArray2IntArray(["Hola", "mundo", "es", "una", "prueba"]));