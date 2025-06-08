const readlineSync = require("readline-sync");
const {askGemini} = require("./geminiClient");
const {generateFiles} = require("./generateFiles");

async function main() {
    const command = readlineSync.question("🧠 What should I build for you?\n> ");
    const folderName = "generated-app";

    const prompt = `
    You are a code generation assistant. 
    Generate a complete working app for this request: "${command}"

    Return only code in markdown blocks.
    Start each code block with a comment that has the file path. Example:

    \`\`\`
    // package.json
    {
    "name": "app"
    }
    \`\`\`

    No explanation, just pure code.
    `;

    console.log("Asking My Cursor...");
    const geminiOutput = await askGemini(prompt);
    console.log(geminiOutput);

    console.log("Generating files...");
    await generateFiles(geminiOutput, folderName);

    console.log(`Project generated in ./${folderName}`);
}

main();
