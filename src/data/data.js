import { readFileSync } from "fs";
import { read } from "xlsx/xlsx.mjs";

const buf = readFileSync("data.xlsx");
/* buf is a Buffer */
const workbook = read(buf);
console.log(workbook)