import classNames from 'classnames';

export const CHAT_BUBBLE_ALIGNMENTS = ['start', 'end'] as const;

export type ChatBubbleAlignment = (typeof CHAT_BUBBLE_ALIGNMENTS)[number];

export const CHAT_BUBBLE_CLASSNAME_MAP: Record<ChatBubbleAlignment, string> = {
  start: 'chat-start',
  end: 'chat-end',
};

export interface ChatBubbleProps {
  align: ChatBubbleAlignment;
  messages: string[];
}

export const ChatBubble = ({
  align,
  messages,
}: ChatBubbleProps): JSX.Element => (
  <div className={classNames('chat', CHAT_BUBBLE_CLASSNAME_MAP[align])}>
    <div className="chat-bubble">
      {messages.map((message, index) => (
        <>
          {index > 0 ? <br /> : null}
          {message}
        </>
      ))}
    </div>
  </div>
);
