import {ComponentProps} from "react";
import {Sizes} from "../../types/types.ts";

import styles from './styles.module.css';

type SectionProps = {
    size?: Sizes;
} & ComponentProps<"section">

export const Section = ({ size = `none`, children }: SectionProps) => {

    return (<section className={size !== "none" ? styles[`section${size}`] : ""}>
        { children }
    </section>)
}