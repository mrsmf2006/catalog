const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// The original contact link was:
// <a 
//   href="https://toyooran.com"
//   ...
// >
//   <Phone size={22} />
//   <span className="font-bold text-lg">تماس با ما</span>
// </button>

content = content.replace(
  /<span className="font-bold text-lg">تماس با ما<\/span>\s*<\/button>/g,
  '<span className="font-bold text-lg">تماس با ما</span>\n        </a>'
);

fs.writeFileSync('src/App.tsx', content);
