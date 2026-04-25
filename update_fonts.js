const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Pranav/Desktop/VD PATIL PORTFOLIO/src';

function walk(dir, done) {
    let results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if (file.endsWith('.js') || file.endsWith('.css')) results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
}

walk(dir, function (err, results) {
    if (err) throw err;
    results.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        content = content.replace(/@import url\(['"]https:\/\/fonts\.googleapis\.com.*?['"]\);\n?/g, '');

        // Replace font definitions
        content = content.replace(/'Bebas Neue'/g, 'var(--font-bebas)');
        content = content.replace(/'Syne'/g, 'var(--font-syne)');
        content = content.replace(/'Montserrat'/g, 'var(--font-mont)');
        content = content.replace(/'Barlow'/g, 'var(--font-barlow)');
        content = content.replace(/'Barlow Condensed'/g, 'var(--font-barlow-cond)');

        if (content !== original) {
            console.log('Updated', file);
            fs.writeFileSync(file, content);
        }
    });
});
