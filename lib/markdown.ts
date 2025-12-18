// Simple markdown parser for blog posts
export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>')

  // Lists
  // Replace top-level "* " lines with <li>...</li>, then wrap consecutive <li> in <ul>
  html = html.replace(/^(\* .+(?:\n\* .+)*)/gm, (match) => {
    const items = match.split('\n').map(line => line.replace(/^\* (.+)/, '<li>$1</li>')).join('\n')
    return `<ul class="list-disc list-inside space-y-2 my-4">\n${items}\n</ul>`
  })

  // Paragraphs
  html = html.split('\n\n').map(para => {
    if (para.trim() && !para.match(/^<(h|ul|li)/)) {
      return `<p class="mb-4">${para.trim()}</p>`
    }
    return para
  }).join('\n')

  // Line breaks
  html = html.replace(/\n/g, '<br />')

  return html
}

