// Approach 1: ES6 modules
const globalMap = new Map();

export default {
  getInstance() {
    return globalMap;
  }
}

// Approach 2: ES6 modules with lazy instantiation
// let globalMap1: Map<any, any>;
let globalMap1;

const SingletonMap = {
  getInstance() {
    if (!globalMap1) {
      globalMap1 = new Map();
    }
    return globalMap1;
  }
};

// Approach 3: Immediately-invoked Function Expression (IIFE)
const GlobalMap = (function() {
  let instance;

  function createInstance() {
    return new Map();
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export { SingletonMap, GlobalMap };