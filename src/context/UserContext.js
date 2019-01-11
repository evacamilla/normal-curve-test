import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState();
    
    return (
        <UserContext.Provider
            value={{ user }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
