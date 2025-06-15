// https://leetcode.com/problems/implement-trie-prefix-tree

// 1. HashMap
// Prefix Tree (HashMap)
class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }
    
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return true;
    }
}

// TODO: ---------------------------------
// 1.1
var Trie = function() {
   this.children = new Map()
   this.endWord = false
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   let curr = this

    for(let char of word) {
        if(!curr.children.has(char)) curr.children.set(char, new Trie())
        curr = curr.children.get(char)
    }
    curr.endWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this
    for(let char of word) {
        if(!curr.children.has(char)) return false
        curr = curr.children.get(char)
    }

    return curr.endWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this
    for(let char of prefix) {
        if(!curr.children.has(char)) return false
        curr = curr.children.get(char)
    }

    return true
};


// TODO: ---------------------------------
// 2.
// LeetCode Problem: Implement Trie (Prefix Tree) 
// Prefix Tree (Array)
class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                cur.children[i] = new TrieNode();
            }
            cur = cur.children[i];
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return true;
    }
}