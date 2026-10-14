const fs = require('fs');
const path = require('path');

const dir = 'c:\\GitManage\\8vice\\resources\\js\\Pages';

function walk(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ignore files in Auth, Profile, etc.
    if (filePath.includes('Auth') || filePath.includes('Profile') || filePath.includes('Dashboard')) {
        return;
    }

    if (content.includes('<SeoHead')) {
        // already processed
        return;
    }

    let modified = false;

    // Check if it has <Head
    if (content.includes('<Head')) {
        // Add import SeoHead if not there
        if (!content.includes('import SeoHead')) {
            content = content.replace(/(import .* from '@inertiajs\/react';?)/, "$1\nimport SeoHead from '@/Components/SeoHead';");
        }

        // Replace <Head title="X" /> with <SeoHead title="X" />
        // Note: some might be <Head><title>X</title></Head>, handle basic cases
        content = content.replace(/<Head\s+title=(["'{`][^>]+)>/g, '<SeoHead title=$1 />');
        content = content.replace(/<Head\s+title=(["'{`][^>]+)\/>/g, '<SeoHead title=$1 />');
        
        // Remove old <Head> imports if we want, but it's fine to leave them.
        
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

walk(dir);
console.log('Done replacing Head with SeoHead');
