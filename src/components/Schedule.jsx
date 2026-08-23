import React from 'react';
import React from 'react';
import React, { useState, useEffect } from 'react';

// ==================== DATA ====================
const DAYS = ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'];

// Patterns mapping
const PATTERNS = {
  WORK_STUDY: {
    label: 'ធ្វើការ + រៀន',
    color: 'bg-blue-50 border-blue-200',
    slots: [
      { time: '០៨:០០ - ០៨:៣០', activity: 'ភ្ញាក់ពីគេង & រៀបចំខ្លួន', type: 'routine' },
      { time: '០៨:៣០ - ០៩:០០', activity: 'អាហារពេលព្រឹក & កំណត់ផែនការថ្ងៃ', type: 'routine' },
      { time: '០៩:០០ - ១២:០០', activity: '💼 ធ្វើការ (Deep Focus)', type: 'work' },
      { time: '១២:០០ - ១៣:០០', activity: 'អាហារថ្ងៃត្រង់ & សម្រាក', type: 'break' },
      { time: '១៣:០០ - ១៧:០០', activity: '💼 ធ្វើការ (កិច្ចការរដ្ឋបាល/ប្រជុំ)', type: 'work' },
      { time: '១៧:០០ - ១៨:០០', activity: '🏃 ហាត់ប្រាណ / សម្រាកលំហែ', type: 'health' },
      { time: '១៨:០០ - ១៩:០០', activity: 'អាហារពេលល្ងាច', type: 'routine' },
      { time: '១៩:០០ - ២១:០០', activity: '📚 ពេលរៀន (Study Time)', type: 'study' },
      { time: '២១:០០ - ២៣:៣០', activity: '🎮 ពេលទំនេរ (តាមចំណូលចិត្ត)', type: 'free' },
      { time: '២៣:៣០ - ០០:០០', activity: 'រៀបចំខ្លួនចូលគេង & សរសេរ Journal', type: 'routine' },
    ]
  },
  OFF: {
    label: 'ថ្ងៃសម្រាក 🎉',
    color: 'bg-green-50 border-green-200',
    slots: [{ time: 'ពេញមួយថ្ងៃ', activity: 'សម្រាក, ដើរកម្សាន្ត, ឬគេងពេញមួយថ្ងៃ!', type: 'off' }]
  },
  WORK_FREE: { // Saturday
    label: 'ធ្វើការ + សម្រាក',
    color: 'bg-purple-50 border-purple-200',
    slots: [
      { time: '០៨:០០ - ០៩:០០', activity: 'ភ្ញាក់ & អាហារពេលព្រឹក', type: 'routine' },
      { time: '០៩:០០ - ១២:០០', activity: '💼 ធ្វើការ (ពេលព្រឹក)', type: 'work' },
      { time: '១២:០០ - ១៣:០០', activity: 'អាហារថ្ងៃត្រង់', type: 'break' },
      { time: '១៣:០០ - ១៧:០០', activity: '💼 ធ្វើការ (ពេលរសៀល)', type: 'work' },
      { time: '១៧:០០ - ១៩:០០', activity: '🏃 ហាត់ប្រាណ & អាហារពេលល្ងាច', type: 'health' },
      { time: '១៩:០០ - ២៣:៣០', activity: '🎮 ពេលទំនេរ (តាមចំណូលចិត្ត)', type: 'free' },
      { time: '២៣:៣០ - ០០:០០', activity: 'រៀបចំខ្លួនចូលគេង', type: 'routine' },
    ]
  },
  NIGHT_WORK: { // Sunday
    label: 'វេនយប់ 🌙',
    color: 'bg-indigo-50 border-indigo-200',
    slots: [
      { time: '០៨:០០ - ០៩:៣០', activity: 'គេងបន្ថែម & អាហារពេលព្រឹក', type: 'routine' },
      { time: '០៩:៣០ - ១៧:០០', activity: '🎮 ពេលទំនេរ / សម្រាក (តាមចំណូលចិត្ត)', type: 'free' },
      { time: '១៧:០០ - ១៨:០០', activity: 'អាហារពេលល្ងាច & រៀបចំខ្លួន', type: 'routine' },
      { time: '១៨:០០ - ០០:០០', activity: '💼 ធ្វើការវេនយប់', type: 'work' },
    ]
  }
};

// Map each day index to a pattern
const getPatternForDay = (index) => {
  // index: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  if (index === 3) return 'OFF'; // Wednesday
  if (index === 6) return 'WORK_FREE'; // Saturday
  if (index === 0) return 'NIGHT_WORK'; // Sunday
  return 'WORK_STUDY'; // Mon, Tue, Thu, Fri
};

