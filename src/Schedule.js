import PropTypes from 'prop-types'
import React from 'react'

import dates from './utils/dates'
import { navigate } from './utils/constants'
import TimeGrid from './TimeGrid'
import localizer from './localizer'

class Schedule extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  }

  render() {
    let { date, ...props } = this.props

    return (
      <TimeGrid
        {...props}
        range={[dates.startOf(date, 'day')]}
        staff={[
          { Id: 'Paul' },
          { Id: 'Johnny' },
          { Id :'Tom' } ]}
        eventOffset={10}
      />
    )
  }
}

Schedule.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'day')

    case navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date
  }
}

Schedule.title = (date, { formats, culture }) =>
  localizer.format(date, formats.dayHeaderFormat, culture)

export default Schedule
