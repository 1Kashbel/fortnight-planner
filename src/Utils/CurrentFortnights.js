export default async function getAvailableFortnights() {
  // TODO: Add Japan region
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekData = await fetch('https://optc-agenda.github.io/assets/json/weeks.json');

  // FIXME: Add all the translations
  const fortnightTranslations = {
    CP9: '1137',
    Wapol: '0852',
    Smoker: '1397',
    Caribou: '1842',
  };
  const { weeks } = await weekData.json();
  const today = new Date();
  const weekDayIndex = today.getDay();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - weekDayIndex));

  const todayData = weeks
    .reverse()
    .find(
      w =>
        w.starting === firstDayOfWeek.getDate() && w.month === monthNames[firstDayOfWeek.getMonth()]
    );

  const result = [];
  todayData.program[weekDayIndex].fn.map(f => result.push(fortnightTranslations[f]));

  // TODO: Add default (as in: always available) fortnights
  return result || [];
}
