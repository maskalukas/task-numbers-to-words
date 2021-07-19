import React from 'react';
import appCss from './App.module.css';
import {PhoneLayout} from "./components/phone/phone-layout/phone-layout";
import PhoneCharger from "./components/phone/externals/phone-charger/phone-charger";

/**
 * The first component of this app.
 */
function App() {
  return (
      <div className={ appCss.rootContainer }>
        <PhoneLayout></PhoneLayout>
        <PhoneCharger></PhoneCharger>
      </div>);
}

export default App;
