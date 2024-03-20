import { MantineProvider as BaseMantineProvider } from '@mantine/core';

import { theme_colors } from '~/data/mantine';

type Props = {
  children?: React.ReactNode;
};

const MantineProvider = ({ children }: Props) => {
  return (
    <BaseMantineProvider
      forceColorScheme="dark"
      theme={{
        ...theme_colors,
      }}
    >
      {children}
    </BaseMantineProvider>
  );
};

export default MantineProvider;
