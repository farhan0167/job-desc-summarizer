from flask import Flask, request
import openai
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os

# Load your API key from an environment variable or secret management service
load_dotenv()
secret = os.environ.get('OPENAI_API_SECRET_KEY')

openai.api_key = secret

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/summary", methods=["POST"])
def summarize():
    #get the data
    req = request.get_json()
    desc = req["data"]
    position = req["position"]

    #below is your prompt. Feel free to change it as you wish but make sure the position and desc is formatted in
    prompt = f""" 
        Summarize the following job description for a {position} role in 10 sentences.
        Make sure to list the programming languages or technologies desired and how many years of experience is expected.
        Below is the job description:
        {desc}
    """
    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=0, max_tokens=500)

    return {"data": response["choices"][0]["text"]}


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)