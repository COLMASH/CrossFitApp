import React from "react"
import DayPicker from "react-day-picker"

import 'react-day-picker/lib/style.css';

const birthdayStyle = `.DayPicker-Day--highlighted {
background-color: orange;
  color: white;
}`;

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayMouseEnter(day, { firstOfMonth }) {
    if (firstOfMonth) {
    }
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      window.alert('This day is disabled');
      return;
    }
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }
  render() {
  return (
    <div className="containerPicker">
      <style>{birthdayStyle}</style>
      <DayPicker 
        onDayClick={this.handleDayClick} 
        selectedDays={this.state.selectedDay}
        disabledDays={{ daysOfWeek: [0] }}
        modifiers={{
          sunday: day => day.getDay() === 0,
          firstOfMonth: day => day.getDate() === 1,
        }}
        onDayMouseEnter={this.handleDayMouseEnter}
      />
      {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
    </div>
  )
}
}

export default Schedule