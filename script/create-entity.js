const { execSync } = require('child_process');

// Get the name argument from the command line
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');

if (nameIndex === -1 || !args[nameIndex + 1]) {
  console.error('Error: You must provide an entity name with --name');
  process.exit(1);
}

const entityName = args[nameIndex + 1];

// Define the path where the entity should be created
const entityPath = `./src/database/entities/${entityName}`;

// Run the TypeORM command
try {
  execSync(`npx typeorm entity:create ${entityPath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error occurred while creating entity:', error.message);
  process.exit(1);
}
