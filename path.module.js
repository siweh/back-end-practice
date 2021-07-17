const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'text.txt')

console.log(filePath);

//To be able to see what's in the text.txt file
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);