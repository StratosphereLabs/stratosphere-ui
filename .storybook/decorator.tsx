import { Highlight, themes } from 'prism-react-renderer';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Tabs, TabContent } from '../src/components';

type DecoratorProps = {
  children: ReactNode | ReactNode[];
  title: string;
  description: string;
  source: string;
};

export const Decorator = ({
  children,
  title,
  description,
  source,
}: DecoratorProps) => {
  const [tab, setTab] = useState('preview');
  const Code = () =>
    useMemo(
      () => (
        <Highlight theme={themes.github} code={source} language="jsx">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre slot="html">
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ),
      [source],
    );
  return (
    <div className="w-full h-screen p-8 bg-base-100">
      <div className="navbar p-0 border-b border-neutral text-base-content">
        <div className="navbar-start">
          <span className="text-lg font-bold">react-daisyui</span>
        </div>
      </div>
      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          <div className="block sm:hidden">
            {children}
            <div className="mockup-code w-full mb-8 mt-3">
              <Code />
            </div>
          </div>
          <div className="hidden sm:grid">
            <Tabs
              lifted
              onChange={({ id }) => setTab(id)}
              selectedTabId={tab}
              tabs={[
                {
                  id: 'preview',
                  children: 'Preview',
                },
                {
                  id: 'code',
                  children: 'Code',
                },
              ]}
            >
              <TabContent
                className="preview rounded-b-box rounded-tr-box flex min-h-[6rem]
                          min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden overflow-y-hidden
                          border border-base-300 bg-base-200 bg-cover bg-top p-4"
                style={{ backgroundSize: '5px 5px' }}
              >
                {children}
              </TabContent>
              <TabContent className="mockup-code mb-8 w-full">
                <Code />
              </TabContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decorator;
