# Job Description Summarizer


I've built a Chrome Extension that allows you to copy-past a job description, and it returns you a summary of that job description. This is the first iteration of the application (I'm still learning how to build a chrome extension). The job description is fed into a GPT-3 model by OpenAI using a simple prompt, almost similar to how you'd interact with ChatGPT. I'm making this public in case anybody wants to re-create this application and use it in their job search.

![demo](extras/demo.GIF)
![demo](extras/demo2.GIF)

In order to re-create and use the extension (I'll assume you are familiar with the command line), follow the steps below:

1. Clone the repository in your local machine:
   ```bash
   git clone https://github.com/farhan0167/job-desc-summarizer.git
   ```
2. There are two directories, my-app and backend. 
3. Go to the `backend` directory and spin the flask server:
   1. CD into the directory
        ```bash
        cd backend
        ```
    2. Install a virtual environment
        ```bash
        python3 -m venv venv
        ```
    3. Activate the venv:
        ```bash
        source vevn/bin/activate
        ```
    4. Install all the dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    5. Before you spin up your flask server, go to OpenAI API to create an account
       1. Create an account [here](https://openai.com/api/)
       2. Once you created an account, navigate to their API key. I'll assume that you don't have an account with them yet because it will enable you to get $18 in free credits. You can access your keys by clicking on the right-most corner of the screen where you see your name or org > View API Key. Click "+ Create new secret key". Copy your secret key and navigate to the .env file the repo you cloned earlier in `job-desc-summarizer/backend/.env`. Within the .env file, paste your secret key after `OPENAI_API_SECRET_KEY=` by replacing `replace-with-your-key` with your key.
    6. Now spin up your flask server:
        ```bash
        python3 app.py
        ```
4. Now we'll create a Chrome Extension. Simply go to the my-app directory and run the following:
   1. CD into the my-app directory in a new terminal window:
        ```bash
        cd job-desc-summarizer/my-app
        ```
   2. Install npm dependencies(make sure to have node installed in your system):
        ```bash
        npm install
        ```
   3. Build the project:
        ```bash
        npm run build
        ```
        You'll notice it creates a new build folder.
    4. Open Google Chrome and navigate to the extensions tab > Enable Developer Tools. You can click on settings and find Extensions on the left nav pane towards the bottom
    5. Select Load Unpacked, and select the build folder that was created earlier. And you are all set to use the extension.

