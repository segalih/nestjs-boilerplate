const fs = require('fs');
const path = require('path');

// Get the name argument from the command line
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');

if (nameIndex === -1 || !args[nameIndex + 1]) {
  console.error('Error: You must provide a DTO name with --name');
  process.exit(1);
}
const fullName = args[nameIndex + 1];
const dtoName =
  args[nameIndex + 1].split('/')[args[nameIndex + 1].split('/').length - 1];
const templatePath = path.join(__dirname, './template/dto.template.txt');
const outputPath = path.join(__dirname, `../src/dto/${fullName}.dto.ts`);

// Read the template file
fs.readFile(templatePath, 'utf8', (err, template) => {
  if (err) {
    console.error('Error reading template file:', err.message);
    process.exit(1);
  }

  // Replace placeholders with actual values
  const content = template.replace(/{{dtoName}}/g, dtoName);

  // Write the new DTO file
  fs.writeFile(outputPath, content, (err) => {
    if (err) {
      console.error('Error writing DTO file:', err.message);
      process.exit(1);
    }
    console.log(`DTO ${dtoName} created at ${outputPath}`);
  });
});
