import {PhoneKeyboard} from "../../hoc/phone-keyboard/phone-keyboard";
import {useEffect, useRef, useState} from "react";
import {PhoneNumbersInput} from "../../hoc/phone-numbers-input/phone-numbers-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newCallScreenCss from "./phone-screen-new-call.module.css"
import {Call} from "../../../../classes/call";
import {TCallsState, TGeneralState, TMessagesState} from "../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {ICall, IMessage} from "../../../../classes/interfaces";
import {PhoneProgressCall} from "./components/phone-progress-call/phone-progress-call";
/**
 * The route that represents this screen.
 */
export const screenRoute = "new-call";

/**
 * Screen: Represents the "new call" or keyboard with the number input
 */
export const PhoneScreenNewCall = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const phoneCallState: TCallsState = useSelector((state: IReducersState) => state.callsState);
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const dispatch = useDispatch();

    // new number that is added from the keyboard
    const [numbers, setNewNumber] = useState<string[]>([]);
    // all added numbers
    const [currentInputNumbers, setCurrentInputNumbers] = useState<string>("");
    // if it is checked that converting will find only real words
    const [filter, setFilter] = useState<boolean>(false);

    /**
     * Callback for keyboard
     */
    const onMouseClickNumberButtonCallback = (clickedNumber: string) => {
        setNewNumber(prevNumbersArr => [...prevNumbersArr, clickedNumber])
    }

    /**
     * Callback for input number
     */
    const onInputNumbersChange = (inputNumbers: string) => {
        setCurrentInputNumbers(inputNumbers);
    }

    /**
     * Event: Sends a new request
     */
    const onMouseClickCallButton = async () => {
        const call: ICall = new Call(
            phoneGeneralState,
            phoneCallState,
            messagesState,
            dispatch
        );
        call.setNumber(currentInputNumbers);
        call.call(filter)
            ?.then(response =>{
            })
            ?.catch(err => {
                console.log(err);
            });

    }

    /**
     * Changes state of the filter
     */
    const onMouseClickFilterCheck = () => {
        setFilter(state => !state);
    }

    return (
        <div>
            <PhoneNumbersInput values={ numbers } callback={ onInputNumbersChange }></PhoneNumbersInput>
            <PhoneKeyboard callback={ onMouseClickNumberButtonCallback }></PhoneKeyboard>


            <div className={ newCallScreenCss.callButtonsLine }>


                {
                    phoneCallState.callProgress.status &&
                    <PhoneProgressCall numbers={currentInputNumbers}></PhoneProgressCall>
                }

                <FontAwesomeIcon icon={["fas","phone"]}
                                 style={phoneGeneralState.airplane.status ?
                                     { cursor: "not-allowed",
                                         opacity: '0.9',
                                         background: "#c4c4c4",
                                         color: "grey" } : phoneCallState.callProgress.status ? { opacity: 0 } : {}}
                                 className={ `${newCallScreenCss.callButton}` }
                                 onMouseDown={ onMouseClickCallButton }></FontAwesomeIcon>


                <FontAwesomeIcon icon={["fas","filter"]}
                                 className={ `${filter ? newCallScreenCss.filterActivated : ''} ${newCallScreenCss.filterCheck}` }
                                 onMouseDown={ onMouseClickFilterCheck }></FontAwesomeIcon>
            </div>
        </div>
    )
}

