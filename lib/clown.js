'use strict';
const clown = module.exports = {};
clown.name='mime';
/**
 * @param  {} buffer
 * @returns {} transformed buffer
 */
clown.transform = (buffer) => {
  if (!Buffer.isBuffer(buffer.buffer) || buffer.buffer.readInt32LE(2)!== buffer.buffer.length){
    return null;
  }
  let pixelMap = buffer.pixelArray;
  for (let i = 0; i< pixelMap.length; i++){
    if(pixelMap[i]=== 244){
      pixelMap[i]=255;
    }
  }
  let pixwid=112;
  for(let i=6648; i<6650; i++){
    [pixelMap[i], pixelMap[i+pixwid],pixelMap[i-pixwid],pixelMap[i-2*pixwid],pixelMap[i-3*pixwid],pixelMap[i-4*pixwid],pixelMap[i+14*pixwid],pixelMap[i+15*pixwid],pixelMap[i+16*pixwid],pixelMap[i+16*pixwid]] = [0,0,0,0,0,0,0,0,0];
  }
  for(let i=6682; i<6684; i++){
    [pixelMap[i], pixelMap[i+pixwid],pixelMap[i-pixwid],pixelMap[i-2*pixwid],pixelMap[i-3*pixwid],pixelMap[i-4*pixwid],pixelMap[i+14*pixwid],pixelMap[i+15*pixwid],pixelMap[i+16*pixwid],pixelMap[i+16*pixwid]] = [0,0,0,0,0,0,0,0,0];
  }
};