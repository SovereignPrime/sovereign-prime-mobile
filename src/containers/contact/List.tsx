import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * components
import ContactList from '@components/pure/contact/List';
// * styles
import { Theme } from '@theme/Theme.interface';

const ContactListContainer = ({ onGoChat }: { onGoChat: () => void }) => {
  return <ContactList onGoChat={onGoChat} />;
};

export default ContactListContainer;
