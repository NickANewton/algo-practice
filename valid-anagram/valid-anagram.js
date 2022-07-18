// Solution 1: chaining methods is not the best solution due to effiency

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sArr = s.split('').sort();
  let tArr = t.split('').sort();
  let i = 0;
  while (i < s.length) {
    if (sArr[i] !== tArr[i]) return false;
    i++;
  }
  return true;
};

// Solution 2:

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap.hasOwnProperty(s[i])) {
      sMap[s[i]]++
    } else {
      sMap[s[i]] = 1;
    }
    if (tMap.hasOwnProperty(t[i])) {
      tMap[t[i]]++
    } else {
      tMap[t[i]] = 1;
    }
  }
  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) {
      return false;
    }
  }
  return true;
};
