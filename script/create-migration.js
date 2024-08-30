const { execSync } = require('child_process');

// Get the name argument from the command line
const args = process.argv.slice(2);
const nameIndex = args.indexOf('--name');

if (nameIndex === -1 || !args[nameIndex + 1]) {
  console.error('Error: You must provide a migration name with --name');
  process.exit(1);
}

const migrationName = args[nameIndex + 1];

// Run the TypeORM command
execSync(
  `npx typeorm migration:create ./src/database/migrations/${migrationName}`,
  {
    stdio: 'inherit',
  },
);
