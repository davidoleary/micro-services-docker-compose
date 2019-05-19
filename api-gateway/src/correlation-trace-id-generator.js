const uuidv4 = require('uuid/v4');

const requestContext = (req, res, next) => {
  req.context = {};
  next();
};

const correlationTraceIdGenerator = (req, res, next) => {
  req.context.correlationTraceId = uuidv4();
  next();
};

module.exports = { 
  correlationTraceIdGenerator,
  requestContext
};
