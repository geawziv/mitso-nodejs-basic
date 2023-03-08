import fs from "fs/promises";
import url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
    await fs.writeFile(`${dirname}files/fresh.txt`, "I am fresh and young")
          .catch((err) => {throw new Error("FS operation failed")})
};

await create();