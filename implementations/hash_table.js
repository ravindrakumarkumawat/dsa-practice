// 1. JavaScript implementation of Hashtable using Map

const ht2 = new Map();

// Insert key-value pairs
ht2.set(123, 432);
ht2.set(12, 2345);
ht2.set(15, 5643);
ht.set(3, 321);

// Remove key 12
ht2.delete(12);

// Print the Map
console.log(Object.fromEntries(ht2));




//2. Without map or object
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  // Simple hash function for integer keys
  hash(key) {
    return key % this.size;
  }

  // Insert or update key-value pair
  put(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update value if key exists
        return;
      }
    }

    bucket.push([key, value]); // Insert new key-value pair
  }

  // Remove key
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the key-value pair
        return;
      }
    }
  }

  // Get value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined; // Key not found
  }

  // Print the entire hash table
  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i].length) {
        console.log(`Index ${i}:`, this.table[i]);
      }
    }
  }
}

// Example usage
const ht = new HashTable();

ht.put(123, 432);
ht.put(123, 433);
ht.put(12, 2345);
ht.put(15, 5643);
ht.put(3, 321);
ht.remove(12);
ht.print();

// 3. Through LL implemenation
// Node for LinkedList
class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

// LinkedList to handle collisions (separate chaining)
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert or update key-value pair
  insert(key, value) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        current.value = value; // Update if key exists
        return;
      }
      current = current.next;
    }

    const newNode = new Node(key, value, this.head);
    this.head = newNode; // Insert at head
  }

  // Remove key
  remove(key) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  // Find value by key
  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return undefined;
  }

  // Convert linked list to array of key-value pairs for printing
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push([current.key, current.value]);
      current = current.next;
    }
    return result;
  }
}

// HashTable using LinkedLists for buckets
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    return key % this.size; // Simple hash function for integers
  }

  put(key, value) {
    const index = this.hash(key);
    this.buckets[index].insert(key, value);
  }

  remove(key) {
    const index = this.hash(key);
    this.buckets[index].remove(key);
  }

  get(key) {
    const index = this.hash(key);
    return this.buckets[index].find(key);
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      const entries = this.buckets[i].toArray();
      if (entries.length > 0) {
        console.log(`Index ${i}:`, entries);
      }
    }
  }
}

// Example usage
const ht3 = new HashTable();

ht3.put(123, 432);
ht3.put(12, 2345);
ht3.put(15, 5643);
ht3.put(3, 321);

ht3.remove(12);

ht3.print();


// Applications of Hash Table
// Hash tables are implemented where
// 1.) constant time lookup and insertion is required
// 2.) cryptographic applications
// 3.) indexing data is required