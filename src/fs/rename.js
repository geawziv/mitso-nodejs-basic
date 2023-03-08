import fs from "fs/promises";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
    let data = await fs.readFile(`${dirname}files/wrongFilename.txt`)
        .catch((err) => {throw new Error("FS operation failed")});

    await fs.readFile("src/fs/files/properFilename.md")
        .catch((_err) => {})
        .then((res) => {
            if (res) { throw new Error("FS operation failed") }
        });

    await fs.writeFile(`${dirname}files/properFilename.md`, data)
        .catch((err) => { throw new Error("FS operation failed") });
};  

await rename();