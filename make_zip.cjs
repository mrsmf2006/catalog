const AdmZip = require('adm-zip');
const zip = new AdmZip();
zip.addLocalFolder('.', '', (filename) => {
  return !filename.includes('node_modules') && !filename.includes('dist') && !filename.includes('full_source_code.tar.gz');
});
zip.writeZip('public/SourceCode_Full.zip');
console.log('Zip created');
