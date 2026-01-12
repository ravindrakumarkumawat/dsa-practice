interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function linkedListCombineTwoSorted(
  listA: ListNode | null,
  listB: ListNode | null,
): ListNode | null {
  let dummy: ListNode = { val: -1, next: null };
  let prev: ListNode = dummy;

  while (listA !== null && listB !== null) {
    if (listA.val <= listB.val) {
      prev.next = listA;
      listA = listA.next;
    } else {
      prev.next = listB;
      listB = listB.next;
    }
    prev = prev.next!;
  }

  if (listA !== null) {
    prev.next = listA;
  } else {
    prev.next = listB;
  }

  return dummy.next;
}
// TC: O(n + m) where n and m are lengths of listA and listB
// SC: O(1)


export function linkedListCombineTwoSortedRecrusion(
  listA: ListNode | null,
  listB: ListNode | null,
): ListNode | null {
  if (listA === null) {
    return listB;
  }

  if (listB === null) {
    return listA;
  }

  if (listA.val < listB.val) {
    listA.next = linkedListCombineTwoSortedRecrusion(listA.next, listB);
    return listA;
  }

  listB.next = linkedListCombineTwoSortedRecrusion(listA, listB.next);
  return listB;
}

// TC: O(n + m) where n and m are lengths of listA and listB
// SC: O(n + m) for recursion stack in worst case
