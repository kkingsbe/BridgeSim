let joints = []
let members = []
let newJoint = drawNewJoint()
let canvas = document.getElementById("canvas")

init()


function init()
{
  canvas.appendChild(newJoint)
}

$(".viewport").mousemove((e) => {
  let y = e.pageY - $(".modeBar").height()

  newJoint.setAttribute("cx", e.pageX)
  newJoint.setAttribute("cy", y)
})

$(".viewport").click(() => {
  document.getElementById("newJointCircle").setAttribute("id", `joint-${joints.length}`)
  newJoint = drawNewJoint()
  canvas.appendChild(newJoint)
})

function makeSVG(tag, attrs) {
  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs)
      el.setAttribute(k, attrs[k]);
  return el;
}

function drawNewJoint()
{
  return makeSVG("circle", {id: "newJointCircle", cx: -100, cy: -100, r:7, stroke: 'black', 'stroke-width': 2, fill: 'red'})
}