export function translateDayOfWeek(day) {
  const daysOfWeek = {
    Seg: 'Monday',
    Ter: 'Tuesday',
    Qua: 'Wednesday',
    Qui: 'Thursday',
    Sex: 'Friday',
    Sáb: 'Saturday',
    Dom: 'Sunday',
  };

  return daysOfWeek[day] || "data invalida";
}
