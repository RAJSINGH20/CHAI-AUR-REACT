import React from 'react'

const user_context = React.createContext();

export default user_context;   

<user_context>
    <Provider value={value}>
        <div>
            <h1>hello world</h1>
        </div>
    </Provider>
<user_context/>