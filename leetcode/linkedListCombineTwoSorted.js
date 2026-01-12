export default function linkedListCombineTwoSorted(listA, listB) {
  let prev = { val: -1, next: null };
  let curr = prev

  while(listA !== null && listB !== null) {
    if(listA.val <= listB.val) {
      curr.next = listA
      listA = listA.next
    } else {
      curr.next = listB
      listB = listB.next
    }

    curr = curr.next
  }

  if (listA !== null) {
    curr.next = listA
  }

  if(listB !== null) {
    curr.next = listB
  }

  return prev.next
}

// TC: O(n + m)
// SC: O(1)