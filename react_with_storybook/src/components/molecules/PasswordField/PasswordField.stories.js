import React from "react";
import PasswordFieldComponent from "./PasswordField";
export default {
    component: PasswordFieldComponent,
    title: "PasswordField",
};

const passwordData={
   passwordText: "Enter Password",
   value : "Password",
   label : "Enter Password"
}

export const PasswordFieldStory=()=><PasswordFieldComponent {...passwordData}></PasswordFieldComponent>