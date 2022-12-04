import ticketTimelineData from "../../_mock/dummyTicketData.json";

const getTicketTimeLineData = ({ id }) => {
  return Object.keys(ticketTimelineData).length !== 0
    ? ticketTimelineData
    : '';
};
export default getTicketTimeLineData;
