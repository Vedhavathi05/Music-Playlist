import {FaTrash} from 'react-icons/fa'

import './index.css'

const SongCard = props => {
  const {details, deleteList} = props
  const {id, imageUrl, name, genre, duration} = details

  const deleteFunction = () => {
    deleteList(id)
  }
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="details">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="trash-container">
        <p className="paragraph">{duration}</p>

        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={deleteFunction}
        >
          <FaTrash color="white" />
        </button>
      </div>
    </div>
  )
}

export default SongCard
