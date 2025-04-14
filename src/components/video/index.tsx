import {Videos} from "../../types/types.ts";
import {useEffect} from "react";

import styles from './styles.module.css';

export const Video = ({mainVideo, fallbackVideos}: Videos) => {

    useEffect(() => {
        const format = getFormat(mainVideo)
        if(format !== "webm") {
            console.warn({
                Obj: mainVideo,
                message: "Formato no recomendado. Como vídeo principal, se recomienda usar webm"
            })
        }
    }, [mainVideo])

    const getFormat = (video: string) => {
        return video.split('.').pop();
    }

    return (<video className={styles.wrapper} autoPlay loop muted >
                <source className={styles.source} src={mainVideo} type={`video/${getFormat(mainVideo)}`} />
                { fallbackVideos.map((video: string, index: number) => <source key={`v-${index}-ec`}
                                                                               src={video}
                                                                               type={`video/${getFormat(video)}`}
                                                                               className={styles.source}/>)}
            </video>)
}