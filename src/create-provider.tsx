import * as React from 'react';


export function createProvider(
  context: React.Context<any>,
  okay: boolean
): React.FunctionComponent {
  return (props: any) => {

    React.useEffect(() => {
      (async () => {
        // time passes...
        await new Promise((resolve) => setTimeout(resolve, 5));

        if (!okay) {
          throw new Error('oh no!');
        }
      })();
    }, []);

    const contextValue = {};
    return <context.Provider value={contextValue} >{props.children}</context.Provider>;
  };
}
