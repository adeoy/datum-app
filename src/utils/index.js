export const formatMoney = (value) => {
  value = value || 0;
  if (value < 0) {
    return `-$${Math.abs(value).toFixed(2)}`;
  } else {
    return `$${value.toFixed(2)}`;
  }
};

export const makeShortText = (value, maxLen, options) => {
  if (value.length <= maxLen + 1) {
    return value;
  }
  if (options?.reverse) {
    const n = value.length;
    return value.substring(n - maxLen, n);
  }
  return value.substring(0, maxLen + 1);
};
