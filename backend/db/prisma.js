import { PrismaClient } from "@prisma/client";
import { isDemoMode } from "../config/demo.js";

let prisma = null;

if (isDemoMode) {
  console.warn("[demo] Prisma disabled because DEMO_MODE is active.");
} else {
  prisma = new PrismaClient();
  prisma
    .$connect()
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log({ msg: "Error connecting to db", err });
    });
}

export { prisma };