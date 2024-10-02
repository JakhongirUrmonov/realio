"use client";
import {Typography, Stack} from "@mui/material";
import {Colors} from "@/ts/consts";
import {AboutTeamMemberComponent} from "@/types/REST/api/generated";
import CustomImage from "@/components/CustomImage";
import TwitterLogo from "@/assets/icons/twitterWhite.svg";
import LinkedinLogo from "@/assets/icons/linkedinWhite.svg";
import Link from "next/link";
import {useState} from "react";
type Props = {
  teamMember?: AboutTeamMemberComponent;
};

export default function TeamMember({teamMember}: Props) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Stack>
      <Stack
        sx={{
          cursor: teamMember?.linkedin || teamMember?.twitter ? "pointer" : undefined,
          transition: "all 0.2s linear",
          position: "relative",
        }}
        onMouseEnter={() => setHover(teamMember?.linkedin || teamMember?.twitter ? true : false)}
        onMouseLeave={() => setHover(false)}
      >
        <CustomImage
          alt=""
          path={teamMember?.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            filter: hover ? "blur(2px)" : undefined,
            transition: "all 0.2s linear",
          }}
        />
        <Stack
          sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            opacity: hover ? "1" : "0",
            transition: "all 0.2s linear",
          }}
        >
          {teamMember?.linkedin && (
            <Stack
              component={Link}
              href={teamMember?.linkedin ?? ""}
              target="_blank"
              sx={{
                "width": "48px",
                "height": "48px",
                "borderRadius": "24px",
                "border": "1px solid rgba(255,255,255,0.16)",
                "backgroundColor": "rgba(255,255,255,0.16)",
                "justifyContent": "center",
                "alignItems": "center",
                "marginRight": "12px",
                "&:hover": {
                  background: "linear-gradient(0deg, rgb(11 25 40 / 10%), rgb(11 25 40 / 10%))",
                },
              }}
            >
              <CustomImage src={LinkedinLogo} style={{width: "16px", height: "16px"}} />
            </Stack>
          )}
          {teamMember?.twitter && (
            <Stack
              component={Link}
              href={teamMember?.twitter ?? ""}
              target="_blank"
              sx={{
                "width": "48px",
                "height": "48px",
                "borderRadius": "24px",
                "border": "1px solid rgba(255,255,255,0.16)",
                "backgroundColor": "rgba(255,255,255,0.16)",
                "justifyContent": "center",
                "alignItems": "center",
                "&:hover": {
                  background: "linear-gradient(0deg, rgb(11 25 40 / 10%), rgb(11 25 40 / 10%))",
                },
              }}
            >
              <CustomImage src={TwitterLogo} style={{width: "16px", height: "16px"}} />
            </Stack>
          )}
        </Stack>
      </Stack>
      <Typography variant="bs3" sx={{marginTop: "16px", marginBottom: "4px"}}>
        {teamMember?.name}
      </Typography>
      <Typography variant="bm4" color={Colors.secondaryText}>
        {teamMember?.position}
      </Typography>
    </Stack>
  );
}
