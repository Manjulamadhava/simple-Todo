import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {detailsUpdation} = this.props
    this.setState({editing: true, updatedTitle: detailsUpdation.title})
  }

  handleSave = () => {
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {detailsUpdation, deleteUser, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={
          detailsUpdation.completed ? 'todo-item completed' : 'todo-item'
        }
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={detailsUpdation.completed}
              onChange={() => toggleComplete(detailsUpdation.id)}
            />
            <p className="title">{detailsUpdation.title}</p>
            <button onClick={this.handleEdit} type="button">
              Edit
            </button>
            <button
              onClick={() => deleteUser(detailsUpdation.id)}
              type="button"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
