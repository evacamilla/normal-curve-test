import React, { useState, useEffect } from "react";
import form from "../test_data/form.json";
import user from "../test_data/user.json";
import answers from "../test_data/answers.json";

const DataContext = React.createContext();

const DataContextProvider = (props) => {

    const getForm = async (formId) => {
        return form;
    }
    const getUser = async (userId) => {
        return user;
    }
    const getAnswers = async (formId, userId) => {
        return answers;
    }

    return (
        <DataContext.Provider
            value={{ getForm, getUser, getAnswers }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer };
