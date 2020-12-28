import React, {Component} from 'react'
import bedIcon from '../assets/double-bed.svg'

class RoomCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {title, description, size, beds, adults, price, img} = this.props.room
        const {promo} = this.props
        let discountedPrice = promo ? price-((promo / 100) * price) : null

        return(
            <div className="room-card" onClick={() => this.props.updateRoom(this.props.room)}>
                <div className="room-img">
                    <img src={img} alt="inside room" />
                </div>
                <div className="room-info">
                    <p className="room-title">{title}</p>
                    <p className="description">{description}</p>
                    <p>Size: {size}m2</p>
                    <div className="lower-row">
                        <div className="occupancy">
                            <div>
                                <img src={bedIcon} alt="double bed icon" />
                                <p>Beds: {beds}</p>
                            </div>
                            <p>People: {adults}</p>
                        </div>
                        <p className="price">€{discountedPrice ? discountedPrice : price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomCard