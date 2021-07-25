const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function write(ans, data) {
    return fs.writeFile(ans, data, (err) => {
        if (err) console.error(`Fatal error: ${err}`);
        console.log("Completed successfully.");
    });
}

//sorry for the horrify code. it had to be done

readline.question("Write to which file? ", ans => {
    readline.question("Write from another file to said file or text data given here? (Y/N) ", ans2 => {
        if (ans2 === "Y") {
            readline.question("Which file? ", ans3 => {
                fs.readFile(ans3, (err, data) => {
                    if (err) console.error(`Fatal error: ${err}`);

                    write(ans, data);
                });

                readline.close();
            });
        } else {
            readline.question("What text data? ", ans3 => {
                write(ans, ans3);

                readline.close();
            });
        }
    });
});
