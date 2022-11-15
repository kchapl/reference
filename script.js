/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

const insertP = (parent, text) => {
  const txtNode = document.createTextNode(text);
  const p = document.createElement("p");
  p.appendChild(txtNode);
  parent.appendChild(p);
};

const toBeaufort = (kmph) => {
  if (kmph < 2)
    return {
      number: 0,
      description: "Calm",
      range: "< 2 km/h",
      conditions: "Smoke rises vertically.",
    };
  if (kmph < 6)
    return {
      number: 1,
      description: "Light air",
      range: "2-5 km/h",
      conditions: "Direction shown by smoke drift but not by wind vanes.",
    };
  if (kmph < 12)
    return {
      number: 2,
      description: "Light breeze",
      range: "6-11 km/h",
      conditions: "Wind felt on face; leaves rustle; wind vane moved by wind.",
    };
  if (kmph < 20)
    return {
      number: 3,
      description: "Gentle breeze",
      range: "12-19 km/h",
      conditions:
        "Leaves and small twigs in constant motion; light flags extended.",
    };
  if (kmph < 29)
    return {
      number: 4,
      description: "Moderate breeze",
      range: "20-28 km/h",
      conditions: "Raises dust and loose paper; small branches moved.",
    };
  if (kmph < 39)
    return {
      number: 5,
      description: "Fresh breeze",
      range: "29-38 km/h",
      conditions:
        "Small trees in leaf begin to sway; crested wavelets form on inland waters.",
    };
  if (kmph < 50)
    return {
      number: 6,
      description: "Strong breeze",
      range: "39-49 km/h",
      conditions:
        "Large branches in motion; whistling heard in telegraph wires; umbrellas used with difficulty.",
    };
  if (kmph < 62)
    return {
      number: 7,
      description: "Near gale",
      range: "50-61 km/h",
      conditions:
        "Whole trees in motion; inconvenience felt when walking against the wind.",
    };
  if (kmph < 75)
    return {
      number: 8,
      description: "Gale",
      range: "62-74 km/h",
      conditions: "Twigs break off trees; generally impedes progress.",
    };
  if (kmph < 89)
    return {
      number: 9,
      description: "Strong gale",
      range: "75-88 km/h",
      conditions: "Slight structural damage (chimney pots and slates removed).",
    };
  if (kmph < 103)
    return {
      number: 10,
      description: "Storm",
      range: "89-102 km/h",
      conditions:
        "Seldom experienced inland; trees uprooted; considerable structural damage.",
    };
  if (kmph < 118)
    return {
      number: 11,
      description: "Violent storm",
      range: "103-117 km/h",
      conditions: "Very rarely experienced; accompanied by widespread damage.",
    };
  return {
    number: 12,
    description: "Hurricane",
    range: "≥ 118 km/h",
    conditions: "Devastation.",
  };
};

const showBeaufort = (event) => {
  event.preventDefault();
  const speed = event.target.children[0].value;
  const result = toBeaufort(speed);
  const div = document.getElementById("beaufortResult");
  div.innerHTML = "";
  insertP(div, result.number);
  insertP(div, result.range);
  insertP(div, result.description);
  insertP(div, result.conditions);
};

const beaufortForm = document.getElementById("beaufortForm");
beaufortForm.addEventListener("submit", showBeaufort);

const alphaChars = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliette",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
};

const toAlphabet = (plainText) => {
  const encoded = [...plainText.toLowerCase()].map((c) =>
    alphaChars[c] ? alphaChars[c] : c
  );
  return encoded.join(" ");
};

const showAlphabet = (event) => {
  event.preventDefault();
  const plainText = event.target.children[0].value;
  const result = toAlphabet(plainText);
  const div = document.getElementById("alphabetResult");
  div.innerHTML = "";
  insertP(div, result);
};

const alphabetForm = document.getElementById("alphabetForm");
alphabetForm.addEventListener("submit", showAlphabet);

const morseCode = {
  a: ". -",
  b: "- . . .",
  c: "- . - .",
  d: "- . .",
  e: ".",
  f: ". . - .",
  g: "- - .",
  h: ". . . .",
  i: ". .",
  j: ". - - -",
  k: "- . -",
  l: ". - . .",
  m: "- -",
  n: "- .",
  o: "- - -",
  p: ". - - .",
  q: "- - . -",
  r: ". - .",
  s: ". . .",
  t: "-",
  u: ". . -",
  v: ". . . -",
  w: ". - -",
  x: "- . . -",
  y: "- . - -",
  z: "- - . .",
  0: "- - - - -",
  1: ". - - - -",
  2: ". . - - -",
  3: ". . . - -",
  4: ". . . . -",
  5: ". . . . .",
  6: "- . . . .",
  7: "- - . . .",
  8: "- - - . .",
  9: "- - - - .",
};

const toMorse = (plainText) => {
  const encoded = [...plainText.toLowerCase()].map((c) =>
    morseCode[c] ? morseCode[c] : c
  );
  return encoded;
};

const showMorse = (event) => {
  event.preventDefault();
  const plainText = event.target.children[0].value;
  const result = toMorse(plainText);
  const div = document.getElementById("morseResult");
  div.innerHTML = "";
  insertP(div, result);
};

const morseForm = document.getElementById("morseForm");
morseForm.addEventListener("submit", showMorse);
