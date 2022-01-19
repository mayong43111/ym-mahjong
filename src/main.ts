//import * as fs from 'fs';
const fs = require('fs');

const test_01_path = './test_data/test_01.jpg';
const test_01_step01_path = './test_data/test_01_step01.jpg';

const file = fs.readFileSync(test_01_path, 'binary');

fs.writeFileSync(test_01_step01_path, file, 'binary');

