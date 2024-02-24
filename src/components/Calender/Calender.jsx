// src/Calendar.js
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const daysInMonth = currentMonth.daysInMonth();
  const today = dayjs();

  useEffect(() => {
    dayjs.locale("en");
  }, []);

  const generateCalendar = () => {
    const firstDayOfMonth = currentMonth.startOf("month").day();

    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );

    const prevMonthDays = Array.from(
      { length: firstDayOfMonth },
      (_, index) => ({
        day:
          dayjs(currentMonth).subtract(1, "month").endOf("month").date() -
          index,
        isCurrentMonth: false,
      })
    );

    const nextMonthDays = Array.from(
      { length: 42 - (daysInMonth + firstDayOfMonth) },
      (_, index) => ({
        day: index + 1,
        isCurrentMonth: false,
      })
    );

    const currentMonthDays = daysArray.map((day) => ({
      day,
      isCurrentMonth: true,
    }));

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  return (
    <div className=" mx-auto  ">
      <div className="text-medium font-bold mb-4">
        {currentMonth.format("MMMM YYYY")}
      </div>
      <hr />
      <div className="grid grid-cols-7  gap-9">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {generateCalendar().map((dateInfo) => (
          <div
            key={dateInfo.day}
            className={`text-center ${
              dateInfo.isCurrentMonth
                ? dateInfo.day === today.date() &&
                  currentMonth.isSame(today, "month")
                  ? " text-green-700"
                  : "hover:bg-gray-200"
                : "text-gray-500"
            }`}
          >
            {dateInfo.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
