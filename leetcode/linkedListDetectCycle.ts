interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function linkedListDetectCycle(head: ListNode | null): boolean {
  const nodesSeen = new Set<ListNode>();
  let current = head;

  while (current !== null) {
    if (nodesSeen.has(current)) {
      return true;
    }

    nodesSeen.add(current);

    current = current.next;
  }

  return false;
}

export function linkedListDetectCycleSlowAndFast(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === null) {
      return false;
    }
    slow = slow.next;

    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

