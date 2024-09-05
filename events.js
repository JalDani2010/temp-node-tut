const EventEmmiter = require('events');
const { emit } = require('process');

const CoustemEmmiter = new EventEmmiter() ;

CoustemEmmiter.on('res' , () =>{
    console.log('Data');
})

CoustemEmmiter.on('res' , () =>{
    console.log('Data1');
})

CoustemEmmiter.emit('res');
