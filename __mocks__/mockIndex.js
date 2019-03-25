'use strict';

class Bitmap {
  constructor(file){
    this.file = file;
    this.newfile = this.file.replace(/\.bmp/, `${operation}.bmp`);
  }
  read(){
    if(!file){console.log('error');}
    console.log('file read successfully');
  }
  parse(buffer){
    if (!Buffer.isBuffer(buffer)){
      return null;
    }
    this.COLOR_TABLE_OFFSET = 54;
    this.PIXEL_ARRAY_OFFSET = 1145;
    
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    
    this.colorTable = buffer.slice(this.COLOR_TABLE_OFFSET, this.PIXEL_ARRAY_OFFSET);
    this.pixelArray = buffer.slice(this.PIXEL_ARRAY_OFFSET);
    
    return buffer;
  }
  transform(operation, buffer){
    if(operation === 'grey'){return buffer;}
    if(operation === 'clown'){return buffer;}
    if(operation === 'invert'){return buffer;}
    if(operation === 'random'){return buffer;}
    else{return null;}
  }
  write(buffer){
    if (!Buffer.isBuffer(buffer) || buffer.readInt32LE(2)!== buffer.length){
      return null;
    }
    return 'file created.';
  }
}

const [file, operation] = process.argv.slice(2);

module.exports = {Bitmap};