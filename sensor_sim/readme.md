# Information regarding sensor backend and sensor API

sensor_api.py is a flask API used to simulate the sensors. It loads pre-made "sensor data" from sensor_data.json. The React component SensorApiData is supposed to make a GET request where it grabs the serial number, temperature, and humidity data. The serial number to get the correct data from the correct sensor is specified in the GET request url (and is inputted by the user when a sensor is added).

For example, a GET request to "http://localhost:5000/sensor-data/7" returns {"serial_num":7,"temperature":70,"humidity":700}, where 7 is the serial number.

The idea is, various sensors will make POST requests to the API and the API will update this data.

This example POST request will work: curl -i -H "Content-Type: application/json" -X POST -d '{"serial_num":7,"temperature":70,"humidity":700}' http://127.0.0.1:5000/sensor-data/

A known problem is that the SensorApiData React component is unsuccessful in making GET requests. It returns a network error, which is displayed on the corresponding page on the homemonitor web app. However, if you made a GET request in terminal, it returns correctly. The issue is not with the API but with the React retrieval implemetation.

The SensorData React component, however, is sucessful in retrieving the sensor name (i.e. 'kitchen' if that is what's inputted as the Name by the user) from firebase. Each serial number corresponds with a name. You can see the name in bold above where the sensor data should be displayed (but is instead an error).
