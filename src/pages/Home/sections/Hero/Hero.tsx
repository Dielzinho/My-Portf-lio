import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {

    const StyleHero = styled ("div")(()=>({
        backgroundColor: "black"
    }))

    return (
      <>
        <StyleHero>
            olá
            <img src={Avatar} />
        </StyleHero>
      </>
    )
  }
  
  export default Hero