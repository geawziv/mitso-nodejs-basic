import fs from "fs/promises";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
    let files = await fs.readdir(`${dirname}files`)
        .catch((err) => {throw new Error("FS operation failed")});
    console.log(files);
};

await list();