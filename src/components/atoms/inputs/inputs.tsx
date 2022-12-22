import { ReactElement } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Controller } from 'react-hook-form';

// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import createStyles from './styles';
// * assets
import SearchIcon from '@svg/search.svg';

const InputWithLabel = ({ label }: { label: string }) => {
  const styles = useThemeAwareObject(createStyles);

  return <View style={styles.inputWithLabel}></View>;
};

/**
 * * extended for React Hook Form
 * @param {any} control - React Hook Form Controller parameter
 * @param {string} name
 * @param {any} rules - required: true, ...
 * @param {string | undefined} placeholder
 * @param {string} label
 * @param {boolean} isSecure - for password input
 * @returns
 */
const LabelInputWithControl = ({
  control,
  name,
  rules,
  placeholder,
  label,
  isSecure,
  className,
}: {
  control: any;
  name: string;
  rules: any;
  placeholder?: string;
  label: string;
  isSecure?: boolean;
  className?: ViewStyle;
}) => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={[styles.inputWithLabel, className]}>
      <Text style={styles.labelText}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.input}
            secureTextEntry={isSecure}
          />
        )}
        name={name}
      />
    </View>
  );
};

const LabelInputControlWithAddon = ({
  control,
  name,
  rules,
  placeholder,
  label,
  isSecure,
  addOn,
  onAddon,
  className,
}: {
  control: any;
  name: string;
  rules: any;
  placeholder?: string;
  label: string;
  isSecure?: boolean;
  addOn: ReactElement;
  onAddon: () => void;
  className?: ViewStyle;
}) => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={[styles.inputWithLabel, className]}>
      <Text style={styles.labelText}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputRow}>
            <TextInput
              value={value}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              style={{
                ...styles.input,
                flex: 1,
              }}
              secureTextEntry={isSecure}
            />
            <TouchableOpacity
              onPress={onAddon}
              activeOpacity={0.8}
              style={styles.addon}>
              {addOn}
            </TouchableOpacity>
          </View>
        )}
        name={name}
      />
    </View>
  );
};

const SearchInput = ({
  search,
  setSearch,
  placeholder,
  additionalStyle,
}: {
  search: string | undefined;
  setSearch: (newSearch: string | undefined) => void;
  placeholder: string;
  additionalStyle: ViewStyle;
}) => {
  // const currentRef = useRef<any>();
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={[styles.searchInputContainer, additionalStyle]}>
      <TextInput
        // ref={currentRef}
        onChangeText={setSearch}
        placeholder={placeholder}
        style={styles.searchInput}
      />
      <SearchIcon width={25} height={25} style={{}} />
    </View>
  );
};

export {
  LabelInputWithControl,
  LabelInputControlWithAddon,
  InputWithLabel,
  SearchInput,
};
