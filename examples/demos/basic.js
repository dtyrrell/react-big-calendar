import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
const staff = [
  {
    StaffId: "Rebecca",
  },
  {
    StaffId: "Vic",
    Id: "Vic"
  }];

let Basic = props => (
  <BigCalendar
    selectable
    {...props}
    events={events}
    staff={staff}
    views={allViews}
    step={60}
    defaultDate={new Date(2018, 0, 11)}
    onSelectEvent={event => alert(event.StaffId)}
    onSelectSlot={slotInfo =>
      alert(
        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}` +
          `\naction: ${slotInfo.action}`
      )}
  />
)

export default Basic
