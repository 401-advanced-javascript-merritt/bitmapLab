'use strict';
const random = module.exports= {};

random.name = 'random';
/**
 * @param  {} buffer
 * @returns transformed buffer
 */
random.transform = (buffer) =>{
  if (!Buffer.isBuffer(buffer.buffer) || buffer.buffer.readInt32LE(2)!== buffer.buffer.length){
    return null;
  }
  let colorPallet = buffer.colorTable;
  for (let i = 0; i<colorPallet.length; i= i+4){
    colorPallet[i] = Math.floor(Math.random()*255);
    colorPallet[i+1] = Math.floor(Math.random()*255);
    colorPallet[i+2] = Math.floor(Math.random()*255);
  }
};