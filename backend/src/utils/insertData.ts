// used to upload sample data to the database

import fs from "fs";

const data = JSON.parse(fs.readFileSync("sample_data.json", "utf-8"));

console.log(data);
