
// https://leetcode.com/problems/design-add-and-search-words-data-structure/

var WordDictionary = function() {
    this.children = new Map()
    this.endWord = false
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this
    for(let char of word) {
        if(!curr.children.has(char)) curr.children.set(char, new WordDictionary())
        curr = curr.children.get(char)
    }
    curr.endWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (node, i) => {
        if(i === word.length) return node.endWord
        const char = word[i]
        if(char === '.') {
            for(let child of node.children.values()) {
                if(dfs(child, i + 1)) return true
            }
            return false
        } else {
            if(!node.children.has(char)) return false
            return dfs(node.children.get(char), i+1)
        }
    }
    return dfs(this, 0)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */