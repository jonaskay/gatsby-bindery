module.exports = {
  number: (str) => {
    const regex = /^\/(\d+)-/;
    const match = str.match(regex);

    if (match === null) {
      return undefined;
    }

    return parseInt(match[1]);
  },

  slug: (str) => {
    const result = str.replace(/^\/\d+-/, "/");
    return result;
  },
};
