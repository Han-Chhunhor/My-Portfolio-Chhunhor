import React, { useState, useEffect } from 'react';

// ==================== DATA ====================
const DAYS = ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'];

const PATTERNS = {
  // ចន្ទ - អង្គារ - ព្រហស្បតិ៍ - សុក្រ (ធ្វើការ 9-5 + រៀន 5:30-8:30)
  WORK_STUDY: {
    label: 'ធ្វើការ + រៀន',
    color: 'bg-blue-50 border-blue-200',
    slots: [
      { time: '០៨:០០ - ០៩:០០', activity: 'ភ្ញាក់ពីគេង & អាហារពេលព្រឹក', type: 'routine' },
      { time: '០៩:០០ - ១២:០០', activity: '💼 ធ្វើការ (ពេលព្រឹក)', type: 'work' },
      { time: '១២:០០ - ១៣:០០', activity: 'អាហារថ្ងៃត្រង់ & សម្រាក', type: 'break' },
      { time: '១៣:០០ - ១៧:០០', activity: '💼 ធ្វើការ (ពេលរសៀល)', type: 'work' },
      { time: '១៧:០០ - ១៧:៣០', activity: 'សម្រាក & រៀបចំខ្លួន', type: 'break' },
      { time: '១៧:៣០ - ២០:៣០', activity: '📚 រៀន (Study Time)', type: 'study' },
      { time: '២០:៣០ - ២២:០០', activity: 'អាហារពេលល្ងាច & សម្រាក', type: 'routine' },
      { time: '២២:០០ - ២៣:៣០', activity: '🎮 ពេលទំនេរ (តាមចំណូលចិត្ត)', type: 'free' },
      { time: '២៣:៣០ - ០០:០០', activity: 'រៀបចំខ្លួនចូលគេង', type: 'routine' },
    ]
  },
  // ថ្ងៃពុធ (សម្រាក)
  OFF: {
    label: 'ថ្ងៃសម្រាក 🎉',
    color: 'bg-green-50 border-green-200',
    slots: [{ time: 'ពេញមួយថ្ងៃ', activity: 'សម្រាក, ដើរកម្សាន្ត, ឬគេងពេញមួយថ្ងៃ!', type: 'off' }]
  },
  // ថ្ងៃសៅរ៍ (ធ្វើការ 9-5 គ្មានរៀន)
  WORK_ONLY_SAT: {
    label: 'ធ្វើការ (គ្មានរៀន)',
    color: 'bg-purple-50 border-purple-200',
    slots: [
      { time: '០៨:០០ - ០៩:០០', activity: 'ភ្ញាក់ & អាហារពេលព្រឹក', type: 'routine' },
      { time: '០៩:០០ - ១២:០០', activity: '💼 ធ្វើការ (ពេលព្រឹក)', type: 'work' },
      { time: '១២:០០ - ១៣:០០', activity: 'អាហារថ្ងៃត្រង់ & សម្រាក', type: 'break' },
      { time: '១៣:០០ - ១៧:០០', activity: '💼 ធ្វើការ (ពេលរសៀល)', type: 'work' },
      { time: '១៧:០០ - ១៩:០០', activity: '🏃 ហាត់ប្រាណ & អាហារពេលល្ងាច', type: 'health' },
      { time: '១៩:០០ - ២៣:៣០', activity: '🎮 ពេលទំនេរ (តាមចំណូលចិត្ត)', type: 'free' },
      { time: '២៣:៣០ - ០០:០០', activity: 'រៀបចំខ្លួនចូលគេង', type: 'routine' },
    ]
  },
  // ថ្ងៃអាទិត្យ (ធ្វើការ 1PM-9PM)
  WORK_SUNDAY: {
    label: 'ធ្វើការវេនរសៀល 🌙',
    color: 'bg-indigo-50 border-indigo-200',
    slots: [
      { time: '០៨:០០ - ០៩:០០', activity: 'ភ្ញាក់ & អាហារពេលព្រឹក', type: 'routine' },
      { time: '០៩:០០ - ១២:០០', activity: '🎮 ពេលទំនេរ / សម្រាក', type: 'free' },
      { time: '១២:០០ - ១៣:០០', activity: 'អាហារថ្ងៃត្រង់ & រៀបចំខ្លួន', type: 'routine' },
      { time: '១៣:០០ - ១៧:០០', activity: '💼 ធ្វើការ (ពេលរសៀល)', type: 'work' },
      { time: '១៧:០០ - ១៨:០០', activity: 'អាហារពេលល្ងាច', type: 'routine' },
      { time: '១៨:០០ - ២១:០០', activity: '💼 ធ្វើការ (ពេលយប់)', type: 'work' },
      { time: '២១:០០ - ២៣:៣០', activity: '🎮 សម្រាក / ពេលទំនេរ', type: 'free' },
      { time: '២៣:៣០ - ០០:០០', activity: 'រៀបចំខ្លួនចូលគេង', type: 'routine' },
    ]
  }
};

