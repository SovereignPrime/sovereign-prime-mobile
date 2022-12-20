import VerificationList from '@components/pure/verification/List';
import { mockupVerificationUsersList } from '@utils/mockup';

const VerificationListContainer = () => {
  return <VerificationList list={mockupVerificationUsersList} />;
};

export default VerificationListContainer;
