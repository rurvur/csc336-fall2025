import "./AssignItem.css"

function AssignItem({assign}) {
  return (
    <li 
        style={
            {
                textDecoration: assign.submitted ? "line-through" : "none"
            }
        }>
        {assign.name}
    </li>
  )
}

export default AssignItem