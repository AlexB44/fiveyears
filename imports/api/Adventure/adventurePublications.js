import { Meteor } from 'meteor/meteor';
import Adventure from './adventureModel';

const adminFields = {
  name: 1,
};

Adventure.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

if (Meteor.isServer) {
  Meteor.publish('adventure.private', function privateAdventurePublish() {
    if (!this.userId || !Meteor.users.findOne({ _id: this.userId })) {
      return this.ready();
    }
    return Adventure.find({}, {
      fields: adminFields,
    });
  });
}
