import './index.css'
import {Section} from "./components/section";
import {Video} from "./components/video";
import {Container} from "./components/container";

import mainVideo from "@videos/e-commerce-1.webm";
import fallbackVideos from "@videos/e-commerce-1.mp4";

function App() {

  return (
     <Section>
         <Container>
             <Video mainVideo={mainVideo} fallbackVideos={[fallbackVideos]} />
             <p className={styles.slogan}></p>
         </Container>
     </Section>
  )
}

export default App

