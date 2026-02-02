"use client"; 

export default function WorkingHours() {
  const todayIndex = new Date().getDay(); 

  const schedule = [
    { day: "Неділя", time: "10:00 - 18:00", id: 0 },
    { day: "Понеділок", time: "09:00 - 20:00", id: 1 },
    { day: "Вівторок", time: "09:00 - 20:00", id: 2 },
    { day: "Середа", time: "09:00 - 20:00", id: 3 },
    { day: "Четвер", time: "09:00 - 20:00", id: 4 },
    { day: "П'ятниця", time: "09:00 - 20:00", id: 5 },
    { day: "Субота", time: "10:00 - 18:00", id: 6 },
  ];

  return (
    <div className="flex flex-col min-w-50">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg uppercase">
        Графік роботи
      </h3>

      <ul className="space-y-2 text-sm">
        {schedule.map((item) => {
          const isToday = todayIndex === item.id;

          return (
            <li 
              key={item.day} 
              className={`flex justify-between items-center ${
                isToday 
                  ? "text-yellow-900 font-bold " // Highlight Today
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </li>
          );
        })}
      </ul>

      {/* Online Status Badge */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-900 "></span>
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Замовлення на сайті: 24/7
        </span>
      </div>
    </div>
  );
}
