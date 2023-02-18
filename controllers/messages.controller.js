import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getMessages(req, res) {
  res.render("messages", {
    title: "Msg to the universe",
    friend: "Death",
  });

  // const absolutePath = path.join(
  //   __dirname,
  //   "..",
  //   "public",
  //   "images",
  //   "skimountain.jpg"
  // );

  // res.sendFile(absolutePath);
}

export { getMessages };
