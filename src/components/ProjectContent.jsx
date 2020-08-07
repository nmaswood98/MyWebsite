import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";

import styles from "../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import ImageCarousel from "./ImageCarousel.jsx";
import Badge from "./Badge/Badge.js";
import Button from "components/CustomButtons/Button.js";
import TechBadges from "./TechBadges.jsx";
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
      <Grid container md={7} sm={12} className={classes.paper}>
        <div
          id="ICON"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CloseIcon style={{ visibility: "hidden" }} />
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={materialKitClasses.title}>
              {props?.project?.title}
            </h2>
          </GridItem>

          <CloseIcon
            onClick={() => {
              props.handleClose();
            }}
          />
        </div>
        <GridItem className={classes.center}>
          <GridItem xs={12} sm={12} md={6} style={{ marginBottom: 10 }}>
            <TechBadges
              technology={props.project == null ? "" : props.project.technology}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 id="transition-modal-description">
              {props?.project?.description}
            </h4>
          </GridItem>

          <ImageCarousel />
          <GridItem
            xs={12}
            sm={12}
            md={8}
            style={{ marginTop: 20, marginBottom: 10 }}
          >
            <p id="transition-modal-description">
              {`${props?.project?.description2}`}
            </p>
          </GridItem>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            {props?.project?.buttons.map((buttonInfo) => (
              <Button
                color={buttonInfo.color}
                onClick={() => {
                  window.open(buttonInfo.url);
                }}
              >
                {buttonInfo.title}
              </Button>
            ))}
          </div>
        </GridItem>
      </Grid>
    </Fade>
  );
}
