import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Divider } from "@mui/material";

import TicketActions from "./TicketActions";
import { fDate } from "../../utils/formatTime";

TicketBasicInfo.propTypes = {
  woNum: PropTypes.number,
  woStatusText: PropTypes.string,
  cancelable: PropTypes.bool,
  reopenable: PropTypes.bool,
  creationDate: PropTypes.string,
};

export default function TicketBasicInfo({ props }) {
  const { woStatusText, woNum, creationDate, cancelable, reopenable } = props;
  let color = "info";
  switch (woStatusText) {
    case "In Progress":
      color = "info";
      break;
    case "completed":
      color = "success";
      break;
    default:
      break;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      }}
    >
      <Card sx={{ width: "100%", padding: "1rem" }}>
        <div>
          <div style={{ display: "flex" }}>
            <h2 style={{ display: "inline-block" }}>Ticket</h2>
            <h2 style={{ color: "grey", marginLeft: "1rem" }}>#{woNum}</h2>
            <div style={{ display: "inline-block", width: "100%" }}>
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <Chip label={woStatusText} color={color} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Created
          </Typography>
          <Typography
            sx={{ fontSize: 14, ml: 2 }}
            color="text.secondary"
            gutterBottom
          >
            {fDate(creationDate)}
          </Typography>
        </Box>

        <Divider sx={{ mt: 4 }} />
        <TicketActions props={{ cancelable, reopenable }}></TicketActions>
      </Card>
    </Box>
  );
}
