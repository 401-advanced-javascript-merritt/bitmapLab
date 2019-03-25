'use-strict';
const grey = require('../lib/greyscale.js');
const clown = require('../lib/clown.js');
const random = require('../lib/random.js');
const invert = require('../lib/invert.js');
const mock = require('../__mocks__/mockIndex.js');
const fs = require('fs');

let bald = new mock.Bitmap('../assets/baldy.bmp');


describe('MockIndex.js', ()=>{
  it('should accept a file to read.', () =>{
    let log = jest.spyOn(global.console, 'log').mockImplementation( ()=> {});
    bald.read();
    expect(log).toHaveBeenCalledWith('file read successfully');
  }),
  it('should parse a buffer', () =>{
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(bald.parse(buffer)).toEqual(buffer);
    });
  }),
  it('should transform a buffer', () =>{
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(bald.transform('grey', buffer)).toEqual(buffer);
      expect(bald.transform('clown', buffer)).toEqual(buffer);
      expect(bald.transform('invert', buffer)).toEqual(buffer);
      expect(bald.transform('random', buffer)).toEqual(buffer);
    });
  }),
  it('should write a file', ()=>{
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(bald.write(buffer)).toEqual('file created.');
    });
  });
  it('should return null if the file is not valid.', ()=>{
    expect(bald.parse('hi')).toBeNull();
  });
  it('should return null if the command is not a valid function.', ()=>{
    expect(bald.transform('hi')).toBeNull();
  });
  it('should return null if the a buffer is not returned.', ()=>{
    expect(bald.write('hi')).toBeNull();
  });
});


describe('grey.js', ()=>{
  it('should return a buffer', () => {
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(grey.transform(buffer)).toBeTruthy();
    });
  });
  it('should return null for a number', () => {
    expect(grey.transform(5)).toBe(null);
  });
  it('should return null for an array', () => {
    expect(grey.transform([1,2,3])).toBe(null);
  });
  it('should return null for an object', () => {
    expect(grey.transform({5: 'hi'})).toBe(null);
  });
  it('should return null for a boolean', () => {
    expect(grey.transform(true)).toBe(null);
  });
});

describe('clown.js', ()=>{
  it('should return a buffer', () => {
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(clown.transform(buffer)).toBeTruthy();
    });
  });
  it('should return null for a number', () => {
    expect(clown.transform(5)).toBe(null);
  });
  it('should return null for an array', () => {
    expect(clown.transform([1,2,3])).toBe(null);
  });
  it('should return null for an object', () => {
    expect(clown.transform({5: 'hi'})).toBe(null);
  });
  it('should return null for a boolean', () => {
    expect(clown.transform(true)).toBe(null);
  });
});

describe('invert.js', ()=>{
  it('should return a buffer', () => {
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(invert.transform(buffer)).toBeTruthy();
    });
  });
  it('should return null for a number', () => {
    expect(invert.transform(5)).toBe(null);
  });
  it('should return null for an array', () => {
    expect(invert.transform([1,2,3])).toBe(null);
  });
  it('should return null for an object', () => {
    expect(invert.transform({5: 'hi'})).toBe(null);
  });
  it('should return null for a boolean', () => {
    expect(invert.transform(true)).toBe(null);
  });
});

describe('random.js', ()=>{
  it('should return a buffer', () => {
    fs.readFile('../assets/baldy.bmp', (err, buffer) => {
      if(err) {
        return null;
      }
      expect(random.transform(buffer)).toBeTruthy();
    });
  });
  it('should return null for a number', () => {
    expect(random.transform(5)).toBe(null);
  });
  it('should return null for an array', () => {
    expect(random.transform([1,2,3])).toBe(null);
  });
  it('should return null for an object', () => {
    expect(random.transform({5: 'hi'})).toBe(null);
  });
  it('should return null for a boolean', () => {
    expect(random.transform(true)).toBe(null);
  });
});

