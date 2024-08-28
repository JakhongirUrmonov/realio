"use client";
import React, {MutableRefObject, useEffect, useState} from "react";
import parse, {DOMNode, domToReact, Element} from "html-react-parser";
import {Typography, Link, Stack, StackProps} from "@mui/material";
import {theme} from "@/ts/theme";
import {Colors} from "@/ts/consts";
// import {Element} from "domhandler/lib/esm";

type Margins = {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  p?: string;
  ul?: string;
  ol?: string;
};

type HtmlStringParserProps = StackProps & {
  htmlString?: string;
  textTopMargins?: Margins;
  refs?: MutableRefObject<HTMLDivElement | null>;
};

const defaultTopMargins: Margins = {
  h1: "0px",
  h2: "0px",
  h3: "0px",
  h4: "0px",
  p: "18px",
  ul: "18px",
  ol: "18px",
};

const HtmlStringParser: React.FC<HtmlStringParserProps> = (props) => {
  const {textTopMargins, htmlString, ...stackProps} = props;
  const [margins, setMargins] = useState(defaultTopMargins);

  useEffect(() => {
    if (textTopMargins) {
      setMargins((prevMargins) => ({...prevMargins, ...textTopMargins}));
    }
  }, [textTopMargins]);

  const replace = (domNode: DOMNode) => {
    if (domNode instanceof Element) {
      switch (domNode.name) {
        case "h1":
          return (
            <Typography variant="h1" marginTop={margins.h1}>
              {domToReact(domNode.children, {replace})}
            </Typography>
          );
        case "h2":
          return (
            <Typography variant="h2" marginTop={margins.h2}>
              {domToReact(domNode.children, {replace})}
            </Typography>
          );
        case "h3":
          return (
            <Typography variant="h3" marginTop={margins.h3}>
              {domToReact(domNode.children, {replace})}
            </Typography>
          );
        case "h4":
          return (
            <Typography variant="h4" marginTop={margins.h4}>
              {domToReact(domNode.children, {replace})}
            </Typography>
          );
        case "p":
          return (
            <Typography variant={"br2"} color={Colors.secondaryText} marginTop={margins.p}>
              {domToReact(domNode.children, {replace})}
            </Typography>
          );
        case "span":
          return <Typography component="span">{domToReact(domNode.children, {replace})}</Typography>;
        case "a":
          return (
            <Link {...domNode.attribs} target="_blank">
              {domToReact(domNode.children, {replace})}
            </Link>
          );
          case "ul":
            return (
              <Typography component="ul" marginTop={margins.ul} sx={{ paddingLeft: theme.spacing(3), listStyleType: 'disc' }}>
                {domToReact(domNode.children, { replace })}
              </Typography>
            );
          case "ol":
            return (
              <Typography component="ol" marginTop={margins.ol} sx={{ paddingLeft: theme.spacing(3), listStyleType: 'decimal' }}>
                {domToReact(domNode.children, { replace })}
              </Typography>
            );
          case "li":
            return (
              <Typography component="li" variant="br2" sx={{ marginBottom: theme.spacing(1),color:Colors.secondaryText }}>
                {domToReact(domNode.children, { replace })}
              </Typography>
            );
          default:
            return null;
      }
    }
  };

  const parseText = () => {
    if (htmlString) {
      return parse(htmlString, {replace});
    }
    return null;
  };

  return (
    <Stack ref={props.refs} {...stackProps} fontFamily={theme.typography.fontFamily} fontSize={theme.typography.fontSize}>
      {parseText()}
    </Stack>
  );
};

export default HtmlStringParser;
