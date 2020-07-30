import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "./typography";

const styles = (theme: any) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap" as any,
  },
  imageWrapper: {
    position: "relative" as any,
    display: "block" as any,
    padding: 0,
    borderRadius: 0,
    height: "40vh" as any,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important" as any,
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
      border: "4px solid currentColor" as any,
    },
  },
  imageButton: {
    position: "absolute" as any,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex" as any,
    alignItems: "center" as any,
    justifyContent: "center" as any,
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute" as any,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover" as any,
    backgroundPosition: "center 40%" as any,
  },
  imageBackdrop: {
    position: "absolute" as any,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative" as any,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute" as any,
    bottom: -2,
    left: "calc(50% - 9px)" as any,
    transition: theme.transitions.create("opacity"),
  },
});

function ProjectList(props: any) {
  const { classes } = props;

  const images = props.projects;

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Nabhan Maswood
      </Typography>
      <div className={classes.images}>
        {images.map((image: any) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
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
        ))}
      </div>
    </Container>
  );
}

export default withStyles(styles)(ProjectList);
