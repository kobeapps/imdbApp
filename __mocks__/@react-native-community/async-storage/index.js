let cache = {};
export default {
  setItem: jest.fn(() => {
		return new Promise((resolve) => {
			resolve(null);
		});
  }),
  getItem: jest.fn((key) => {
		return new Promise((resolve) => {
			if (cache[key]) {
				resolve(cache[key]);
			} else {
				resolve(null);
			}
		});
	}),
  removeItem: jest.fn((key) => {
    return new Promise((resolve, reject) => {
      return cache.hasOwnProperty(key)
        ? resolve(delete cache[key])
        : reject('No such key!');
    });
  }),
  clear: jest.fn((key) => {
    return new Promise((resolve, reject) => resolve(cache = {}));
  }),

  getAllKeys: jest.fn((key) => {
    return new Promise((resolve, reject) => resolve(Object.keys(cache)));
  }),
}