export type Sizes = 'none' | 's8px' | 's16px' | 's24px' | 's32px' | 's40px' | 's48px' | 's56px' | 's64px' | 's72px' | 's80px';

export type Videos = {
    className?: string
    mainVideo: string,
    fallbackVideos: Array<string>
}

export type HTMLContainerTags = 'div' | 'section' | 'article' | 'ul';

export type DisplayCSSProps = {
    display?: 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none' | 'table' | 'table-row' | 'table-cell' | 'table-caption' | 'list-item' | 'run-in' | 'contents' | 'inherit' | 'initial' | 'unset';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'inherit' | 'initial' | 'unset';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'inherit' | 'initial' | 'unset';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset';
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
}

export type PositionCSSProps = {
    position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky' | 'inherit' | 'initial' | 'unset';
    zIndex?: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export type PaddingCSSProps = {
    padding?: {
        top?: Sizes;
        bottom?: Sizes;
        right?: Sizes;
        left?: Sizes;
    };
}
export type MarginCSSProps = {
    padding?: {
        top?: Sizes;
        bottom?: Sizes;
        right?: Sizes;
        left?: Sizes;
    };
}

export type ComponentCSSProps = {
    props?: {
        zIndex?: number;
        width?: string;
        height?: string;
    }
    & DisplayCSSProps
        & PositionCSSProps
            & PaddingCSSProps
                & MarginCSSProps
}