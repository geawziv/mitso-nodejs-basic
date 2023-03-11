import {promises as fs, createWriteStream} from "fs";
import { stdin } from "process";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const streamOut = createWriteStream(`${dirname}files/fileToWrite.txt`, "utf-8");

const write = async () => {
    console.log(dirname);
    stdin.pipe(streamOut);
};

await write();