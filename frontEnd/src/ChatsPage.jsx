import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='c3b8969c-28a8-4584-b785-daaa4ca05349'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;