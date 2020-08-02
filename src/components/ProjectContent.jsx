import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";

import styles from "../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import ImageCarousel from "./ImageCarousel.jsx";
import Badge from "./Badge/Badge.js";
import Button from "components/CustomButtons/Button.js";
import TechBadges from "./TechBadges.jsx";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) =>
  createStyles({
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      dispplay: "flex",
      outline: 0,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "50%",
      height: "80%",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center",
    },
  })
);

const useStyles2 = makeStyles(styles);

export default function ProjectContent(props) {
  const classes = useStyles();
  const materialKitClasses = useStyles2();
  return (
    <Fade in={props.open}>
      <div className={classes.paper} id="MODALCONTENT">
        <div className={classes.center}>
          <GridItem xs={12} sm={12} md={8}>
            <h2
              className={materialKitClasses.title}
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              {props?.project?.title}
            </h2>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} style={{ marginBottom: 20 }}>
            <TechBadges
              technology={props.project == null ? "" : props.project.technology}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8} style={{ marginBottom: 20 }}>
            <h4 id="transition-modal-description">
              {props?.project?.description}
            </h4>
          </GridItem>

          <ImageCarousel />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 30,
            }}
          >
            <Button color="info">View Project</Button>
            <Button color="success">GitHub</Button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
