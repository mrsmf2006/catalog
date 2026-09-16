async function compressImages() {
  const images = Array.from(document.images);
  for (let img of images) {
    if (img.src.startsWith('data:')) continue;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Target resolution (max width 600)
    let w = img.naturalWidth || img.width;
    let h = img.naturalHeight || img.height;
    const maxW = 600;
    if (w > maxW) {
      h = Math.round((h * maxW) / w);
      w = maxW;
    }
    
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);
    
    try {
      img.src = canvas.toDataURL('image/jpeg', 0.7);
    } catch (e) {
      console.error(e);
    }
  }
}
compressImages();
