/**
 * Копирование статичных файлов после сборки tsc,
 * по умолчанию ничего не копируется
 */

const path = require('path');
const { readdirSync, statSync, copyFileSync, lstatSync, existsSync, mkdirSync } = require('fs');

function walkDirSync(dir, name, dirList) {
    const files = readdirSync(dir);

    dirList = dirList || [];

    files.forEach(file => {
        if (statSync(`${dir}/${file}`).isDirectory() && file !== 'node_modules') {
            if (name.includes(file)) {
                dirList.push(path.resolve(`${dir}/${file}`));
            } else {
                dirList = walkDirSync(path.resolve(`${dir}/${file}`), name, dirList);
            }
        }
    });

    return dirList;
}

function walkFileSync(dir, fileList) {
    const files = readdirSync(dir);

    fileList = fileList || [];

    files.forEach(file => {
        if (statSync(`${dir}/${file}`).isDirectory()) {
            fileList.push(path.resolve(`${dir}/${file}`));
            fileList = walkFileSync(path.resolve(`${dir}/${file}`), fileList);
        } else {
            fileList.push(path.resolve(`${dir}/${file}`));
        }
    });

    return fileList;
}

function copyStatic(files) {
    files.forEach(file => {
        const copyFiles = walkFileSync(file);

        copyFiles.unshift(file);

        copyFiles.forEach(item => {
            const relativePath = path.relative(path.resolve(), item);
            const distPath = relativePath.replace(/.+?\//, 'dist/');

            if (lstatSync(relativePath).isDirectory() && !existsSync(path.resolve(distPath))) {
                mkdirSync(path.resolve(distPath));
            } else {
                copyFileSync(path.resolve(relativePath), path.resolve(distPath));
            }
        });
    });
}

copyStatic(walkDirSync(path.resolve('src'), ['static', 'variables']));
