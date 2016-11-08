#!/usr/bin/env node

'use strict';

console.log('\njamovi compiler\n');

const path = require('path');
const fs = require('fs');
const browserify = require('browserify');
const yaml = require('js-yaml');
const AdmZip = require('adm-zip');

const compiler = require('./compiler');
const uicompiler = require('./uicompiler');
const compileR = require('./compilerr');
const parseR = require('./parser');
const utils = require('./utils');

let srcDir = '.';
if (process.argv.length > 2)
    srcDir = process.argv[2];
srcDir = path.resolve(srcDir);

let defDir = path.join(srcDir, 'jamovi');
let rDir = path.join(srcDir, 'R');
let uiDir = path.join(srcDir, 'jamovi/ui');

if ( ! utils.exists(defDir))
    fs.mkdirSync(defDir);

if ( ! utils.exists(rDir))
    fs.mkdirSync(rDir);

if ( ! utils.exists(uiDir))
    fs.mkdirSync(uiDir);

let files = fs.readdirSync(defDir);
let packageInfo = parseR(srcDir);

let buildingModule = false;
let outDir;
let modDir;
let uiOutDir;
let yamlOutDir;
if (process.argv.length > 3) {

    outDir = path.resolve(process.argv[3]);
    modDir = path.join(outDir, packageInfo.name);
    if ( ! utils.exists(modDir))
        fs.mkdirSync(modDir);

    uiOutDir = path.join(modDir, 'ui');
    if ( ! utils.exists(uiOutDir))
        fs.mkdirSync(uiOutDir);

    yamlOutDir = path.join(modDir, 'analyses');
    if ( ! utils.exists(yamlOutDir))
        fs.mkdirSync(yamlOutDir);

    buildingModule = true;
}

let waits = [ ]

for (let file of files) {

    if (file.endsWith('.a.yaml')) {
        let analysisPath = path.join(defDir, file);
        let basename = path.basename(analysisPath, '.a.yaml');
        let resultsPath = path.join(defDir, basename + '.r.yaml');
        let hOutPath = path.join(rDir, basename + '.h.R');
        let bOutPath = path.join(rDir, basename + '.b.R');
        let sOutPath = path.join(uiDir, basename + '.src.js');
        let oOutPath = path.join(uiDir, basename + '.options.js');

        let hTemplPath = path.join(__dirname, 'header.template');
        let bTemplPath = path.join(__dirname, 'body.template');
        let oTemplPath = path.join(__dirname, 'options.template');
        let sTemplPath = path.join(__dirname, 'src.template');

        compiler(packageInfo.name, analysisPath, resultsPath, hTemplPath, hOutPath);
        console.log('wrote: ' + path.basename(hOutPath));

        if ( ! utils.exists(bOutPath)) {
            compiler(packageInfo.name, analysisPath, resultsPath, bTemplPath, bOutPath);
            console.log('wrote: ' + path.basename(bOutPath));
        }

        compiler(packageInfo.name, analysisPath, resultsPath, oTemplPath, oOutPath);
        console.log('wrote: ' + path.basename(oOutPath));

        if ( ! utils.exists(sOutPath)) {
            uicompiler(analysisPath, sTemplPath, sOutPath);
            console.log('wrote: ' + path.basename(sOutPath));
        }

        if (buildingModule) {

            let uOutPath = path.join(uiOutDir, basename + '.js');

            waits.push(Promise.resolve().then(() => {
                let stream = fs.createWriteStream(uOutPath);
                return new Promise((resolve) => {
                    browserify(sOutPath, { standalone: 'module' })
                        .bundle().pipe(stream);
                    stream.on('close', resolve);
                });
            }));

            let content = fs.readFileSync(analysisPath);
            fs.writeFileSync(path.join(yamlOutDir, basename + '.a.yaml'), content);

            if (utils.exists(resultsPath)) {
                content = fs.readFileSync(resultsPath);
                fs.writeFileSync(path.join(yamlOutDir, basename + '.r.yaml'), content);
            }

            console.log('wrote: ' + path.basename(uOutPath));
        }

        let content = fs.readFileSync(analysisPath, 'utf-8');
        let analysis = yaml.safeLoad(content);
        let aObj = {
            title: ('title' in analysis ? analysis.title : analyis.name),
            name: analysis.name,
            ns: packageInfo.name,
            group: ('group' in analysis ? analysis.group : packageInfo.name),
            description: ('description' in analysis ? analysis.description : null),
        };

        if ('subtitle' in analysis)
            aObj.subtitle = analysis.subtitle;
        if ('subgroup' in analysis)
            aObj.subgroup = analysis.subgroup;

        packageInfo.analyses.push(aObj);
    }
}

Promise.all(waits).then(() => {  // wait for all the browserifies to finish

    if (buildingModule) {

        let modDir = path.join(path.resolve(process.argv[3]), packageInfo.name);
        if ( ! utils.exists(modDir))
            fs.mkdirSync(modDir);

        let indexPath = path.join(defDir, '0000.yaml');
        let content;
        if (utils.exists(indexPath))
            content = fs.readFileSync(indexPath);
        else
            content = yaml.safeDump(packageInfo);
        fs.writeFileSync(path.join(modDir, 'jamovi.yaml'), content);

        compileR(srcDir, modDir);

        let zipPath = path.join(outDir, packageInfo.name + '.jmo');
        let zip = new AdmZip();
        zip.addLocalFolder(modDir, packageInfo.name);
        zip.writeZip(zipPath);
    }
}).catch(e => console.log(e));
