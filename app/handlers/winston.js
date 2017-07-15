const winston = require('winston');
                require('winston-redis').Redis;

const log = new (winston.Logger)({
  transports:[
    new (winston.transports.Redis)({
      level:'error',
      host:process.env.HOST_REDIS,
      port:process.env.PORT_REDIS,
      auth:process.env.AUTH_REDIS
    })
  ]
});


module.exports ={
  log : log
}
