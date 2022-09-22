const colorOption = Array.from(
  document.getElementsByClassName("color-option")
)
const colorBg = document.getElementById("choice-color");
const bosekBg = document.getElementById("bosek-color");
const copyBtn = Array.from(document.getElementsByClassName("copy-btn"))

function onColorClick(event) {
  const color = rgbToHex(event.target.style.backgroundColor);
  const bosek = event.target.dataset.bosek;
  colorBg.style.backgroundColor = color;
  bosekBg.style.backgroundColor = bosek;
  copyBtn.forEach((items) => items.style.display = "inline");
  colorBg.querySelector("h4").innerText = `${color}`;
  bosekBg.querySelector("h4").innerText = `${bosek}`;
}

function onCopyBtnClick() {
  console.log("버튼 클릭했음!")
}

// hex code change fc
function rgbToHex(rgba) {
  return `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
}

colorOption.forEach((items) => items.addEventListener("click", onColorClick));
copyBtn[0].addEventListener("click", onCopyBtnClick);
copyBtn[1].addEventListener("click", onCopyBtnClick);