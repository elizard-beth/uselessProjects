import {writeFile} from 'fs';
import {readFile} from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function write(ans: string, data: any) {
    return writeFile(ans, data, (err) => {
        if (err) console.error(`Fatal error: ${err}`);
        console.log("Completed successfully.");
    });
}

rl.question("Write to which file? ", (ans: string) => {
    rl.question("Write from another file to said file or text data given here? (Y/N) ", (ans2: string) => {
        if (ans2 === "Y") {
            rl.question("Which file? ", (ans3: string) => {
                readFile(ans3, (err, data) => {
                    if (err) console.error(`Fatal error: ${err}`);

                    write(ans, data);
                });

                rl.close();
            });
        } else {
            rl.question("What text data? ", (ans3: string) => {
                write(ans, ans3);

                rl.close();
            });
        }
    });
});
