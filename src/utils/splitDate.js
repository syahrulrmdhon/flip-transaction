export const monthName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const splitDate = (date) => {
  const dd = date.split(" ");
  const newDate = dd[0].split("-");
  let char = newDate[1];
  if (char.charAt(0) === "0") {
    char = Number(newDate[1].charAt(1)) - 1;
  }
  return {
    full: `${newDate[2]} ${monthName[char - 1]} ${newDate[0]}`,
    fullNumber: `${newDate[2]}/${newDate[1]}/${newDate[0]}`,
    monthYear: `${monthName[char]} ${newDate[2]}`,
    month: `${monthName[char]}`,
    time: `${dd[1]}`,
  };
};
