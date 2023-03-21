import {
  CountdownContainer,
  CountdownItemDivider,
  CountdownItemNumber,
} from "@/styles/pages/Home/components/countdown";
import { intervalToDuration, nextDay, startOfToday } from "date-fns";
import { useState } from "react";

export function Countdown() {
  const [daysInterval, setDaysInterval] = useState(0);
  const [hoursInterval, setHoursInterval] = useState(0);
  const [minutesInterval, setMinutesInterval] = useState(0);
  const [secondsInterval, setSecondsInterval] = useState(0);

  setInterval(() => {
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: new Date(),
      end: nextDay(startOfToday(), 1),
    });
    setDaysInterval(days || 0);
    setHoursInterval(hours || 0);
    setMinutesInterval(minutes || 0);
    setSecondsInterval(seconds || 0);
  }, 1000);

  return (
    <CountdownContainer>
      <CountdownItemNumber>
        {String(daysInterval).padStart(2, "0")}
      </CountdownItemNumber>
      <CountdownItemDivider>:</CountdownItemDivider>
      <CountdownItemNumber>
        {String(hoursInterval).padStart(2, "0")}
      </CountdownItemNumber>
      <CountdownItemDivider>:</CountdownItemDivider>
      <CountdownItemNumber>
        {String(minutesInterval).padStart(2, "0")}
      </CountdownItemNumber>
      <CountdownItemDivider>:</CountdownItemDivider>
      <CountdownItemNumber>
        {String(secondsInterval).padStart(2, "0")}
      </CountdownItemNumber>
    </CountdownContainer>
  );
}
