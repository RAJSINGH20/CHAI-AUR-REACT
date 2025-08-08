import React from 'react'
import user_context from "./user_context";
const user_context_Provider = ({ children }) => {
    const [user, setUser] = React.useState(null);
  return (
    <div>
      <user_context.Provider value={[user, setUser]}>
        {children}
      </user_context.Provider>
    </div>
  );
};

export default user_context_Provider
