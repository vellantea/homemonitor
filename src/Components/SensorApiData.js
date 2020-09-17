import React, {Component} from 'react'

class SensorApiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false,
      data: ''
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/sensor-data/${props.serial_num}")
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            loaded: true,
            data: result.data
          });
        },
        (error) => {
          this.setState({
            loaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, loaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <h4>Temperature: {data.temperature}</h4>
          <h4>Humidity: {data.humidity}</h4>
        </ul>
      );
    }
  }
}

export default SensorApiData;