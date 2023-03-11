import { createHash } from "crypto";
import fs from "fs/promises";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
    const hash = await fs.readFile(`${dirname}files/fileToCalculateHashFor.txt`);
    console.log(createHash('sha256').update(hash).digest("hex"));
};

await calculateHash();