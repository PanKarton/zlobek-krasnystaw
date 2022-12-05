import { render, RenderOptions } from '@testing-library/react';
import { AppProvider } from 'providers/AppProvider';
import { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: Props) => {
  return <AppProvider>{children}</AppProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