const getPatternForDay = (index) => {
  // index: 0=អាទិត្យ, 1=ចន្ទ, 2=អង្គារ, 3=ពុធ, 4=ព្រហស្បតិ៍, 5=សុក្រ, 6=សៅរ៍
  if (index === 3) return 'OFF';           // ថ្ងៃពុធ - សម្រាក
  if (index === 6) return 'WORK_ONLY_SAT'; // ថ្ងៃសៅរ៍ - ធ្វើការ 9-5 (គ្មានរៀន)
  if (index === 0) return 'WORK_SUNDAY';   // ថ្ងៃអាទិត្យ - ធ្វើការ 1-9
  return 'WORK_STUDY';                     // ចន្ទ អង្គារ ព្រហស្បតិ៍ សុក្រ
};

// ==================== COMPONENT ====================
const Schedule = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(new Date().getDay());
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
      setCurrentDayIndex(now.getDay());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const isActiveSlot = (timeStr, dayIndex) => {
    if (dayIndex !== currentDayIndex) return false;
    if (timeStr === 'ពេញមួយថ្ងៃ') return true;

    const startPart = timeStr.split(' - ')[0].trim();
    const khmerToArabic = (str) => {
      const map = { '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4', '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9' };
      return str.replace(/[០-៩]/g, (m) => map[m]);
    };
    const arabicStr = khmerToArabic(startPart);
    const [hourStr, minuteStr] = arabicStr.split(':');
    const startHour = parseInt(hourStr, 10);
    const startMinute = parseInt(minuteStr, 10);

    // Check if current time is within this slot
    const currentTotalMinutes = currentHour * 60 + currentMinute;
    const slotStartMinutes = startHour * 60 + startMinute;
    
    // Simple highlight: if current hour matches start hour
    return currentHour === startHour || (currentHour === (startHour + 1) % 24 && currentMinute < 30);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
          📅 កាលវិភាគប្រចាំសប្តាហ៍
        </h1>
        <p className="text-center text-gray-500 text-sm sm:text-base mt-1">
          ធ្វើការ ចន្ទ-សៅរ៍ ០៩:០០-១៧:០០ · អាទិត្យ ១៣:០០-២១:០០
        </p>
        <p className="text-center text-blue-600 text-sm sm:text-base mt-1">
          📚 រៀន ចន្ទ-សុក្រ ១៧:៣០-២០:៣០
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {DAYS.map((dayName, index) => {
          const patternKey = getPatternForDay(index);
          const pattern = PATTERNS[patternKey];
          const isToday = index === currentDayIndex;

          return (
            <div
              key={index}
              className={`rounded-xl shadow-sm border-2 p-4 sm:p-5 transition-all duration-200 ${
                isToday 
                  ? 'ring-4 ring-blue-400 ring-offset-2 scale-[1.02] shadow-lg border-blue-400' 
                  : 'hover:shadow-md hover:scale-[1.01]'
              } ${pattern.color}`}
            >
              {/* Day Header */}
              <div className="flex flex-wrap justify-between items-start gap-2 border-b border-gray-200 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700">
                    {dayName}
                  </h2>
                  {isToday && (
                    <span className="text-[10px] sm:text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                      ថ្ងៃនេះ
                    </span>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-500 bg-white/70 px-2 py-1 rounded-full whitespace-nowrap">
                  {pattern.label}
                </span>
              </div>

              {/* Time Slots */}
              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
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
                      className={`text-[11px] sm:text-xs md:text-sm p-2 sm:p-2.5 rounded-lg border ${borderColor} ${bgColor} ${textColor} transition-all duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2`}
                    >
                      <span className="font-mono font-semibold whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                        {slot.time}
                      </span>
                      <span className="font-medium leading-tight break-words flex-1 min-w-0">
                        {slot.activity}
                      </span>
                      {active && isToday && (
                        <span className="text-[8px] sm:text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap">
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

      {/* Legend - Responsive */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
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

export default Schedule;