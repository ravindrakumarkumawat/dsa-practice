function isSubset(a: Set<string>, b: DOMTokenList) {
  return Array.from(a).every((item) => b.contains(item));
}

export default function getElementsByClassName(element: Element, classNames: string) {
  const elements: Array<Element> = []
  const classNamesSet = new Set(classNames.trim().split(/\s+/))

  function traverse(el: Element) {
    if (el == null) return

    if(isSubset(classNamesSet, el.classList)) {
      elements.push(el)
    }
    
    for (let child of el.children) {
      traverse(child)
    }
  }

  for (let child of element.children) {
    traverse(child)
  }

  return elements
}

const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
  'text/html',
);

getElementsByClassName(doc.body, 'foo bar');
// [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.