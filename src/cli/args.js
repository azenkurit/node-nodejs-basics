export const parseArgs = () => {
   for (let i=2; i< process.argv.length; i++) {
       console.log(`RSS_name${i-1} = ${process.argv[i]}`);
   }
};

parseArgs();