export default () => {
  return function <%= camelName %>(req, res, next) {
    next();
  };
};
