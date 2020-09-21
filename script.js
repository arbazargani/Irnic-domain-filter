var objects = document.getElementsByTagName('tt')

for (const [key, value] of Object.entries(objects)) {
  if (value.innerText.length < 8) {
    console.log(`${key}: ${value.innerText}: ${value.innerText.length}`);
  }
}
