/*
Buffer - chunks,
Stream whole file 
1) Readable
2) Writeable
3) Duplex
4) Transform (for example compression)
*/
const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./nodejs/video.av1.mp4')
const writeStream = fs.createWriteStream('./nodejs/video2.av1.mp4')
const compressStream = zlib.createBrotliCompress()

// let i = 0
// readStream.on('data', (chunks) => {
//   writeStream.write(chunks)
//   console.log(++i, chunks)
// })

const handleError = () => {
  console.log('Error')
  readStream.destroy()
  writeStream.end('Finish with error...')
};

readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('close', handleError)