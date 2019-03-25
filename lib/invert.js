'use strict';

const invert = module.exports = {};
invert.name = 'invert';
/**
 * @param  {} buffer
 * @returns transformed buffer
 */
invert.transform = function(buffer){
  if (!Buffer.isBuffer(buffer.buffer) || buffer.buffer.readInt32LE(2)!== buffer.buffer.length){
    return null;
  }
  let colorPallet = buffer.colorTable;
  for(let i = 0; i < buffer.PIXEL_ARRAY_OFFSET-buffer.COLOR_TABLE_OFFSET; i = i + 4){
    colorPallet[i] = 255-colorPallet[i];
    colorPallet[i+1] = 255-colorPallet[i+1];
    colorPallet[i+2] = 255-colorPallet[i+2];
  }
};