'use strict';

const grey = module.exports = {};

grey.transform = function(buffer){
  if (!Buffer.isBuffer(buffer) || buffer.readInt32LE(2)!== buffer.length){
    return null;
  }
  let colorPallet = buffer.colorTable;
  for(let i = 0; i < 1145; i = i + 4){
    let greyscale = ((colorPallet[i] + colorPallet[i+1] + colorPallet[i+2]) /3);
    colorPallet[i] = greyscale;
    colorPallet[i+1] = greyscale;
    colorPallet[i+2] = greyscale;
  }
};
