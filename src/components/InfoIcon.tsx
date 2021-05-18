import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

type Props = Omit<React.ComponentProps<typeof Icon>, 'name'>;

const InfoIcon = (props: Props) => {
  return (
    <Icon
      {...props}
      name="question"
      size={35}
      style={{
        marginHorizontal: 10,
        color: Platform.select({
          ios: PlatformColor('secondaryLabel'),
          android: PlatformColor('?attr/alertDialogIcon'),
        }),
      }}
    />
  );
};

export default InfoIcon;
