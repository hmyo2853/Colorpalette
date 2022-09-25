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
  if (colorBg.style.color != "white") {
    colorBg.style.color = "white";
  }
  if (bosekBg.style.color != "white") {
    bosekBg.style.color = "white";
  }
  copyBtn.forEach((items) => items.style.visibility = "visible");
  colorBg.querySelector("h4").innerText = `${color}`;
  bosekBg.querySelector("h4").innerText = `${bosek}`;
}

// hex code copy button
function onCopyBtnClick(event) {
  const colorText = event.target.parentNode.querySelector("h4").innerText;
  navigator.clipboard
  .writeText(colorText)
  .then(
    success => alert(`색상 코드 ${colorText} 복사완료!`)
  );
}

// hex code change fc
function rgbToHex(rgba) {
  return `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
}

colorOption.forEach((items) => items.addEventListener("click", onColorClick));
copyBtn[0].addEventListener("click", onCopyBtnClick);
copyBtn[1].addEventListener("click", onCopyBtnClick);