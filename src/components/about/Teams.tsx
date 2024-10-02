import {Typography, Stack} from "@mui/material";
import {Colors} from "@/ts/consts";
import RoundedTitle from "@/components/home/RoundedTitle";
import {AboutTeamMemberComponent} from "@/types/REST/api/generated";
import SlickSlider from "@/components/about/SlickSlider";
import TeamMember from "./TeamMembers";
type Props = {
  title?: string;
  team?: AboutTeamMemberComponent[];
  description?: string;
};

export default function Teams({title, team, description}: Props) {
  return (
    <Stack
      sx={{
        backgroundColor: Colors.grey10,
        width: "100vw",
        boxSizing: "border-box",
        alignItems: "center",
        paddingY: "80px",
      }}
    >
      <RoundedTitle text={title ?? ""} />
      <SlickSlider
        slideSpace={20}
        slideWidth="16%"
        slideWidthMd="16%"
        slideWidthSm="45%"
        minElementMd={3}
        minElementSm={2}
        minElement={6}
        swiperContainerSx={{marginTop: "48px"}}
      >
        {team?.map((item, key) => (
          <TeamMember teamMember={item} key={key} />
        ))}
      </SlickSlider>
      <Typography
        variant="br1"
        sx={{
          color: Colors.secondaryText,
          marginTop: "90px",
          textAlign: "center",
          width: {lg: "40%", md: "60%", xs: "90%"},
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
