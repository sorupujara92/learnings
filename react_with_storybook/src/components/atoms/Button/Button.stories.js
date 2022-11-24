import React from "react";
import SignInButton from "./Button"
import { action } from "@storybook/addon-actions";


export default {
    component: SignInButton,
    label: "SignInButton",
};

const buttonData={
    label: "Sign In",
    setHidden: action("Button clicked"),
}

export const SignInButtonStory=()=><SignInButton {...buttonData}></SignInButton>