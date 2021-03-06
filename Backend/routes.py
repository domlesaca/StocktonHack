from flask import Flask, request, jsonify
from main import create_user, get_user




app = Flask(__name__)


@app.route('/api/v1.0/create_user', methods=["POST"])
def create_user_route():
    if request.method == 'POST':
        newuser = request.json
        user_status = create_user(newuser)
        if "Error" in user_status:
            return jsonify(user_status)
        else:
            message = {
                "Status" : "Success",
                "Message": "User successfully created",
                "UserID" : user_status
            }
            return jsonify(message)

@app.route('/api/v1.0/retrieve_user', methods=["POST"])
def retrive_user_route():
    if request.method == 'POST':
        user_to_get = request.json
        user = get_user(user_to_get)
        return jsonify(user)



if __name__ == '__main__':
    # new_members = get_new_member_fitness_data()
    # for row in new_members:
    #     age = row[4]
    #     gender = row[3]
    #     member_id = row[0]
    #     cal_consumed = row[8]
    #     cal_burned = row[9]
    #     print(row)
    #     min_sleep, max_sleep = get_recommended_sleep(age)
    #     sedentary, moderate, active = get_reccommended_calories(gender, age)
    #     print(min_sleep, max_sleep, sedentary, moderate, active)
    #     updated_results = update_row(member_id, cal_consumed, cal_burned, min_sleep, max_sleep, sedentary, moderate, active)
    app.run(port=8080)