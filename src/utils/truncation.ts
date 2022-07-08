export const Truncation = (name: string) => {
  if (name.length > 10) {
    return name.substring(0, 14) + '...';
  }
  return name;
};
