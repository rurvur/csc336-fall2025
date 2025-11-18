import "./AssignItem.css"

function PrioButton({assign}) {
  return (
    <button id = "priobutt" onClick={changePrio(assign)}>Change Priority</button>
  )
}

function changePrio({assign}) {
    if (assign.priority == "high") {
        assign.priority = "low"
    } else {
        assign.priority = "high"
    }
}

export default PrioButton