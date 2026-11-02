class Drive:
    max_speed = 100

    def above_max_speed(speed, is_in_city):
        if speed > Drive.max_speed: # speed is greater than the max speed
            print("You are driving too fast")
        elif speed > Drive.max_speed and is_in_city:
            print("You are driving too fast and you are in the city")
        else:
            print("You are driving at the speed limit")

Drive.above_max_speed(101)
Drive.above_max_speed(99)