let photoset = [];

module.exports = {
  get () {
    return photoset;
  },

  set (data) {
    photoset = data;
  },
};
