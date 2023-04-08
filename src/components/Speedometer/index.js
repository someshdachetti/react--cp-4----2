// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {Speed: 0}

  onAccelarate = () => {
    if (this.state.Speed < 200) {
      this.setState(prevstate => ({Speed: prevstate.Speed + 10}))
    }
  }

  render() {
    const {Speed} = this.state

    return (
      <div className="bg">
        <h1>SpeedOmeter</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">SpeedMeter {Speed} KMPH</h1>
        <p> Min Limit is 0kmph, max Limit is 200kmph</p>
        <div className="button">
          <button className="Accelarate" onClick={this.onAccelarate}>
            Accelarate
          </button>
          <button className="break" onClick={this.onBreak}>
            Appy Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
