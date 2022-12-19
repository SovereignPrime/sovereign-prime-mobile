import { useState } from 'react';
import NotificationList from '@components/pure/notification/List';
// * mockup data
import { mockupNotificationList } from '@utils/mockup';

const NotificationListContainer = () => {
  const [type, setType] = useState(0);

  return (
    <NotificationList
      type={type}
      setType={setType}
      list={mockupNotificationList}
    />
  );
};

export default NotificationListContainer;
