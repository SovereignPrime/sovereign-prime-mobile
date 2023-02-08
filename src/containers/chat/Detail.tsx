import ChatDetail from '@components/pure/chat/Detail';
// * mockup data
import { mockupChatHistory } from '@utils/mockup';

const ChatDetailContainer = ({
  id,
  onBack,
}: {
  id: number;
  onBack: () => void;
}) => {
  return <ChatDetail list={mockupChatHistory} onBack={onBack} />;
};

export default ChatDetailContainer;
