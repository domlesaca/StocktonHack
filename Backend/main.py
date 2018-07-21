import random
import pymysql
import json

def connect_to_db():
    cnx = pymysql.connect(user='Root',
                                  password='Welcome#10',
                                  host='hackathon-db.cmikvgfxob7c.us-west-2.rds.amazonaws.com',
                                  port=3306,
                                  database='hackathon')
    cursor = cnx.cursor()

    return cursor





def create_user(user_json):

    cursor = connect_to_db()

    new_user = json.loads(user_json)
    user = new_user["user"]
    skills = new_user["skills"]
    interests = new_user["interests"]

    cursor.execute("INSERT INTO users ('name','email', 'phoneNumber', 'city','state','userType' VALUES %S")



if __name__ == "__main__":
    cursor = connect_to_db()
    #recrods()



