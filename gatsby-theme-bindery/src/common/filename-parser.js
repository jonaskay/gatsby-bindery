module.exports = {
  number: (str) => {
    const regex = /^\/(\d+)-/;
    const match = str.match(regex);

    if (match === null) {
      return undefined;
    }

    return parseInt(match[1]);
  },
};
