import dotenv from "dotenv";

dotenv.config({
  path: `./e2e/config/.env.${process.env.TEST_ENV}`,
});

console.log(process.env.NEETO_CI_JOB_ID);
console.log(process.env.TAG);