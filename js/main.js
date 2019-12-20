let joints = []
let members = []
let newJoint = drawNewJoint()
let newMember;
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

  if(typeof(newMember) !== "undefined")
  {
    newMember.setAttribute("x2", e.pageX)
    newMember.setAttribute("y2", y)
  }
})

$(".viewport").click(() => {
  document.getElementById("newJointCircle").setAttribute("id", `joint-${joints.length}`)
  joints.push(newJoint)
  newJoint = drawNewJoint()
  newMember = drawNewMember()
  console.log(newMember)
  canvas.appendChild(newJoint)
  canvas.appendChild(newMember)
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

function drawNewMember()
{
  return makeSVG("line", {id: "newMember", x1: joints[joints.length-1].getAttribute("cx"), y1: joints[joints.length-1].getAttribute("cy"), x2: "-100", y2: "-100", style: "stroke:rgb(255,0,0);stroke-width:2"})
}