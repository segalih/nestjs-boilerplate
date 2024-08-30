const { execSync } = require('child_process');

// Get the name argument from the command line
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');

if (nameIndex === -1 || !args[nameIndex + 1]) {
  console.error('Error: You must provide a module name with --name');
  process.exit(1);
}

const moduleName = args[nameIndex + 1];
const modulePath = `./modules/${moduleName}`;

// Run the NestJS CLI commands to generate the module, service, and controller
try {
  execSync(`npx nest g mo ${modulePath}`, { stdio: 'inherit' });
  execSync(`npx nest g s ${modulePath}`, { stdio: 'inherit' });
  execSync(`npx nest g co ${modulePath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error occurred while generating module:', error.message);
  process.exit(1);
}
