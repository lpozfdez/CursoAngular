const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAXBOX_KEY']}"
};
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContent );
