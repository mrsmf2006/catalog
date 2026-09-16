const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `const CatalogPage: React.FC<{ product: Product, pageNum: number }> = ({ product, pageNum }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'factory': return <Factory className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'bird': return <Bird className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'building': return <Building2 className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      default: return <Package className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <div `;

const replacement = `const CatalogPage: React.FC<{ product: Product, pageNum: number }> = ({ product, pageNum }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'factory': return <Factory className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'bird': return <Bird className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'building': return <Building2 className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      default: return <Package className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <div id={\`page-\${pageNum}\`} `;

content = content.replace(target, replacement);
fs.writeFileSync('src/App.tsx', content);
