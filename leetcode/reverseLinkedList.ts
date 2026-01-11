interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function reverseLinkedList(
  head: ListNode | null,
): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const nextTemp: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}
// TC: O(n)
// SC: O(1)

export function reverseLinkedListRecur(
  head: ListNode | null,
): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const p: ListNode | null = reverseLinkedList(head.next);

  head.next.next = head;

  head.next = null;

  return p;
}

// TC: O(n)
// SC: O(n) due to recursion stack

