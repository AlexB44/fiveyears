import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true;

const Group = new Mongo.Collection('groups');

Group.AdventurerSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: 'Nom',
  },
  mail: {
    type: String,
    optional: false,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Mail',
  },
});

Group.schema = new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: 'Nom du groupe',
  },
  adventures: {
    type: [String],
    optional: true,
    label: 'Aventures',
    defaultValue: [],
  },
  adventurers: {
    type: [Group.AdventurerSchema],
    optional: true,
    label: 'Aventuriers',
    defaultValue: [],
  },
  createdAt: {
    type: Date,
    optional: false,
    label: 'Date de création',
    denyUpdate: true,
  },
  revealedAt: {
    type: Date,
    optional: false,
    label: 'Date de révélation',
    denyUpdate: true,
  },
});

export default Group;
