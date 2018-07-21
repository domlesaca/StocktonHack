import random
import pymysql
import json

def connect_to_db():
    cnx = pymysql.connect(user='Root',
                                  password='Welcome#10',
                                  host='hackathon-db.cmikvgfxob7c.us-west-2.rds.amazonaws.com',
                                  port=3306,
                                  database='hackathon',
                                  autocommit=True)
    cursor = cnx.cursor()

    return cursor





def create_user(user_json):

    cursor = connect_to_db()

    new_user = json.loads(user_json)
    user = new_user["user"]
    skills = new_user["skills"]
    interests = new_user["interests"]

    userID = random.randint(100000,999999)

    cursor.execute("INSERT INTO users VALUES (%s, %s, %s, %s, %s,%s,%s,%s) ", (userID, user["Name"], user["email"], user["phoneNumber"], user["city"], user["state"], user["userType"], user["Bio"]))

    for skill in skills:
        cursor.execute("INSERT into userSkills values (%s,%s)", userID, skill)

    for interest in interests()

if __name__ == "__main__":
    user = {
               "Name": "Test",
               "email": "test@test.com",
               "phoneNumber": "5555555555",
               "city": "Stockton",
               "state": "CA",
               "userType": "2",
               "Bio": "Cool dude",
           }

    create_user(user)

    #recrods()



