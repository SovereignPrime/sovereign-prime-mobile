import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
// * components
import ContactList from 'src/containers/contact/List';
import ChatList from 'src/containers/chat/List';
import ContactDetail from '@components/pure/contact/Detail';

/**
 *
 * ! screens list - user profile, contact list, chat list, chat history (group | private peer to peer), add users to Group chat,
 */
const UsersScreen = () => {
  const [screenIndex, setScreenIndex] = useState<number>(0);
  useFocusEffect(
    useCallback(() => {
      setScreenIndex(0);
    }, []),
  );

  // * event handlers
  const onGoChat = useCallback(() => {
    setScreenIndex(1);
  }, []);
  const onGoContact = useCallback(() => {
    setScreenIndex(0);
  }, []);

  return screenIndex === 0 ? (
    <ContactList onGoChat={onGoChat} />
  ) : screenIndex === 1 ? (
    <ChatList onGoContact={onGoContact} />
  ) : (
    <ContactDetail goContactList={onGoContact} />
  );
};

export default UsersScreen;
