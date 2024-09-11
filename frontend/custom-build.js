const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');


const crmAppPath = path.resolve(__dirname, '../../crm/frontend');
const overrideSrcPath = path.resolve(__dirname, './src');
const overrideFilesPath = path.resolve(__dirname, './src_override');

console.log('Starting  :  Copying original src.');
fs.copySync(path.join(crmAppPath, 'src'), overrideSrcPath);
console.log('Completed :  Copying original src.');

console.log('Starting  :  Overriding src.');
fs.copySync(overrideFilesPath, overrideSrcPath);
console.log('Completed :  Overriding src.');

execSync('yarn install', { stdio: 'inherit' });
