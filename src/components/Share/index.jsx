import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  LinkedinIcon,
  PinterestIcon,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
} from "react-share";

import React from "react";
import { Grid } from "@material-ui/core";

const ShareComponent = ({ exampleImage }) => {
  const shareUrl = String(window.location);
  const title = "Habitat Sartorial's New Blog Post!";
  const description = "Todo";
  const hashtags = [
    "habitatsartorial",
    "habitatforhumanity",
    "merchwithacause",
    "nonprofit",
  ];
  const size = 40;

  const buttons = [
    <TwitterShareButton
      url={shareUrl}
      title={title}
      via={"ha317at"}
      hashtags={hashtags}
      related={["@ha317at"]}
    >
      <TwitterIcon size={size} round />
    </TwitterShareButton>,
    <LinkedinShareButton
      url={shareUrl}
      title={title}
      summary={description}
      source="habitatsartorial.org"
    >
      <LinkedinIcon size={size} round />
    </LinkedinShareButton>,
    <FacebookShareButton
      url={shareUrl}
      quote={title}
      hashtag="#habitatsartorial"
    >
      <FacebookIcon size={size} round />
    </FacebookShareButton>,
    <PinterestShareButton
      url={shareUrl}
      media={exampleImage}
      description={description}
    >
      <PinterestIcon size={size} round />
    </PinterestShareButton>,
    <EmailShareButton url={shareUrl} subject={title} body={description}>
      <EmailIcon size={size} round />
    </EmailShareButton>,
  ];

  return (
    <Grid
      container
      spacing={2}
      justify="flex-end"
      alignItems="center"
      direction="row"
    >
      {buttons.map((button, index) => (
        <Grid item key={index}>
          {button}
        </Grid>
      ))}
    </Grid>
  );
};

export default ShareComponent;
