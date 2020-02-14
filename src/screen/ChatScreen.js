import MessageListComponent from '../component/MessageListComponent';
import EnterMessageComponent from '../component/EnterMessageComponent';
import WebSocketConfiguration from "../socket/WebSocketConnector";

import React, { Component }  from 'react';

export default class ChatScreen extends Component {
    socketConfig;

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.socketConfig = new WebSocketConfiguration ();
    }

    render() {
        return (
            <div>
                <div style={{marginLeft:'30px'}}>
                    <MessageListComponent/>
                    <EnterMessageComponent/>
                </div>
            </div>
        );
    }
}
