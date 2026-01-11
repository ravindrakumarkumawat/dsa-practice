export default function reverseLinkedList(head) {
  let prev = null
  let curr = head

  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

// TC: O(n)
// SC: O(1)