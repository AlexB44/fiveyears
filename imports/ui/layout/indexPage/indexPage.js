import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './indexPage.html';

Template.indexPage.onRendered(() => {
  Meteor.call('group.insert', 'bonjour', (err, id) => {
    if (err) {
      console.log(err);
    } else {
      Meteor.call('adventure.insert', id, [{ goal: 'MANGER' }], (adventureErr, adventureId) => {
        if (adventureErr) {
          console.log(adventureErr);
        } else {
          console.log(adventureId);
        }
      });
    }
  });
});
