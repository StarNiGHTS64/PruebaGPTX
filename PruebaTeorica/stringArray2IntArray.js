//Time: O(n)
//Space: O(n)
function StringArray2IntArray(strArray) {
    //Base Case 
    if (strArray.length === 0) {
        return [];
    }
    var intArray = [];
    for (var i = 0; i < strArray.length; i++) {
        var strLenght = strArray[i].length;
        if (strLenght > 2)
            intArray.push((strLenght));
    }
    return intArray;
}
;
console.log('Input: ', ["Hola", "mundo", "es", "una", "prueba"]);
console.log('Output: ', StringArray2IntArray(["Hola", "mundo", "es", "una", "prueba"]));
