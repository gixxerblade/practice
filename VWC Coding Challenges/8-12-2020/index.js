//Write a JavaScript program that checks if there are any html tags in a string.

let checkTags = (str) => {
  let re = /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i;
  if (re.test(str)) {
    let tags = str.match(re);
    return `${tags} contains valid HTML`;
  } else {
    return `${str} does not contain any valid HTML`;
  }
};
console.log(checkTags("<lol><p>Okay here we go</p></lol>")); //true
console.log(checkTags("<lol>No way</lol>")); //false
console.log(checkTags("<hr/>Line  lol"));
console.log(checkTags("<br/>break"));
console.log(checkTags("<a href=\"www.somelink.com>LOL Don't click this</a>"));
