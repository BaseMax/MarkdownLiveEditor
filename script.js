const editor = CodeMirror(document.getElementById('editor'), {
    mode: 'markdown',
    lineNumbers: true,
    theme: 'monokai',
    lineWrapping: true,
});

const preview = document.getElementById('preview');

function updatePreview() {
    const markdownContent = editor.getValue();
    preview.innerHTML = marked.parse(markdownContent);
}

editor.on('change', updatePreview);

function syncScroll() {
    const editorScroll = editor.getScrollInfo();
    const previewScrollHeight = preview.scrollHeight - preview.clientHeight;
    const scrollRatio = editorScroll.top / (editorScroll.height - editorScroll.clientHeight);
    preview.scrollTop = scrollRatio * previewScrollHeight;
}

editor.on('scroll', syncScroll);

editor.setValue('# Welcome to the Markdown Editor\n\nType your markdown on the left, and see the rendered result here!');
updatePreview();
