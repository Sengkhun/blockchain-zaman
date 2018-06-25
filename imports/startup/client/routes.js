FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('main_layout', { main: 'home' });
    }
});

FlowRouter.route('/add', {
    name: 'add-student',
    action() {
        BlazeLayout.render('main_layout', { main: 'add_student' });
    }
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('main_layout', { main: 'not-found' });
    }
};
