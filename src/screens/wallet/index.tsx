import { useCallback, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// * components
import PaymentScreen from './Payment';
import RequestMakePaymentScreen from './RequestMakePayment';
import ConfirmPaymentScreen from './ConfirmPayment';
import TransactionScreen from './Transaction';
import HistoryScreen from './History';
import NotificationScreen from './Notification';
import { WalletSubmenu } from '@components/atoms/wallet/Item';
import WalletIDBox from '@components/atoms/wallet/IDBox';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * constants
import { walletSubmenuList } from '@utils/renderOptions';
// * mockup
import AvatarImage from '@image/mockup/avatar07.png';

/**
 * currentStep
 * 0 - index screen
 * 1 - payment
 * 2 - transaction
 * 3 - notification
 * 4 - fulfilled
 * 5 - request payment
 * 6 - make payment
 * 7 - confirm payment
 * 8 - transaction history - completed
 * 9 - transaction history - canceled
 *
 */
const WalletScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  useFocusEffect(
    useCallback(() => {
      setCurrentStep(0);
    }, []),
  );

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      {currentStep === 0 ? (
        <View style={[styles.contentContainer]}>
          <View style={styles.header}>
            <Image source={AvatarImage} style={styles.avatar} />
            <Text
              numberOfLines={1}
              style={styles.userName}>{`Hi, Georges`}</Text>
            <WalletIDBox walletID={`0x3558281`} additionalStyle={{}} />
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Text style={styles.balanceUSD}>{`$500.50`}</Text>
            <Text style={styles.balanceKarma}>{`100,000 Karma`}</Text>
          </View>
          <View style={styles.submenuList}>
            {walletSubmenuList.map(submenu => (
              <WalletSubmenu
                label={submenu.label}
                description={submenu.description}
                Icon={submenu.icon}
                additionalStyle={styles.submenu}
                onPress={() => {
                  setCurrentStep(
                    submenu.value === 'payment'
                      ? 1
                      : submenu.value === 'transaction'
                      ? 2
                      : submenu.value === 'notification'
                      ? 3
                      : 4,
                  );
                }}
                key={`wallet-submenu-${submenu.value}`}
              />
            ))}
          </View>
        </View>
      ) : currentStep === 1 ? (
        <PaymentScreen
          onBack={() => setCurrentStep(0)}
          onRequestPayment={() => setCurrentStep(5)}
          onMakePayment={() => setCurrentStep(6)}
        />
      ) : currentStep === 5 || currentStep === 6 ? (
        <RequestMakePaymentScreen
          type={currentStep === 5}
          onMakePayment={({
            name,
            amount,
            note,
          }: {
            name: string;
            amount: number;
            note: string;
          }) => {
            setCurrentStep(7);
          }}
          onBack={() => setCurrentStep(1)}
        />
      ) : currentStep === 7 ? (
        <ConfirmPaymentScreen onBack={() => setCurrentStep(6)} />
      ) : currentStep === 2 ? (
        <TransactionScreen
          onCompleted={() => setCurrentStep(8)}
          onCanceled={() => setCurrentStep(9)}
          onBack={() => setCurrentStep(0)}
        />
      ) : currentStep === 8 || currentStep === 9 ? (
        <HistoryScreen
          type={currentStep === 8 ? 0 : 1}
          onBack={() => setCurrentStep(2)}
        />
      ) : currentStep === 3 ? (
        <NotificationScreen onBack={() => setCurrentStep(2)} />
      ) : null}
    </View>
  );
};

export default WalletScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.background01,
    },
    contentContainer: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      flex: 1,
    },
    header: {
      ...theme.align.flexRowCenter,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    userName: {
      ...theme.font.desc2,
      marginLeft: 16,
      flex: 1,
      color: theme.color.primary,
    },
    balanceContainer: {
      ...theme.align.flexColCenter,
      marginTop: 68,
      paddingTop: 14,
      paddingBottom: 9,
      width: '100%',
      borderRadius: 10,
      backgroundColor: theme.color.primary,
    },
    balanceLabel: {
      ...theme.font.captionLight,
      color: theme.color.borderPrimary,
    },
    balanceUSD: {
      ...theme.font.big,
      color: theme.color.secondary,
    },
    balanceKarma: {
      ...theme.font.caption3,
      color: theme.color.secondary,
    },
    submenuList: {
      flex: 1,
      marginTop: 67,
    },
    submenu: {
      flex: 0,
      marginBottom: 24,
    },
  });
};
