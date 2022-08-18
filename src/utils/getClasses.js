export const getClasses = (Classes) => {
  return Classes
    .filter((item) => item !== "")
    .join(" ")
    .trim();
};
