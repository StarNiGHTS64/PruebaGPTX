import * as fs from 'fs';
import * as path from 'path';

// Input
const inputFilePath = path.join(__dirname, 'Bigtext.txt');
// Output
const outputFilePath = path.join(__dirname, 'output.txt');

// Read input file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error when reading file:', err);
    return;
  }

  // Convert to upperCase
  const upperCaseData = data.toUpperCase();

  // Write Upper Case data on output file
  fs.writeFile(outputFilePath, upperCaseData, (err) => {
    if (err) {
      console.error('Error when writting on file:', err);
      return;
    }

    console.log('Text transform completed');
  });
});