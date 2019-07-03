This is production version of my Currency Converter app,<br>
which currently live on [Herkoku](https://salty-forest-20285.herokuapp.com/).

The app is built using Node.js, Express and React.

When you cloned the project on your computer, navigate to the project's directory and install the dependecies by typing

### `npm install`

then start the app:

### `npm start`

and open it in your browser at [http://localhost:3001](http://localhost:3001).

Since it's a production version, the front end code written using React is bundled in the `build` folder and servered by an Express app. The back end is also responsible for fetching the data for the currency conversions from [napiarfolyam.hu](http://napiarfolyam.hu) using an XML-based API.

You can find the source code of the React front end here:
[https://github.com/hunhrabo/valutavalto](https://github.com/hunhrabo/valutavalto)
