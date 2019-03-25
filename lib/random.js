'use strict';
const random = module.exports= {};

random.name = 'random';
random.transform = (buffer) =>{
  if (!Buffer.isBuffer(buffer) || buffer.readInt32LE(2)!== buffer.length){
    return null;
  }
  let colorPallet = buffer.colorTable;
  for (let i = 0; i<colorPallet.length; i= i+4){
    colorPallet[i] = Math.floor(Math.random()*255);
    colorPallet[i+1] = Math.floor(Math.random()*255);
    colorPallet[i+2] = Math.floor(Math.random()*255);
  }
};