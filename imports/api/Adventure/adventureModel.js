import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true;

const Aventure = new Mongo.Collection('adventures');

Aventure.schema = new SimpleSchema({
  mail: {
    type: String,
    optional: true,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
  },
  createdAt: {
    type: String,
    optional: true,
    label: 'Date de création',
    defaultValue: new Date(),
    denyUpdate: true,
  },
  name: {
    type: String,
    optional: true,
    label: 'Nom',
  },
  groupId: {
    type: String,
    optional: false,
    label: 'Group ID',
    denyUpdate: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  objectives: {
    type: [Object],
    optional: false,
    label: 'Objectifs',
    minCount: 1,
  },
  'objectives.$.goal': {
    type: String,
    optional: false,
    label: 'objectif',
  },
  'objectives.$.done': {
    type: Boolean,
    optional: true,
    defaultValue: false,
  },
});

export default Aventure;
