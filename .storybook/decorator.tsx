import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import React, { useEffect, useState } from 'react';
import { CodeMockup, Tabs, Theme } from 'react-daisyui';
import { useGlobalTheme } from './useGlobalTheme';

export const Decorator = ({ children, title, description, source }) => {
  const [tab, setTab] = useState('preview');
  const globalTheme = useGlobalTheme();
  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', globalTheme);
  }, [globalTheme]);
  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          <div className="block sm:hidden">
            {children}
            <CodeMockup className="w-full mb-8 mt-3">
              <Highlight
                {...defaultProps}
                theme={theme as PrismTheme}
                code={source}
                language="jsx"
              >
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="pl-5" slot="html">
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
            </CodeMockup>
          </div>
          <div className="hidden sm:grid">
            <Tabs
              className="z-10 -mb-px"
              variant="lifted"
              value={tab}
              onChange={tab => setTab(tab === 'fullWidthClick' ? 'html' : tab)}
            >
              <Tabs.Tab value="preview" className="[--tab-bg:hsl(var(--b2))]">
                Preview
              </Tabs.Tab>
              <Tabs.Tab
                value="html"
                className={
                  tab === 'html'
                    ? '[--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]'
                    : ''
                }
              >
                Code
              </Tabs.Tab>
              <Tabs.Tab
                value="fullWidthClick"
                className="mr-6 flex-1 cursor-default [--tab-border-color:transparent]"
              />
            </Tabs>
            <div className="rounded-b-box rounded-tr-box relative overflow-x-auto">
              {tab === 'preview' ? (
                <div
                  className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box
                            flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                            overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4"
                  style={{ backgroundSize: '5px 5px' }}
                >
                  {children}
                </div>
              ) : (
                <CodeMockup className="w-full mb-8">
                  <Highlight
                    {...defaultProps}
                    theme={theme as PrismTheme}
                    code={source}
                    language="jsx"
                  >
                    {({ tokens, getLineProps, getTokenProps }) => (
                      <pre className="pl-5" slot="html">
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
                </CodeMockup>
              )}
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};
