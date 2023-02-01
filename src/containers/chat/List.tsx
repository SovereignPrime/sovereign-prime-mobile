import { useMemo, useState } from 'react';
// * components
import ChatList from '@components/pure/chat/List';
// * mockup data
import { mockupContactList } from '@utils/mockup';

const ChatListContainer = ({ onGoContact }: { onGoContact: () => void }) => {
  const [activeTab, setActiveTab] = useState(0);

  // * render data
  const currentList = useMemo(() => {
    return activeTab === 0 ? mockupContactList : mockupContactList.slice(1, 3);
  }, [activeTab]);

  return (
    <ChatList
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      list={currentList}
      onGoContact={onGoContact}
    />
  );
};

export default ChatListContainer;
