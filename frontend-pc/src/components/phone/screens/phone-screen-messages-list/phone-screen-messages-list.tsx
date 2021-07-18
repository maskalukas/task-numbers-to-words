import { TMessagesListType, TMessagesState} from "../../../../redux/interfaces";
import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {Messages} from "../../../../classes/message";
import {IMessage} from "../../../../classes/interfaces";
import {TMessageItem} from "../../../../redux/reducers/types";
import {RouteComponentProps} from "react-router";

export const screenRoute = "messages-list";

type TMessagesListUrlProps = {
    type: TMessagesListType;
}

export const PhoneScreenMessagesList = (props: RouteComponentProps<TMessagesListUrlProps>) => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);

    const [messagesList, setMessagesList] = useState<TMessageItem[]>([]);

    useEffect(() => {
        const messages: IMessage = new Messages(messagesState, null as any);
        setMessagesList(messages.getMessagesListByType(props.match.params.type));
        setTimeout(() => {
            console.log(messagesList);
        })
    })

    return (
        <div>

        </div>
    )
}
