import React from 'react';
import appCss from './App.module.css';
import {PhoneLayout} from "./components/phone/phone-layout/phone-layout";
import PhoneCharger from "./components/phone/externals/phone-charger/phone-charger";
import {TCallsState} from "./redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "./redux/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PhoneCallSignal} from "./components/phone/externals/phone-call-signal/phone-call-signal";

function App() {

    const callsState: TCallsState = useSelector((state: IReducersState) => state.callsState);

  return (
      <div className={ appCss.rootContainer }>
        <PhoneLayout></PhoneLayout>
        <PhoneCharger></PhoneCharger>
        <FontAwesomeIcon icon={["fas","database"]} className={ appCss.database }></FontAwesomeIcon>

          {
              callsState.callProgress.status &&
              <PhoneCallSignal></PhoneCallSignal>
          }

      </div>);
}

export default App;
