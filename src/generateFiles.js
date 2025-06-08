const fs = require("fs-extra");
const path = require("path");

async function generateFiles(output, folderName) {
    const folderPath = path.resolve(process.cwd(), folderName);
    await fs.ensureDir(folderPath);

    const codeRegex = /```(?:[a-zA-Z0-9]*\n)?(?:\/\/|\/\*|<!--)\s*([^*\n\r]+?)\s*(?:\*\/|-->)?\n([\s\S]*?)```/g;

    while ((match = codeRegex.exec(output)) !== null) {
        const relativeFilePath = match[1].trim();
        const fileContent = match[2];

        const fullPath = path.join(folderPath, relativeFilePath);
        await fs.ensureDir(path.dirname(fullPath));
        await fs.writeFile(fullPath, fileContent);
        console.log(`✅ Created: ${relativeFilePath}`);
    }
}

module.exports = { generateFiles };