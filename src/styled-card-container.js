import React from "react";
import { Card } from "@material-ui/core";
import { palette, typography } from "./themes";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((t) => {
  const theme = {
    ...t,
    typography: {
      ...t.typography,
      ...typography,
    },
    palette: {
      ...t.palette,
      ...palette,
    },
  };

  return {
    style1: {
      width: "100%",
      backgroundImage: `linear-gradient(#fff, ${theme.palette.grey[50]})`,
      border: `1px solid ${theme.palette.grey[400]}`,
      boxShadow: theme.palette.shadow[10],
      "&:hover": {
        transition: "all .3s",
        border: `1px solid ${theme.palette.grey[600]}`,
        boxShadow: theme.palette.shadow[20],
      },
    },
    style2: {
      width: "100%",
      backgroundImage: `linear-gradient(#fff, ${theme.palette.grey[50]})`,
      border: `1px solid ${theme.palette.grey[400]}`,
      boxShadow: theme.palette.shadow[10],
      "&:hover": {
        transition: "all .3s",
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.palette.shadow[20],
      },
    },
    style3: {
      width: "100%",
      backgroundImage: (props) =>
        `linear-gradient(${fade(theme.palette.grey[600], 0)}, #000), url(${props.image})`,
      backgroundPosition: "center center",
      backgroundSize: "100% auto",
      transition: "background-size 0.6s ease-out",
      color: "white",
      //border: `1px solid ${theme.palette.grey[400]}`,
      boxShadow: theme.palette.shadow[10],
      "&:hover": {
        transition: "all .6s",
        //border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.palette.shadow[30],
        backgroundSize: "105% auto",
      },
    },
  };
});

const StyledCardContainer = ({ pattern, clickable, onClick, children }) => {
  const whichStyle = "style" + pattern.style;
  const classes = useStyles(pattern);
  return (
    <Card
      className={classes[whichStyle]}
      elevation={0}
      onClick={clickable && onClick}
    >
      {children}
    </Card>
  );
};

StyledCardContainer.propTypes = {
  onClick: PropTypes.func,
};

StyledCardContainer.defaultProps = {
  onClick: () => alert("this is a default onClick message."),
  clickable: false,
  pattern: {
    style: 1,
    backgroundImage: "none",
  },
};

export default StyledCardContainer;
