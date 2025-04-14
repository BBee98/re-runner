import {ComponentCSSProps, ComposeComponent} from "../Component-composer.tsx";
import {ReactNode} from "react";

type ContainerProps = {
    props?: ComponentCSSProps;
    children?: ReactNode
}

export const Container   = ({props, children}: ContainerProps) => {

    return (<ComposeComponent {...props}>
        <div>{ children }</div>
    </ComposeComponent>)
}


