import fs from 'fs';
const buffer = fs.readFileSync('partssever-site-products.csv');
const text = new TextDecoder('windows-1251').decode(buffer.slice(0, 5000));
console.log(text.split('\n')[0]);
