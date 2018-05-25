import fs from "fs";
import signale from "signale";

const init = async () => {
  try {
    signale.time("Application");

    signale.pending("Loading files...");
    let items = await fs.readdirSync(
      "Icons",
      { encoding: "utf8" },
      (err, files) => {
        return files;
      }
    );

    if (items.length > 0) signale.success(`${items.length} files loaded...`);
    else {
      signale.error(
        "There are no files inside the directory or probably you already did the task."
      );
      return;
    }

    signale.pending("Renaming and moving files to IconsOut...");

    // Check if folder exists
    if (!fs.existsSync("IconsOut")) {
      fs.mkdirSync("IconsOut");
      signale.success("IconsOut created successfully.");
    }

    // iterate over list
    for (let item of items) {
      let itemName = Math.max.apply(null, item.match(/\d+/g).map(Number));

      fs.renameSync(`Icons/${item}`, `IconsOut/${itemName}.png`, err => {});
    }

    signale.timeEnd("Application");
    signale.success("The task have been completed!");
  } catch (e) {
    signale.fatal(e);
  }
};

(async () => {
  await init();
})();
