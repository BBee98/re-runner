import styles from './styles.module.css';
import {BaseComponentType} from "../types.ts";

type TextBoxProps = {
    text: string;
} & BaseComponentType

export const TextBox = ({ className, text }: TextBoxProps) => {
    return <p className={`${styles.box} ${className}`}>{ text }</p>
}