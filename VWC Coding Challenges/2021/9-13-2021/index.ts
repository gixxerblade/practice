const isBrowser = () => {
  if (typeof window !== 'undefined') {
    return true;
  }
  return false;
};
console.log(isBrowser());
