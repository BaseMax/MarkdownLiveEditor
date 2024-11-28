# Markdown Live Editor

A real-time Markdown editor with live preview support, featuring automatic scrolling synchronization and full support for right-to-left (RTL) languages. Built using CodeMirror and Marked.js, this editor is perfect for creating and rendering Markdown with a smooth, intuitive interface.

## Features

- Real-Time Preview: See rendered Markdown as you type.
- RTL Support: Automatically adjusts for languages like Persian, Arabic, and Hebrew.
- Scroll Syncing: Synchronized scrolling between the editor and the preview pane.
- CodeMirror Integration: A powerful editor with
  - Line numbers
  - Syntax highlighting for Markdown
  - Line wrapping
  - Themes (default: Monokai)
  - Lightweight and Fast: Built with minimal dependencies.

## Demo

Check out the live demo: [MarkdownLiveEditor](https://basemax.github.io/MarkdownLiveEditor/)

## Installation

Clone the repository:

```bash
git clone https://github.com/BaseMax/MarkdownLiveEditor.git
cd MarkdownLiveEditor
```

Open the `index.html` file in your browser to use the editor locally.

## Usage

- Start Typing: Enter your Markdown in the left column.
- Live Preview: See the rendered HTML in the right column.
- RTL Text: The editor and preview automatically handle RTL and LTR content.

## Example

Input (Editor):

```markdown
# Welcome to MarkdownLiveEditor

- This is a **Markdown** editor.
- Supports RTL: فارسی, عربی, עברית.
```

Output (Preview):

```
Welcome to MarkdownLiveEditor
This is a Markdown editor.
Supports RTL: فارسی, عربی, עברית.
```

## Development

To modify or enhance the editor:

Install dependencies:
  - CodeMirror
  - Marked.js
  - Update the script.js or styles.css files.

Key Files
  - `index.html`: Main page.
  - `script.js`: Editor logic and event handlers.
  - `styles.css`: Custom styling for the editor and preview pane.

## Contributions

Contributions are welcome! 

## License
This project is licensed under the GPL License.

## Author
@BaseMax (Max Base)

Copyright 2024, Max Base
