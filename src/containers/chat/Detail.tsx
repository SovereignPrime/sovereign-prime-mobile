import ChatDetail from '@components/pure/chat/Detail';
// * mockup data
import { mockupChatHistory } from '@utils/mockup';

const ChatDetailContainer = ({ id }: { id: number }) => {
  return <ChatDetail list={mockupChatHistory} />;
};

export default ChatDetailContainer;
