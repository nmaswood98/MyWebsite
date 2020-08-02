import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GridItem from "components/Grid/GridItem.js";

import styles from "../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import ImageCarousel from "./ImageCarousel.jsx";
import Badge from "./Badge/Badge.js";
import Button from "components/CustomButtons/Button.js";
import TechBadges from "./TechBadges.jsx";
import ProjectContent from "./ProjectContent.jsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      display: "flex",
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

export default function ProjectModal(props) {
  const classes = useStyles();
  const materialKitClasses = useStyles2();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ProjectContent
          project={props.project}
          open={props.open}
          handleClose={props.handleClose}
        />
      </Modal>
    </div>
  );
}
