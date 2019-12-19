import React from "react";
import { Main } from './Main';
import GoogleFontLoader from 'react-google-font-loader';

import "./App.css";

const App: React.FC = () => {
  return (<div>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Gothic+A1',
          weights: [100, 400, '400i']
        }
      ]}
      subsets={['korean']}
    />
    <Main />
  </div>)
};

export default App;
