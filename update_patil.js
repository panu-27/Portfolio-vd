const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Users/Pranav/Desktop/VD PATIL PORTFOLIO/src');
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const replaced = content.replace(/Patil/g, 'PATIL');
    if (content !== replaced) {
        fs.writeFileSync(file, replaced);
        console.log(`Updated ${file}`);
    }
});
