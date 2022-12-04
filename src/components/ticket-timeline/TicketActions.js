import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

TicketActions.propTypes = {
  cancelable: PropTypes.bool,
  reopenable: PropTypes.bool,
};

export default function TicketActions({ props }) {
  const { cancelable, reopenable } = props;
  const handleReopenClick = () => {
    console.log("Reopen button clicked");
  };

  const handleCancelClick = () => {
    console.log("Cancel button clicked");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        mt: 1,
        columnGap: "10px",
      }}
    >
      <Button
        variant="contained"
        disabled={!reopenable}
        onClick={handleReopenClick}
      >
        Reopen
      </Button>
      <Button
        variant="contained"
        disabled={!cancelable}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
    </Box>
  );
}
