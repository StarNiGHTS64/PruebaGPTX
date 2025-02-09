"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Input
var inputFilePath = path.join(__dirname, 'Bigtext.txt');
// Output
var outputFilePath = path.join(__dirname, 'output.txt');
// Read input file
fs.readFile(inputFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    // Convert to upperCase
    var upperCaseData = data.toUpperCase();
    // Write Upper Case data on output file
    fs.writeFile(outputFilePath, upperCaseData, function (err) {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }
        console.log('El archivo se ha convertido a mayúsculas y guardado correctamente.');
    });
});
