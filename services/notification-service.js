const router = require('express').Router();
const _ = require('lodash');
const notificationController = require('../controllers/notification-controller');

router.post('/', (req, res) => {
    const props = _.pick(req.body, ['notification_name', 'notification_date', 'created_date', 'is_attended']);
    notificationController.createNotification(props).then((notificationDoc) => {
        res.send(notificationDoc);
    }).catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    notificationController.getNotificationById(id).then((notification) => {
        res.send(notification);
    }).catch(err => res.send(err));
});

router.get('/', (req, res) => {
    notificationController.getNotifications().then((notifications) => {
        res.send(notifications);
    }).catch((err) => res.send(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    notificationController.deleteNotificationById(id).then((notification) => {
        res.send(notification);
    }).catch((err) => res.send(err));
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const props = _.pick(req.body, ['notification_name', 'notification_date', 'created_date', 'is_attended']);
    notificationController.updateNotificationById(id, props).then((notification) => {
        res.send(notification)
    }).catch((err) => res.send(err));
});


module.exports = router;