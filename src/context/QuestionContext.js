import React, { useState, useEffect } from "react";
import form from "../test_data/form.json";

const QuestionContext = React.createContext();

const QuestionContextProvider = (props) => {
    const getForm = async (formId) => {
        return form;
    }

    return (
        <QuestionContext.Provider
        value={{
            getForm
        }}
      >
            {props.children}
        </QuestionContext.Provider>
    );
}

const QuestionContextConsumer = QuestionContext.Consumer;

export { QuestionContext, QuestionContextProvider, QuestionContextConsumer };