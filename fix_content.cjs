const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf-8');

const target = `    return {
    ...base,
    id: idNum.toString(),
    title: title,
    model: \`مدل \${idNum}\`,
    imageUrl: imageUrl,
  };`;

const replacement = `    // Provide dynamic description and features based on the title to avoid repetitive mock data
    const desc = \`\${title} یکی از پیشرفته‌ترین و کارآمدترین تجهیزات ارائه‌شده در طیوران صنعت پویا است. این محصول با استفاده از فناوری‌های روز دنیا طراحی شده و می‌تواند نیازهای تخصصی سالن‌های مرغداری، گلخانه‌ها و تاسیسات صنعتی را به بهترین شکل برآورده کند. کیفیت ساخت بالا و طول عمر طولانی از ویژگی‌های بارز این محصول به شمار می‌رود.\`;
    
    const dynamicFeatures = [
      'بهره‌گیری از تکنولوژی‌های پیشرفته در طراحی',
      'کیفیت ساخت ممتاز و طول عمر بالا',
      'کاهش هزینه‌های نگهداری و مصرف انرژی',
      'پشتیبانی و خدمات پس از فروش مطمئن',
      'تطابق با استانداردهای صنعتی روز دنیا'
    ];
    
    return {
    ...base,
    id: idNum.toString(),
    title: title,
    model: \`مدل \${idNum}\`,
    imageUrl: imageUrl,
    description: desc,
    features: dynamicFeatures,
  };`;

// Let's use a regex replace in case spacing is different
content = content.replace(/return \{\s*\.\.\.base,\s*id: idNum\.toString\(\),\s*title: title,\s*model: `مدل \$\{idNum\}`,\s*imageUrl: imageUrl,\s*\};/m, replacement);

fs.writeFileSync('src/data.ts', content);
