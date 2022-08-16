import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackDetails, onClickDeleteTrack} = props

  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="track-item">
      <div className="img-container">
        <img className="track-img" src={imageUrl} alt="track" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          testid="delete"
          className="button"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete className="delete" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
