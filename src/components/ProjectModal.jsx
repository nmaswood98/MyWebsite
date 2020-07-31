import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) =>
  createStyles({
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
      height: "50%",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center",
    },
  })
);

export default function ProjectModal(props) {
  const classes = useStyles();

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
        <Fade in={props.open}>
          <div className={classes.paper} id="MODALCONTENT">
            <div>
              <h2 id="transition-modal-title">{props?.project?.title}</h2>
              <p id="transition-modal-description">
                Description of the project
              </p>
              <p id="transition-modal-description">
                Link to Github if provided
              </p>
              <p id="transition-modal-description">
                Link to Github if provided
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
