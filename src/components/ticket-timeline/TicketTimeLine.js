import PropTypes from "prop-types";
import { Timeline, timelineItemClasses } from "@mui/lab";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ErrorBoundary } from "react-error-boundary";

import TicketBasicInfo from "./TicketBasicInfo";
import TicketTimelineDetails from "./TicketTimelineDetails";
import "../../style/css/TicketTimeline.css";

TicketTimeLine.propTypes = {
  woNum: PropTypes.number,
  woStatusText: PropTypes.string,
  cancelable: PropTypes.bool,
  reopenable: PropTypes.bool,
  creationDate: PropTypes.string,
  activities: PropTypes.array,
};

export default function TicketTimeLine({ props }) {
  const {
    woNum,
    woStatusText,
    cancelable,
    reopenable,
    creationDate,
    activities,
  } = props;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <TicketBasicInfo
              props={{
                woNum: woNum,
                woStatusText: woStatusText,
                creationDate: creationDate,
                cancelable: cancelable,
                reopenable: reopenable,
              }}
            ></TicketBasicInfo>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Card className="Width100">
              <CardHeader title="Ticket History"></CardHeader>

              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    textAlign: "left",
                  },
                  [`& .${timelineItemClasses.root}`]: {
                    "::before": {
                      content: null,
                      flex: 0,
                    },
                  },
                }}
              >
                {activities.map((item, index) => (
                  <TicketTimelineDetails
                    key={index}
                    item={item}
                    isLast={index === activities.length - 1}
                  />
                ))}
              </Timeline>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </ErrorBoundary>
    </>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
