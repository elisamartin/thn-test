import React, {Component} from 'react'
import RoomCard from './RoomCard'

class RoomsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {rooms} = this.props
        return(
            <div className="rooms-list">
                
                <RoomCard room={rooms[0]} updateRoom={this.props.updateRoom} promo={this.props.promo}  />
                <RoomCard room={rooms[1]} updateRoom={this.props.updateRoom} promo={this.props.promo}  />
                <RoomCard room={rooms[2]} updateRoom={this.props.updateRoom} promo={this.props.promo}  />
            </div>
        )
    }
}

export default RoomsList