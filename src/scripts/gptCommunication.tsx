import OpenAI from "openai";
// import dotenv from "dotenv";
// dotenv.config();

const openai = new OpenAI({
  apiKey: "poner toquen de api",
  dangerouslyAllowBrowser: true,
});

export default openai;
