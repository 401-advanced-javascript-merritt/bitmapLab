'use strict';

const fs = require('fs');
const buffer = fs.readFileSync(`../assets/baldy.bmp`); //cant use, will have to use a promise.
const util = require('util');
const parsedBitmap = {};

const FILE_SIZE_OFFSET = 2; //all this info is in the header/wiki.
const WIDTH_SIZE_OFFSET = 18;
const HEIGHT_SIZE_OFFSET = 22;
const BYTES_PER_PIXEL = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXEL_ARRAY_OFFSET = 1146;

parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
parsedBitmap.height = buffer.readInt32LE(HEIGHT_SIZE_OFFSET);
parsedBitmap.width = buffer.readInt32LE(WIDTH_SIZE_OFFSET);
parsedBitmap.bytesPerPixel = buffer.readInt32LE(BYTES_PER_PIXEL);
parsedBitmap.bytesPerPixel = buffer.readInt32LE(COLOR_TABLE_OFFSET);
parsedBitmap.bytesPerPixel = buffer.readInt32LE(PIXEL_ARRAY_OFFSET);

let colorTable = buffer.slice(COLOR_TABLE_OFFSET, PIXEL_ARRAY_OFFSET);
console.log(parsedBitmap.fileSize);
console.log(parsedBitmap.height);
console.log(parsedBitmap.width);

//let sbuff = buffer.slice(COLOR_TABLE_OFFSET,PIXEL_ARRAY_OFFSET);

//console.log(sbuff);

//white
// for(let i = 1142; i < 1145; i++){
//   buffer[i] = 40;
// }

for(let i = COLOR_TABLE_OFFSET; i < PIXEL_ARRAY_OFFSET; i = i + 4){
  //let grey = ((buffer[i] + buffer[i+1] + buffer[i+2]) *100); //set all to grey
  buffer[i] = i+i;      //blue
  buffer[i+1] = i-i;   //green
  buffer[i+2] = i+i;    //red
}


parsedBitmap;


let json = JSON.stringify(colorTable);
console.log('colortable in json: ',json);

console.log(util.inspect(colorTable, {maxArrayLength: null}));

fs.writeFile('./test1.bmp', buffer, err =>{
  if(err) throw err;
  console.log('created file');
});