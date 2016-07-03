import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true;

const Aventure = new Mongo.Collection('groups');

Aventure.schema = new SimpleSchema({
  mail: {
    type: String,
    optional: true,
    label: 'Email',
    regex: SimpleSchema.RegEx.Email,
  },
});

export default Aventure;
