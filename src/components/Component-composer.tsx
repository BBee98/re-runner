import {ComponentProps} from "react";
import {ComponentCSSProps, HTMLContainerTags} from "../types/types.ts";

export const ComposeComponent = ({ props, as = "div", children} : ComponentCSSProps & { as: HTMLContainerTags } & ComponentProps<any>,
    ) => {
    const Tag = as ;
    return (
        <Tag style={{
            ...props,
        }}>{ children }</Tag>
    )
}