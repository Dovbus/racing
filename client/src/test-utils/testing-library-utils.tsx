import { render } from '@testing-library/react';
import { setupApiStore } from './testUtils';
import { Provider } from 'react-redux';
import { horsesApi } from '../redux/api';

export const wrapper = ({ children }: { children: React.ReactNode }) => {
  const storeRef = setupApiStore(horsesApi, {});
  return <Provider store={storeRef.store}>{children}</Provider>;
};

const customRender = (ui: JSX.Element, options: any) => render(ui, { wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
