import {
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
} from "@mui/lab";
import PropTypes from "prop-types";
import { Typography, Card } from "@mui/material";

import { fDate } from "../../utils/formatTime";

TicketTimelineDetails.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.object,
};

export default function TicketTimelineDetails({ item, isLast }) {
  const {
    activityCode,
    status,
    activityStart,
    activityFinish,
    customerMessage,
  } = item;
  function getCompletedFormat() {
    return (
      <>
        <TimelineOppositeContent>
          <Card sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">{activityCode}</Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "text.disabled", display: "block" }}
            >
              Started {fDate(activityStart?.startDate || "")} at{" "}
              {activityStart?.startTime || ""}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "text.disabled", display: "block" }}
            >
              Finished {fDate(activityFinish?.finishDate || "")} at{" "}
              {activityFinish?.finishTime || ""}
            </Typography>

            <Typography
              display="inline"
              variant="subtitle2"
              sx={{ color: "text.secondary" }}
            >
              Comment: &emsp;
            </Typography>
            <Typography
              display="inline"
              variant="subtitle2"
              sx={{ color: "text.primary" }}
            >
              {customerMessage}
            </Typography>
          </Card>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color={
              (status === "completed" && "success") ||
              (status !== "completed" && "info") ||
              "error"
            }
          />
          {isLast ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </>
    );
  }
  function getProgressFormat() {
    return (
      <>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color={
              (status === "completed" && "success") ||
              (status !== "completed" && "info") ||
              "error"
            }
          />
          {isLast ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Card sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">{activityCode}</Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "text.disabled", display: "block" }}
            >
              Started {fDate(activityStart?.startDate || "")} at{" "}
              {activityStart?.startTime || ""}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: "text.disabled", display: "block" }}
            >
              Finished {fDate(activityFinish?.finishDate || "")} at{" "}
              {activityFinish.finishTime}
            </Typography>

            <Typography
              display="inline"
              variant="subtitle2"
              sx={{ color: "text.secondary" }}
            >
              Comment: &emsp;
            </Typography>
            <Typography
              display="inline"
              variant="subtitle2"
              sx={{ color: "text.primary" }}
            >
              {customerMessage}
            </Typography>
          </Card>
        </TimelineContent>
      </>
    );
  }
  const timelineItem =
    status === "completed" ? getCompletedFormat() : getProgressFormat();
  return <TimelineItem position="right">{timelineItem}</TimelineItem>;
}
