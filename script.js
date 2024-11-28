const editor = CodeMirror(document.getElementById('editor'), {
    mode: 'markdown',
    lineNumbers: true,
    theme: 'monokai',
    lineWrapping: true,
    direction: 'rtl',
});

const preview = document.getElementById('preview');

function detectDirection(text) {
    const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
    return rtlChars.test(text) ? 'rtl' : 'ltr';
}

function updatePreview() {
    const markdownContent = editor.getValue();
    const renderedHTML = marked.parse(markdownContent);

    const direction = detectDirection(markdownContent);
    preview.style.direction = direction;
    preview.innerHTML = renderedHTML;
}

function syncScroll() {
    const editorScroll = editor.getScrollInfo();
    const previewScrollHeight = preview.scrollHeight - preview.clientHeight;
    const scrollRatio = editorScroll.top / (editorScroll.height - editorScroll.clientHeight);
    preview.scrollTop = scrollRatio * previewScrollHeight;
}

editor.on('change', updatePreview);
editor.on('scroll', syncScroll);

editor.setValue('# Welcome to the Markdown Editor\n\nType your markdown on the left, and see the rendered result here!');
updatePreview();
