const Notification = require('../models/notification');

exports.createNotification = (props) => {
    console.log(props);
    const notification = new Notification(props);
    return notification.save()
        .then((notificationDoc) => notificationDoc)
        .catch((err) => err);
}

exports.getNotificationById = (id) => {
    return Notification.findById(id)
        .then((notificationDoc) => {
            if(!notificationDoc) {
                throw new Error('The notification was not found');
            }
            return notificationDoc;
            
        }).catch(err => err);
}

exports.getNotifications = () => {
    return Notification.find()
        .then((notificationDocs) => notificationDocs)
        .catch(err => err);
}

exports.deleteNotificationById = (id) => {
    return Notification.findByIdAndDelete(id).then((notification) => {
        if (!notification) {
            throw new Error('This notifications does not exist');
        }
        return notification
    }).catch((err) => err);
}

exports.updateNotificationById = (id, props) => {
   return this.getNotificationById(id).then((notification) => {
        notification.notification_name = props.notification_name;
        notification.notification_date = props.notification_date;
        notification.created_date = props.notification_date;
        notification.is_attended = props.is_attended;
        return notification.save().then((notificationDoc) => notificationDoc).catch((err) => err);
   }).catch((err) => err);
}