import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';


if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });


const filesToCopy = [
    { source: 'manifest.json', dest: 'manifest.json' },
    
    { source: 'src/background/popup/popup.html', dest: 'popup.html' },
    { source: 'src/background/popup/popup.js', dest: 'popup.js' }, 
    { source: 'src/background/popup/popup.css', dest: 'styles.css' } 
];


for (const file of filesToCopy) {
    if (fs.existsSync(file.source)) {
        fs.copyFileSync(file.source, path.join(dist, file.dest));
    } else {
        console.warn(`Aviso: Arquivo de origem não encontrado: ${file.source}`);
    }
}



const zipPath = path.join(dist, 'extension.zip');
const output = fs.createWriteStream(zipPath);

const archive = archiver('zip', { zlib: { level: 9 } });

await new Promise((res, rej) => {
    output.on('close', res);
    archive.on('error', rej);
    archive.pipe(output);
    archive.glob('**/*', {
        cwd: dist,
        ignore: ['extension.zip']
    });
    archive.finalize();
});

console.log("dist/ pronto e extensão gerada com sucesso!");
