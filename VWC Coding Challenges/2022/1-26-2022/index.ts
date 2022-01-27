/**
 * Write a JavaScript program to remove HTML/XML tags from string.
 * Input
 * const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
 * console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));
 * Output
 * lorem ipsum
 */

const stripHTMLTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));

