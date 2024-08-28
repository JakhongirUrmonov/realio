import {Typography, Stack, Divider} from "@mui/material";
import {Colors} from "@/ts/consts";
import RoundedTitle from "@/components/home/RoundedTitle";
import {AboutTimelineComponent} from "@/types/REST/api/generated";
import SlickSlider from "@/components/about/SlickSlider";

type Props = {
  title?: string;
  timeline?: AboutTimelineComponent[];
  description?: string;
};

export default async function Timeline({title, timeline, description}: Props) {
  return (
    <Stack
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        // marginLeft: {md: "-13%", xs: "-24px"},
      }}
    >
      <RoundedTitle text={title ?? ""} sx={{marginTop: {md: "160px", xs: "121px"}}} />

      <SlickSlider
        slideSpace={20}
        slideWidth="30%"
        slideWidthMd="45%"
        slideWidthSm="45%"
        slideWidthXs="80%"
        swiperContainerSx={{marginTop: "64px"}}
        minElement={3}
        minElementMd={3}
        minElementSm={2}
      >
        {timeline?.map((item, key) => (
          <Stack
            key={key}
            sx={{
              padding: "1px",
              borderRadius: "16px",
              boxSizing: "border-box",
              height: "100%",
              background: "linear-gradient(144.89deg, #3E6DD2 9.67%, #B666DB 28.38%, #FFFFFF 48.13%)",
            }}
          >
            <Stack
              sx={{
                backgroundColor: Colors.grey50,
                padding: "32px",
                borderRadius: "16px",
                boxSizing: "border-box",
                height: "100%",
              }}
            >
              <Typography variant="h2" sx={{color: Colors.lightGrey, marginBottom: {md: "126px", xs: "64px"}}}>
                {item.year}
              </Typography>
              <Typography variant="h3">{item.title}</Typography>
              <Divider sx={{backgroundColor: "#DEE1E4", my: "16px"}} />
              <Typography variant="br3" color={Colors.secondaryText}>
                {item.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </SlickSlider>
    </Stack>
  );
}
