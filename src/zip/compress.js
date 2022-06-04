import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

export const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const input = createReadStream('./files/fileToCompress.txt');
    const otput = createWriteStream('./files/archive.gz');

    pipeline( input, gzip, otput, ()=>{} )
};

compress();