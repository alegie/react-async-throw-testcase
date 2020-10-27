import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';

import { createProvider } from './create-provider';

test('good case', async () =>{
  const context = React.createContext({});
  const Provider = createProvider(context, true);

  const wrapper = await actMount(
    <Provider>
      <TestComponent />
    </Provider>
  );

  expect(wrapper).toBeDefined();
});

test('bad case', async () =>{
  const context = React.createContext({});
  const Provider = createProvider(context, false);

  
  await actMount(
    <Provider>
      <TestComponent />
    </Provider>
  );
  
  // ??? - expect error to be thrown

});

/**
 * dummy component
 */
const TestComponent = () => {
  return <>asdf</>;
};

/**
 * Mount the Component and "wait" until the async requests are done
 * and have changed the state. Otherwise we get some React warnings.
 *
 * @see https://github.com/enzymejs/enzyme/issues/2073
 *
 * @param node
 * @param timeout
 * @internal
 */
async function actMount(node: React.ReactElement, timeout = 50): Promise<ReactWrapper> {
  let wrapper: any;

  await act(async () => {
    wrapper = mount(node);
    await new Promise((resolve) => setTimeout(resolve, timeout));
    wrapper.update();
  });

  return wrapper;
}
