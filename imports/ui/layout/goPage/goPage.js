import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './goPage.html';

Template.goPage.onRendered(() => {
  $('.js-createGroup')
  .form({
    fields: {
      name: {
        identifier: 'name',
        rules: [
          {
            type: 'empty',
            prompt: 'Vous devez indiquer un nom pour votre groupe.',
          },
        ],
      },
    },
    onSuccess(event, fields) {
      event.preventDefault();
      Meteor.call('group.insert', fields.name, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          FlowRouter.go(`/adventure/${res}`);
        }
      });
    },
  });
});
