function toggleMode() {
  // troca de normal para light
  const html = document.documentElement

  html.classList.toggle("light")

  // Troca de imagem

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/light.png")
  } else {
    img.setAttribute("src", "./assets/picofme.png")
  }
}
