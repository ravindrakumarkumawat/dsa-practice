export default function getElementsByTagName(element: Element, tagName: string) {
  const elements: Array<Element> = [];

  function traverse(el: Element) {
    if(el == null) return;

    if(el.tagName === tagName.toUpperCase()) {
      elements.push(el);
    }

    for(let child of el.children) {
      traverse(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }  
  return elements;
}

const doc = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  'text/html',
);

getElementsByTagName(doc.body, 'div');
// [div#foo, div#bar] <-- This is an array of elements.