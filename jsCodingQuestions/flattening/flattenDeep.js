const person = {
  name: 'Ifzal',
  Age: 26,
  primaryAddress: {
    street: 'Kalyan Nagar',
    city: 'Bengaluru'
  },
  secondaryAddresses: [
    {
      street: 'HBR',
      city: 'Bengaluru'
    },
    {
      street: 'Gandhi Nagar',
      city: 'Delhi'
    }
  ]
};

function flattenDeep(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const value = obj[key];
    const newKey = parentKey 
      ? Array.isArray(obj) 
        ? `${parentKey}.[${key}]` 
        : `${parentKey}.${key}` 
      : key;

    if (typeof value === 'object' && value !== null) {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }

  return result;
}

const response = flattenDeep(person);
console.log(response);

// ✅ Output:
// {
//   name: 'Ifzal',
//   Age: 26,
//   'primaryAddress.street': 'Kalyan Nagar',
//   'primaryAddress.city': 'Bengaluru',
//   'secondaryAddresses.[0].street': 'HBR',
//   'secondaryAddresses.[0].city': 'Bengaluru',
//   'secondaryAddresses.[1].street': 'Gandhi Nagar',
//   'secondaryAddresses.[1].city': 'Delhi'
// }
