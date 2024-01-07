const { log } = require("console");
const os=require("os");

// how to check a architecher
console.log(os.arch());

// how to check a free memory 
 const Fmemory=os.freemem();
//  console.log(Fmemory);

// console.log(`${Fmemory/ 1024/1024/1024}`);

// const totalmemory=os.totalmem();
// console.log(`${totalmemory/ 1024/1024/1024}`);

// console.log(os.hostname());

// console.log(os.platform());