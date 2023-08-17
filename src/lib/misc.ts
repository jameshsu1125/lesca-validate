export function isEnglish(s: String) {
  let i, charCode;
  let result = true;
  for (i = s.length; i--; ) {
    charCode = s.charCodeAt(i);
    if (charCode < 65 || charCode > 122) result = false;
  }
  return result;
}

export function isNumber(s: String) {
  let i, charCode;
  let result = true;
  for (i = s.length; i--; ) {
    charCode = s.charCodeAt(i);
    if (charCode < 48 || charCode > 57) result = false;
  }
  return result;
}
