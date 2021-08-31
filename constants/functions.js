export const parseRupiahFormat = (value) => {
  if (isNaN(value)) return 0;
  const reverse = value.toString().split('').reverse().join('');
  let rupiah = reverse.match(/\d{1,3}/g);
  rupiah = rupiah.join('.').split('').reverse().join('');
  return rupiah;
};

export default {
  parseRupiahFormat
};