import './index.css'

const TodoItem = props => {
  const {detailsupdation, deleteUser} = props
  const {title, id} = detailsupdation
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button className="but" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
