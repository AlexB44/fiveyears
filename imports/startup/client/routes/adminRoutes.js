import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../ui/layout/adminIndexPage/adminIndexPage.js';

const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
});

adminRoutes.route('/', {
  name: 'adminIndex',
  action() {
    BlazeLayout.render('adminIndexPage');
  },
});
