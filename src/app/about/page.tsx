import {Stack} from "@mui/material";
import {getter} from "@/utils/api";
import {AboutPageListResponseDataItem} from "@/types/REST/api/generated";
import AnimatedText from "@/components/about/AnimatedText";
import Teams from "@/components/about/Teams";
import Timeline from "@/components/about/Timeline";
import Position from "@/components/about/Positions";
import {getSeo} from "@/utils/functions";
export async function generateMetadata() {
  const data = await getSeo(`about-page`);
  return data;
}
export default async function About() {
  const populateProps: string[] = ["description", "team.image", "timeline", "position"];
  const aboutData = await getter<AboutPageListResponseDataItem>(`about-page?populate=${populateProps.join()}`);
  return (
    <Stack sx={{width: "100%"}}>
      <AnimatedText text={aboutData.data?.attributes?.description} />
      <Teams
        title={aboutData.data?.attributes?.teamTitle}
        team={aboutData.data?.attributes?.team}
        description={aboutData.data?.attributes?.teamDescription}
      />
      <Timeline title={aboutData.data?.attributes?.timelineTitle} timeline={aboutData.data?.attributes?.timeline} />
      <Position title={aboutData.data?.attributes?.positionTitle} position={aboutData.data?.attributes?.position} />
    </Stack>
  );
}
