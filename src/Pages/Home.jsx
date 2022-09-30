import React, { useEffect, useState } from "react";
import { Box, Image, GridItem, Grid } from "@chakra-ui/react";
import CaptionCarousel from "../Components/Carousel";
import CustomLoader from "../Components/CustomLoader";

const Home = () => {
  const [loading,setLoading] = useState(true)

useEffect(()=>{
setLoading(false)

},[])
if(loading) return <CustomLoader/>



  return (
    <Box>
      <Image
        w={"full"}
        src={
          "https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw2e6b4dfc/images/homepage/ATV/EOSS-EXTRA500-Desktop-1213x76.jpg"
        }
      />
      <CaptionCarousel />
      <Image
        w={"full"}
        src={
          "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~BLS~BLS-desktop_05.jpg/fmt/jpg/fmt/png"
        }
      />
      <Image
        w={"full"}
        src={
          "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~BFC_Updated_Away_Banner.png/fmt/jpg/fmt/png"
        }
      />

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10} mb={700} >
        <GridItem w="100%" h="500">
          <Image
            w={"full"}
            src={
              "https://images.vans.com/is/image/VansBrand/FA22_DiaDeLosMuertos_640x540?$espot-new-640$"
            }
          />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image
            w={"full"}
      
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsBVB.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>

        <GridItem w="100%" h="100">
          <Image
            w={"full"}
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsMAN+CITY.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image
            w={"full"}
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsAC+MILLAN.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>
      </Grid>
      <Image w={"full"} src={"https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Sep~September-edit-desktop.jpg/fmt/jpg/fmt/png"}/>

    </Box>
  );
};

export default Home;
