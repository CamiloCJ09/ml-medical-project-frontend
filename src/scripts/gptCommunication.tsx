import OpenAI from "openai";
// import dotenv from "dotenv";
// dotenv.config();

const openai = new OpenAI({
  apiKey: "string",
  dangerouslyAllowBrowser: true,
});

export default openai;
