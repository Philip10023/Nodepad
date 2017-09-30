const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note ',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'The body of the note ',
  demand: true,
  alias: 'b'
};


const argv = yargs
  .command('add', 'Add a new note!', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes!')
  .command('read', 'Read a note', {
      title: titleOptions
  })
  .command('remove', 'Removing note!', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note recieved');
    notes.logNote(note);
  } else {
    console.log('Note title taken :(');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found.');
    notes.logNote(note);
  } else {
    console.log('Note not found.');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else {
  console.log('Command not recognized');
}


// var filteredArray = _.uniq(['Phil', 'Will', 1, 1]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('andrew'));

// var result = notes.addNote();
// console.log(result);
//
// var adding = notes.add(2, 3);
// console.log(adding);
// var user = os.userInfo();
// console.log(user);
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
//adding sync to appendFile allows it to run this code without 3 arguements
