import path from "path";

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// Get the path delimiter based on the current OS environment
const platSpec: string = path.delimiter;
console.log(platSpec);

// Get the path format
const pathformat: string = path.format({
    dir: 'pathjoin',
    root: 'pathjoin',
    base: 'pathjoin',
    name: 'pathjoin',
    ext: 'pathjoin',
});
console.log(pathformat);

// Get the parent folder directory
const parentDir: string = path.dirname(__dirname);
console.log(parentDir);
