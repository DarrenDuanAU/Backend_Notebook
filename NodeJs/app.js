const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('loggingEvent', (arg) => {
  console.log(`trying: ${arg.name}`)
})

emitter.emit('loggingEvent', {name: 'darren', id: '0'})