const hasHtml = (str: string): boolean => {
  return /<\/?[a-z][\s\S]*>/i.test(str);
};

console.log(hasHtml('<html><div></div></html>'));
console.log(hasHtml('no html'));
console.log(hasHtml('no html<html></html>') );
