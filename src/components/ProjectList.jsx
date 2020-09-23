import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "./typography";
import ProjectModal from "./ProjectModal";

import matStyles from "../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { Tabs, Tab } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

const useStyles2 = makeStyles(matStyles);

const ProjectSizes = [
  "40%",
  "20%",
  "40%",
  "38%",
  "38%",
  "24%",
  "40%",
  "20%",
  "40%",
  "40%",
  "20%",
];

function ProjectList(props) {
  const { classes } = props;
  let [images, setImages] = React.useState([]);
  const materialKitClasses = useStyles2();
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState();
  const handleOpen = (image) => {
    setSelectedProject(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [projectTypeIndex, setProjectTypeIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setProjectTypeIndex(newValue);
  };

  useEffect(() => {
    if (projectTypeIndex === 0) {
      setImages(props.projects);
    } else if (projectTypeIndex === 1) {
      setImages(
        props.projects.filter((project) => project.type === "personal")
      );
    } else {
      setImages(props.projects.filter((project) => project.type === "College"));
    }
  }, [projectTypeIndex]);
  let count = -1;
  return (
    <Container className={classes.root} style={{ width: "100%" }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        className={materialKitClasses.title}
      >
        Nabhan Maswood
      </Typography>
      <ProjectModal
        handleClose={handleClose}
        open={open}
        project={selectedProject}
      ></ProjectModal>
      <Tabs
        value={projectTypeIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="All" />
        <Tab label="Personal" />
        <Tab label="College" />
      </Tabs>
      <div className={classes.images} style={{ margin: 0 }}>
        {images.map((image) => {
          count++;
          return (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: ProjectSizes[count],
              }}
              onClick={() => {
                handleOpen(image);
              }}
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.image})`,
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </ButtonBase>
          );
        })}
      </div>
    </Container>
  );
}

export default withStyles(styles)(ProjectList);
