import {Stack} from "@mui/material";
import {getter, getSeo} from "@/utils/api";
import {AboutPageListResponseDataItem} from "@/types/REST/api/generated";
import AnimatedText from "@/components/about/AnimatedText";
import Teams from "@/components/about/Teams";
import Timeline from "@/components/about/Timeline";
import Position from "@/components/about/Positions";
export async function generateMetadata() {
  const data = await getSeo(`about-page`);
  return data;
}
export default async function About() {
  const populateProps: string[] = ["description", "team.image", "timeline", "position"];
  const aboutData = await getter<AboutPageListResponseDataItem>(`about-page?populate=${populateProps.join()}`);
  const position = aboutData.data?.attributes?.position;
  const teams = {
    title: aboutData.data?.attributes?.teamTitle,
    team: aboutData.data?.attributes?.team,
    description: aboutData.data?.attributes?.teamDescription,
  };
  const timelines = {
    title: aboutData.data?.attributes?.timelineTitle,
    timeline: aboutData.data?.attributes?.timeline,
  };
  return (
    <Stack sx={{width: "100%", marginTop: {md: "115px", xs: "80px"}}}>
      <AnimatedText text={aboutData.data?.attributes?.description} />
      <Teams title={teams.title} team={teams.team} description={teams.description} />
      <Timeline title={timelines.title} timeline={timelines.timeline} />
      {position && position.length > 0 && (
        <Position title={aboutData.data?.attributes?.positionTitle} position={aboutData.data?.attributes?.position} />
      )}
    </Stack>
  );
}
