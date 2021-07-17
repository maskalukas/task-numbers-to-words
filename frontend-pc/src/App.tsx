import React from 'react';
import './App.css';
import {PhoneLayout} from "./components/phone/phone-layout/phone-layout";
import PhoneCharger from "./components/phone/externals/phone-charger/phone-charger";

function App() {

  return (
      <div id="root-container">
        <PhoneLayout></PhoneLayout>
        <PhoneCharger></PhoneCharger>
      </div>);
}

export default App;
