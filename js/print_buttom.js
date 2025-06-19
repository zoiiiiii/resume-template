// 添加 printResume 函数以支持打印功能
function printResume() {
    window.print(); // 触发浏览器的打印功能
}

// 已存在的 downloadPDF 函数保持不变
function downloadPDF() {
    const pdfPath = './pdf/resume.pdf'; // PDF 文件路径
    const link = document.createElement('a'); // 创建隐藏的 <a> 标签
    link.href = pdfPath;
    link.download = 'resume.pdf'; // 设置下载文件名
    document.body.appendChild(link); // 将链接添加到 DOM
    link.click(); // 触发点击事件
    document.body.removeChild(link); // 移除临时链接
}