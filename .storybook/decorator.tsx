import { Highlight, themes } from 'prism-react-renderer';
import React, { useEffect, useState } from 'react';
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
    <div className="my-4 h-full w-full">
      <h1 className="text-4xl font-bold text-base-content">{title}</h1>
      <p className="text-base-content">{description}</p>
      <div className="my-4">
        <div className="block sm:hidden">
          {children}
          <div className="mockup-code mb-8 mt-3 w-full">
            <Highlight theme={themes.vsDark} code={source} language="jsx">
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
          </div>
        </div>
        <div className="hidden sm:grid">
          <div className="tabs">
            <div className="tab-lifted tab-active">Preview</div>
            <div className="tab-lifted">Code</div>
          </div>
          <div className="rounded-b-box rounded-tr-box relative overflow-x-auto">
            {tab === 'preview' ? (
              <div
                className="preview rounded-b-box rounded-tr-box flex min-h-[6rem]
                          min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden overflow-y-hidden
                          border border-base-300 bg-base-200 bg-cover bg-top p-4"
                style={{ backgroundSize: '5px 5px' }}
              >
                {children}
              </div>
            ) : (
              <div className="mockup-code mb-8 w-full">
                <Highlight theme={themes.vsDark} code={source} language="jsx">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
