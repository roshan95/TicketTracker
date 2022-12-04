import * as React from "react";
import { Header } from "./components/header";
import { LoginForm } from "./components/login";
import { TicketTimeLine } from "./components/ticket-timeline";
import useToken from "./hooks/useToken";
import getTicketTimeLineData from "./utils/services/getData";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <LoginForm setToken={setToken} />;
  }
  let ticketData = getTicketTimeLineData("123");

  return (
    <>
      <Header></Header>
      {ticketData && <TicketTimeLine props={ticketData}></TicketTimeLine>}
    </>
  );
}
export default App;
