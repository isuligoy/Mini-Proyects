const draggables = document.querySelectorAll(".draggable")

draggables.forEach(function (draggable) {
  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0

  draggable.addEventListener("mousedown", mouseDown, false)
  window.addEventListener("mouseup", mouseUp, false)

  function mouseDown(e) {
    e.preventDefault()
    posX = draggable.offsetLeft
    posY = draggable.offsetTop
    mouseX = e.clientX
    mouseY = e.clientY
    window.addEventListener("mousemove", moveElement, false)
  }

  function mouseUp() {
    window.removeEventListener("mousemove", moveElement, false)
  }

  function moveElement(e) {
    let deltaX = e.clientX - mouseX
    let deltaY = e.clientY - mouseY
    draggable.style.left = posX + deltaX + "px"
    draggable.style.top = posY + deltaY + "px"
  }
})
