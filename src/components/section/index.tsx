import {ComponentProps} from "react";
import {Sizes} from "../../types/types.ts";

type SectionProps = {
    size?: Sizes;
} & ComponentProps<"section">

export const Section = ({ size = `s8px`, children }: SectionProps) => {
    return (<section className={`section${size}`}>
        { children }
    </section>)
}