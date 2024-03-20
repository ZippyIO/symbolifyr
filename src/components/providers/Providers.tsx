import MantineProvider from '~/components/providers/MantineProvider';

type Props = {
  children?: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Providers;
