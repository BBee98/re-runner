import {Container} from "../../../components/container";
import {Video} from "../../../components/video";
import mainVideo from "@videos/e-commerce-1.webm";
import fallbackVideos from "@videos/e-commerce-1.mp4";

import styles from './styles.module.css'
import {TextBox} from "../../../components/text-box";

export const MainVideoComponent = () => {
    return (
        <Container props={ { props:{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "300px",
            } } } >
            <Video className={styles.mainVideo} mainVideo={mainVideo} fallbackVideos={[fallbackVideos]} />
            <TextBox text={"Elige tu paso. Deja tu huella."} className={styles.slogan} />
        </Container>
    )
}