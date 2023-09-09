export const romanToInt = (s: string): number => {
  const I = 'I';
  const V = 'V';
  const X = 'X';
  const L = 'L';
  const C = 'C';
  const D = 'D';
  const M = 'M';

  let some = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == I) {
      if (s[i + 1] == V) {
        some += 4;
        i += 1;
        continue;
      }
      if (s[i + 1] == X) {
        some += 9;
        i += 1;
        continue;
      }
      some += 1;
    } else if (s[i] == X) {
      if (s[i + 1] == L) {
        some += 40;
        i += 1;
        continue;
      }
      if (s[i + 1] == C) {
        some += 90;
        i += 1;
        continue;
      }
      some += 10;
    } else if (s[i] == C) {
      if (s[i + 1] == D) {
        some += 400;
        i += 1;
        continue;
      }
      if (s[i + 1] == M) {
        some += 900;
        i += 1;
        continue;
      }
      some += 100;
    } else {
      if (s[i] == V) {
        some += 5;
      } else if (s[i] == L) {
        some += 50;
      } else if (s[i] == D) {
        some += 500;
      } else if (s[i] == M) {
        console.log(i);
        some += 1000;
      }
    }
  }
  return some;
};

console.log(romanToInt('MCMXCIV'));
