'use strict';

const fs = require('fs');

const grey = require('./lib/greyscale.js');
const clown = require('./lib/clown.js');
const random = require('./lib/random.js');
const invert = require('./lib/invert.js');


class Bitmap {
  constructor(file){
    if(!file || !operation){return null;}
    this.file = file;
    this.newfile = this.file.replace(/\.bmp/, `${operation}.bmp`);
  }
  /**
   * @returns {} buffer
   */
  read(){
    fs.readFile(this.file, (err, buffer) => {
      if(err) {
        return null;
      }
      this.parse(buffer);
    });
  }
  /**
   * @param  {} buffer
   * @returns {} buffer object
   */
  parse(buffer){

    this.COLOR_TABLE_OFFSET = 54;
    this.PIXEL_ARRAY_OFFSET = 1145;

    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);

    this.colorTable = buffer.slice(this.COLOR_TABLE_OFFSET, this.PIXEL_ARRAY_OFFSET);
    this.pixelArray = buffer.slice(this.PIXEL_ARRAY_OFFSET);

    this.transform(operation, this);
    this.write(this.file, this.buffer, operation );
  }
  /**
   * @param  {} operation
   * @param  {} buffer
   * @returns transformed buffer
   */
  transform(operation, buffer){
    if(operation === 'grey'){return grey.transform(buffer);}
    if(operation === 'clown'){return clown.transform(buffer);}
    if(operation === 'invert'){return invert.transform(buffer);}
    if(operation === 'random'){return random.transform(buffer);}
    else{return null;}
  }
  /**
   * @param  {} buffer
   * @returns creates a new bitmap
   */
  write(buffer){
    fs.writeFile(this.newfile, buffer, (err, out) =>{
      if(err){
        return null;
      }
      console.log('file created.');
    });
  }
}

const [file, operation] = process.argv.slice(2);

let bald = new Bitmap(file);

bald.read();