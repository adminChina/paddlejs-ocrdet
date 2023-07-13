module.exports = function (source) {
  // const lines = source.split('\n');
  // lines.splice(2, 0, 'var Module = {};');
  // source = lines.join('\n');
  if (source.includes("root.cv") && source.includes("opencv_ocr")) {
    const idx = source.indexOf("if(typeof Module==='undefined')Module={}");
    if (idx > -1) {
      // 在idx位置插入var Module = {};
      source = source.slice(0, idx) + "var Module = {};" + source.slice(idx);
    }
  }

  return source;
};
