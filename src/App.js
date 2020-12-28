import React, {Component} from 'react'
import moment from 'moment'
import Cookies from 'js-cookie'

import './App.css'

import Filters from './Components/Filters'
import ResoSummary from './Components/ResoSummary'
import RoomsList from './Components/RoomsList'
import progressImg from './assets/los-cocos-1.png'
import cocoImg from './assets/los-cocos-img-bg.png'
import cocosLogo from './assets/los-cocos-iso-footer.png'

import room1 from './assets/room_1.png'
import room2 from './assets/room_2.png'
import room3 from './assets/room_3.png'


const rooms = [
  {
      id: 1,
      title: "Mini Dreamy Room",
      description: "Generous and confortable these modern furnished rooms offer two queen-size and are on the first floor.",
      size: 20,
      beds: 1,
      adults: 2,
      price: 200,
      img: room1
  },
  {
      id: 2,
      title: "Sweet Bungalow",
      description: "The perfect blend of confort and culture, our superior room with a central garden view has the stunning, and comes with a",
      size: 50,
      beds: 1,
      adults: 2,
      price: 350,
      img: room2
  },
  {
      id: 3,
      title: "Los Cocos Suite",
      description: "If you want a little extra from your stay, you might like our superior rooms. A ocean view room has a private beach and a",
      size: 125,
      beds: 3,
      adults: 4,
      price: 450,
      img: room3
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        adults: 1,
        children: 0,
        selectedRoom: rooms[0],
        price: 200,
        promo: 0
    }
  }

  componentDidMount = () => {
    this.getPromoCode()
    this.getCookies()
  }

  updateSearch = (sd, ed, adults, children) => {
    this.setState({
      startDate: sd,
      endDate: ed,
      adults:adults,
      children: children
    }, () => this.getPrice())
  }

  updateRoom = (room) => {
    this.saveSearch()
    this.setState({
      selectedRoom: room
    }, () => this.getPrice())
  }

  handleAdultsChange = (event) => {
    this.setState({ adults: event.target.value })
  }

  handleChildrenChange = (event) => {
    this.setState({ children: event.target.value })
  }

  getPrice = () => {
    const {startDate, endDate, selectedRoom} = this.state
    let nights = moment(endDate).diff(moment(startDate), 'days')
    let newPrice = selectedRoom.price *nights
    this.setState({price: newPrice})
  }

  saveSearch = () => {
    const {startDate, endDate, selectedRoom, adults, children, promo} = this.state
    Cookies.set('startDate', startDate)
    Cookies.set('endDate', endDate)
    Cookies.set('selectedRoom', selectedRoom.id)
    Cookies.set('adults', adults)
    Cookies.set('children', children)
    Cookies.set('promo', promo)
  }

  getCookies = () => {
    let startDate = Cookies.get('startDate')
    let endDate = Cookies.get('endDate')
    let selectedRoomId = Cookies.get('selectedRoom')
    let adults = Cookies.get('adults')
    let children = Cookies.get('children')
    if (selectedRoomId) {
      rooms.forEach((room) => {
        if (room.id === selectedRoomId) {
          this.setState({selectedRoom: room})
        }
      })
    }
    if (startDate, endDate, adults) {
      this.setState({
        startDate,
        endDate,
        adults,
        children
      }, () => this.getPrice())
    }
  }

  getPromoCode = () => {
    let url = window.location.href
    let promolocation = url.indexOf('promo_code')
    if (url.indexOf('promo_code') >= 0) {
      let promoCode = parseInt(url.substring(promolocation+11, promolocation+13))
      this.setState({promo: promoCode})
    } 
  }

  render () {
    return (
      <div className="App">
        <div className="fake-nav">
          <div className="nav-inner">
            <div className="links">
              <p>Home</p>
              <p>Rooms</p>
              <p>Restaurants</p>
            </div>
            <div className="logo">
              <img src={cocosLogo} alt="cocos logo" /> 
            </div>
            <div className="links">
              <p>Weddings</p>
              <p>Membership</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <Filters updateSearch={this.updateSearch} handleAdultsChange={this.handleAdultsChange} handleChildrenChange={this.handleChildrenChange} startDate={this.state.startDate} endDate={this.state.endDate} adults={this.state.adults} children={this.state.children}/>
        <div className="progress">
          <div>
            <p className="title">Rooms & Rates</p>
            <p>Plan your perfect stay at our hotel</p>
            <img src={progressImg} alt="progress first step" />
          </div>
          <img src={cocoImg} alt="a coco drink" />
        </div>
        <div className="main" >
          <ResoSummary promo={this.state.promo} saveSearch={this.saveSearch} selectedRoom={this.state.selectedRoom} startDate={this.state.startDate} endDate={this.state.endDate} adults={this.state.adults} children={this.state.children} price={this.state.price} />
          <RoomsList promo={this.state.promo} updateRoom={this.updateRoom} rooms={rooms} />
        </div>
        <footer>
          <div>
            <img src={cocosLogo} alt="los cocos logo" />
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>About us</p>
            <p>Partners</p>
          </div>
          <div>
            <p>reservations@loscocosbungalows.com</p>
            <p>Tlf: +34 982 458 720</p>
          </div>
          
        </footer>
      </div>
    )
  }
}

export default App
