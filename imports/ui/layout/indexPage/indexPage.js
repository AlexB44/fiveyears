import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './indexPage.html';

Template.indexPage.onRendered(() => {
  Meteor.call('group.insert', 'bonjour', (err, groupId) => {
    if (err) {
      console.log(err);
    } else {
      console.log('groupId', groupId);
      Meteor.call('adventure.insert', groupId, [{ goal: 'MANGER' }], (adventureErr, adventureId) => {
        if (adventureErr) {
          console.log(adventureErr);
        } else {
          console.log('adventureId', adventureId);
          Meteor.call('group.addAdventurer', groupId, { name: 'balt', mail: 'balt@balt.com' }, (adventurerErr, res) => {
            if (adventurerErr) {
              console.log(adventurerErr);
            } else {
              console.log(res);
            }
          });
        }
      });
    }
  });
});
