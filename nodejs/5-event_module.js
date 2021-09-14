const Logger = require('../nodejs/5.1-logs')
const logger = new Logger()

logger.on('some_event', (args) => {
  const { id, text } = args
  console.log(id, text)
})

logger.log('User Logged!')

