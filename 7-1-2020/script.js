const line1 = `# Alcatra picanha pork chop`;
const line2 = `## pancetta ball tip swine shank flank beef ribs doner pork.`;
const line3 = `*Pancetta:* filet mignon beef rump, turkey boudin pastrami chicken leberkas flank kevin drumstick salami shankle.`;
const line4 = `Flank meatloaf rump chislic tongue ball tip. Ribeye turkey pastrami tail kielbasa ball tip jerky chislic t-bone ground round chuck flank brisket.`;

let markDownConverter = (string, el) => {
  let element = document.querySelector(el);
  let italic = /\*(.*?)\*/g;
  if (string.startsWith("##")) {
    let newStr = string.substring(2);
    element.innerHTML = `<h2>${newStr}</h2>`;
    return element;
  } else if (string.startsWith("#")) {
    let newStr = string.substring(1);
    element.innerHTML = `<h1>${newStr}</h1>`;
    return element;
  } else if (string.match(italic)) {
    let newStr = string.replace(italic, `<i>$1</i>`);
    element.innerHTML = `<div>${newStr}</div>`;
  } else {
    element.innerHTML = `<div>${string}</div>`;
  }
};
markDownConverter(line1, ".line1");
markDownConverter(line2, ".line2");
markDownConverter(line3, ".line3");
markDownConverter(line4, ".line4");
