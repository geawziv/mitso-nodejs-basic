import fs from "fs"
import {stdout, stderr} from "process"
import url from "url"

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const streamIn = fs.createReadStream(`${dirname}files/fileToRead.txt`, "utf-8");

const read = async () => {
    let data = "";

    streamIn.on("data", chunk => data += chunk);
    process.on("exit", code => {
        if (code === 0) { stdout.write(data); }
        else { stderr.write("smt broke :("); }
    })
};

await read();