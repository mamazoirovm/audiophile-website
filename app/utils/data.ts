import { promises as fs } from "fs";
import { Product } from "../types/typeProduct";



export const getProducts = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: Product[] = JSON.parse(file);
  return data;
};

