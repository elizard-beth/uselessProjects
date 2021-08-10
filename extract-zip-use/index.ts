// dependencies 
import extract from 'extract-zip';
import readline from 'readline';

// variables & constants
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask questions about zip extraction
rl.question("What file ZIP file would you like to extract? ", (location1: string) => {
    rl.question("Where would you like to extract this to? ", (location2: string) => {
        // extract said file
        extract(location1, {dir: location2}).then(() => {
            // let them know it's complete + close the readline
            console.log("Complete!");
            rl.close();
        })
    })
})
