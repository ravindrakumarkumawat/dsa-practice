export default function linkedListDetectCycle(head) {
  if (head === null) return false

  let slow = head
  let fast = head.next

  while(fast !== null && fast.next !== null) {
    if(slow == null) return false

    slow = slow.next
    fast = fast.next.next

    if(slow === fast) return true
  }

  return false
}