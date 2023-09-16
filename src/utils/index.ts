export const formatWeekdayArrayToString = (
  array: string[],
  charLimit: number = 3
) => {
  if (!array) return null;

  const splited = array.toString().split(',');
  const treated = splited?.map((string) => string.slice(0, charLimit));
  const formatted = treated?.join(', ');

  return formatted;
};
