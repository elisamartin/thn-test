import React, {Component} from 'react'
import moment from 'moment'


class ResoSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let startDate = moment(this.props.startDate).format('DD/MM/YYYY')
        let endDate = moment(this.props.endDate).format('DD/MM/YYYY')
        let room = this.props.selectedRoom
        const {price, promo, adults, children} = this.props
        let discountedPrice = promo ? price-((promo / 100) * price) : null
        return(
            <div className="summary">
                <p className="summary-header">Reservation Summary</p>
                <p className="title">{room ? room.title : null}</p>
                <div className="dates">
                    <div>
                        <p className="label">Check in</p>
                        <p>From 15.00h</p>
                    </div>
                    <div>
                        <p className="label">Check out</p>
                        <p>Before 12.00h</p>
                    </div>
                </div>
                <div>
                    <p className="label">Reservation date</p>
                    <p>From {startDate} To {endDate}</p>
                </div>
                <div>
                    <p className="label">People</p>
                    {adults >= 2 ? 
                    <p>{adults} Adults</p> 
                    : <p>{adults} Adult</p>}

                    {children && children > 0 ?
                    children >= 2 ? 
                    <p>{children} Children</p> 
                    : <p>{children} Child</p>
                    : null }
                </div>
                <div className="price-wrapper">
                    <p className="summary-price">TOTAL</p>
                    <p className="summary-price">{discountedPrice ? discountedPrice : price}€</p>
                </div>

                <button onClick={() => this.props.saveSearch()} >Save</button>
            </div>

        )
    }
}

export default ResoSummary