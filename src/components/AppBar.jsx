import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const toolbarStyles = (theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
});

const styles = (theme) => ({
  title: {
    fontSize: 24,
    lineHeight: 1.6,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppBar(props) {
  const { classes } = props;

  return (
    <div>
      <MuiAppBar elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.center}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
            >
              {"Nabhan Maswood"}
            </Link>
          </div>
        </Toolbar>
      </MuiAppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
