import React, {Component} from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            adults: this.props.adults, 
            children: this.props.children
        }
    }

    handleAdultsChange = (event) => {
        this.setState({ adults: event.target.value })
    }
    
    handleChildrenChange = (event) => {
    this.setState({ children: event.target.value })
    }

    render() {
        const {startDate, endDate, adults, children} = this.state
        return(
            <div className="filters">
                <div className="inner-background"></div>
                <div className="inner">
                    <DateRangePicker
                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        displayFormat={() => "DD/MM/YYYY"}
                        numberOfMonths={1}
                        />
                    
                    <select onChange={(e) => this.handleAdultsChange(e)} >
                        <option value="1">Adults: 1</option>
                        <option value="2">Adults: 2</option>
                        <option value="3">Adults: 3</option>
                        <option value="4">Adults: 4</option>
                        <option value="5">Adults: 5</option>
                        <option value="6">Adults: 6</option>
                        <option value="7">Adults: 7</option>
                        <option value="8">Adults: 8</option>
                        <option value="9">Adults: 9</option>
                        <option value="10">Adults: 10</option>
                    </select>

                    <select onChange={(e) => this.handleChildrenChange(e)} >
                        <option value="0">Children: 0</option>
                        <option value="1">Children: 1</option>
                        <option value="2">Children: 2</option>
                        <option value="3">Children: 3</option>
                        <option value="4">Children: 4</option>
                        <option value="5">Children: 5</option>
                        <option value="6">Children: 6</option>
                        <option value="7">Children: 7</option>
                        <option value="8">Children: 8</option>
                        <option value="9">Children: 9</option>
                        
                    </select>

                    <button onClick={() => this.props.updateSearch(startDate, endDate, adults, children)}>Modify</button>
                </div>
                
            </div>
        )
    }
}

export default Filters