// ==================== COMPONENT ====================
const Schedule = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(new Date().getDay());
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
      setCurrentDayIndex(now.getDay()); // Update day if midnight passes
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Helper to check if a time slot is currently active (only for today)
  const isActiveSlot = (timeStr, dayIndex) => {
    if (dayIndex !== currentDayIndex) return false;
    if (timeStr === 'ពេញមួយថ្ងៃ') return true;
    
    // Parse time like "០៩:០០ - ១២:០០" -> extract start hour
    const startPart = timeStr.split(' - ')[0].trim();
    // Convert Khmer digits to Arabic digits for parsing
    const khmerToArabic = (str) => {
      const map = { '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4', '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9' };
      return str.replace(/[០-៩]/g, (m) => map[m]);
    };
    const arabicStr = khmerToArabic(startPart);
    const [hourStr, minuteStr] = arabicStr.split(':');
    const startHour = parseInt(hourStr, 10);
    const startMinute = parseInt(minuteStr, 10);

    // Handle midnight (00:00)
    const slotStartMinutes = (startHour === 24 ? 0 : startHour) * 60 + (startHour === 24 ? 0 : startMinute);
    const currentTotalMinutes = currentHour * 60 + currentMinute;

    // Check if current time is within this slot (start hour <= current hour < next slot start hour)
    // For simplicity, highlight if current hour matches the start hour
    return currentHour === startHour || (currentHour === (startHour + 1) % 24 && currentMinute < 30);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
        📅 កាលវិភាគប្រចាំសប្តាហ៍
      </h1>
      <p className="text-center text-gray-500 mb-6">
        ភ្ញាក់ពីគេង ០៨:០០ ព្រឹក · ចូលគេង ០០:០០ អធ្រាត្រ
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {DAYS.map((dayName, index) => {
          const patternKey = getPatternForDay(index);
          const pattern = PATTERNS[patternKey];
          const isToday = index === currentDayIndex;

          return (
            <div
              key={index}
              className={`rounded-xl shadow-sm border-2 p-4 transition-all duration-200 ${
                isToday ? 'ring-4 ring-blue-400 ring-offset-2 scale-[1.02] shadow-lg' : 'hover:shadow-md'
              } ${pattern.color}`}
            >
              {/* Day Header */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
                <h2 className="text-xl font-bold text-gray-700">
                  {dayName}
                  {isToday && <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">ថ្ងៃនេះ</span>}
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-white/60 px-2 py-1 rounded-full">
                  {pattern.label}
                </span>
              </div>

              {/* Time Slots */}
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
                {pattern.slots.map((slot, idx) => {
                  const active = isActiveSlot(slot.time, index);
                  let bgColor = 'bg-white/60';
                  let borderColor = 'border-transparent';
                  let textColor = 'text-gray-700';
                  
                  if (slot.type === 'work') { bgColor = 'bg-red-50/80'; borderColor = 'border-red-200'; textColor = 'text-red-800'; }
                  else if (slot.type === 'study') { bgColor = 'bg-yellow-50/80'; borderColor = 'border-yellow-200'; textColor = 'text-yellow-800'; }
                  else if (slot.type === 'free') { bgColor = 'bg-green-50/80'; borderColor = 'border-green-200'; textColor = 'text-green-800'; }
                  else if (slot.type === 'health') { bgColor = 'bg-blue-50/80'; borderColor = 'border-blue-200'; textColor = 'text-blue-800'; }
                  else if (slot.type === 'off') { bgColor = 'bg-emerald-100/80'; borderColor = 'border-emerald-300'; textColor = 'text-emerald-800'; }
                  
                  if (active && isToday) {
                    bgColor = 'bg-blue-200/80 ring-2 ring-blue-500';
                    textColor = 'text-blue-900 font-bold';
                  }

                  return (
                    <div
                      key={idx}
                      className={`text-xs md:text-sm p-2 rounded-lg border ${borderColor} ${bgColor} ${textColor} transition-all duration-300 flex flex-col md:flex-row md:justify-between md:items-center gap-1`}
                    >
                      <span className="font-mono font-semibold whitespace-nowrap">{slot.time}</span>
                      <span className="font-medium leading-tight">{slot.activity}</span>
                      {active && isToday && (
                        <span className="text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full animate-pulse">
                          ● កំពុងកើតឡើង
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-red-100 border border-red-200 rounded"></span> ការងារ</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-yellow-100 border border-yellow-200 rounded"></span> រៀន</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-green-100 border border-green-200 rounded"></span> ពេលទំនេរ</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-blue-100 border border-blue-200 rounded"></span> ហាត់ប្រាណ</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-emerald-100 border border-emerald-300 rounded"></span> ថ្ងៃសម្រាក</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-blue-200 ring-2 ring-blue-500 rounded"></span> ម៉ោងបច្ចុប្បន្ន</span>
      </div>
    </div>
  );
};

export default Schedule;, useEffect, useState, { useEffect, useState }