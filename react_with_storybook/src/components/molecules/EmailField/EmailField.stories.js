import React from "react";
import EmailFieldComponent from "./EmailField";
export default {
    component: EmailFieldComponent,
    title: "EmailField",
};

const emailData={
    emailText: "Enter Email",
    value : "Email"
}

export const EmailFieldStory=()=><EmailFieldComponent {...emailData}></EmailFieldComponent>