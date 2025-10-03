export const getDateWithDay = (dateString: string) => {
  const date = new Date(dateString);

  const dayName = date.toLocaleString("es-ES", { weekday: "long" });
  const day = date.getUTCDate();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getUTCFullYear();

  // Capitalizar
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedDayName}, ${day} ${capitalizedMonth} de ${year}`;
};