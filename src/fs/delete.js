import fs from "fs/promises";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
    await fs.unlink(`${dirname}files/fileToRemove.txt"`)
        .catch((err) => {
            throw new Error("FS operation Failed");
        })
};

await remove();