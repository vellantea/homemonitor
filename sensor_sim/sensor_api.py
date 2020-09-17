from flask import Flask, request
from flask_restful import Api, Resource, reqparse # reqparse if flash-resful parsing interface
import json


app = Flask(__name__)
api = Api(app)

with open('sensor_data.json','r') as f:
	sensor_data = json.load(f)

class Sensor(Resource):

	def get(self, serial_num=1):

		for sensor in sensor_data:
			if(sensor["serial_num"] == serial_num):
				return sensor, 200 # ok

		return "Serial number not found.", 404 # not found

	def post(self):
		params = request.get_json()

		for sensor in sensor_data:
			if(params["serial_num"] == sensor["serial_num"]):
				sensor["serial_num"] = params["serial_num"]
				sensor["temperature"] = params["temperature"]
				sensor["humidity"] = params["humidity"]
				return sensor, 200 # ok

		data = {

			"serial_num":params["serial_num"],
			"temperature":params["temperature"],
			"humidity":params["humidity"]
		}

		sensor_data.append(data)
		# then write to some database 
		with open('sensor_data.json','w') as f:
			json.dump(sensor_data,f)

		return sensor, 201 # created

	def delete(self, serial_num):
		global sensor_data
		sensor_data = [sensor for sensor in sensor_data if sensor["serial_num"] != serial_num]
		return "Sensor "+ str(serial_num) + " deleted.", 200 # ok

api.add_resource(Sensor,"/","/sensor-data","/sensor-data/","/sensor-data/<int:serial_num>")

if __name__ == '__main__':
	app.run(debug=True)
	
	
