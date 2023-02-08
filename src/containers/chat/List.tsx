import { useCallback, useMemo, useState } from 'react';
// * components
import ChatDetail from './Detail';
import ChatList from '@components/pure/chat/List';
// * mockup data
import { mockupContactList } from '@utils/mockup';

const ChatListContainer = ({ onGoContact }: { onGoContact: () => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [chatboxId, setChatboxId] = useState<number>();

  // * render data
  const currentList = useMemo(() => {
    return activeTab === 0 ? mockupContactList : mockupContactList.slice(1, 3);
  }, [activeTab]);
  // * event handlers
  const goChat = useCallback(
    (newChatId: number) => () => {
      setChatboxId(newChatId);
    },
    [],
  );
  const onBackToList = useCallback(() => {
    setChatboxId(undefined);
  }, []);

  return chatboxId ? (
    <ChatDetail id={chatboxId} onBack={onBackToList} />
  ) : (
    <ChatList
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      list={currentList}
      onGoContact={onGoContact}
      goChat={goChat}
    />
  );
};

export default ChatListContainer;
