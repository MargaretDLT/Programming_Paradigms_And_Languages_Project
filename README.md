*This is a project that I worked on for my Programming Paradigms and Languages class while attending university. For this project I had to code a new instrument and visualizer based off reading example code for the Piano and Waveform that was provided by the professor. I created a xylophone for my instrument where I also added code so that my instrument can make sound when the keys, "s,d,f,g,h,j,k,l", from a computer keyboard are pressed. For my visualizer I created a stick figure, boombox, and music notes that move when an instrument makes sound. 


[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7471928&assignment_repo_type=AssignmentRepo)
# LamdbaVibe

CSC 600 musical application. Get ready to shred.

## Client

The client contains the code which you will modify as part of the course. It constitutes the frontend (UI) portion of this web application.

In the `client` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run prod`

This is a combination of `npm run build` and python3 `http.server`. This will start a new web server that hosts your app at [http://localhost:3002](http://localhost:3002). Rather than talking to your local environment, it will talk to a live, production server so you can jam with your group.

### Learn More about CRA (Create React App)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Server

The server contains the backend code which. It is included here as a reference and as a pedagogical tool. Peruse the code to figure out how it works and how you ought to call the API. You will run a version of the server locally for testing purposes. Once you're ready to jam with your classmates, you will switch to talking to a production server. See `npm run prod` for details.

In the `server` directory, you can run:

### `npm start`

Runs the server in development mode.

The server will restart if you make edits.
You will also see errors in the console.
