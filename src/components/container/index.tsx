import {ComposeComponent} from "../Component-composer.tsx";
import {ReactNode} from "react";
import {ComponentCSSProps} from "../../types/types.ts";

type ContainerProps = {
    props?: ComponentCSSProps;
    children?: ReactNode
}

export const Container   = ({props, children}: ContainerProps) => {
    return (<ComposeComponent {...props} as="div">
        { children }
    </ComposeComponent>)
}


