import {HTMLContainerTags, Sizes} from "../types/types.ts";
import {ComponentProps} from "react";

export type ComponentCSSProps = {
    as: HTMLContainerTags,
    props: {
        position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky' | 'inherit' | 'initial' | 'unset';
        zIndex?: number;
        width?: string;
        height?: string;
        display?: 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none' | 'table' | 'table-row' | 'table-cell' | 'table-caption' | 'list-item' | 'run-in' | 'contents' | 'inherit' | 'initial' | 'unset';
        margin?: {
            top?: Sizes;
            bottom?: Sizes;
            left?: Sizes;
            right?: Sizes;
        };
        padding?: {
            top?: Sizes;
            bottom?: Sizes;
            right?: Sizes;
            left?: Sizes;
        };
    }
}

export const ComposeComponent = ({ props, as = "div", children} : ComponentCSSProps & ComponentProps<any>) => {
    const Tag = as ;
    return (
        <Tag style={{
            ...props,
        }}>{ children }</Tag>
    )
}