export const EmbeddedChat: React.ComponentType<{
  host?: string;
  height?: string;
  roomId?: string;
  moreOpts?: boolean;
  channelName?: string;
  anonymousMode?: boolean;
  toastBarPosition?: string;
  showRoles?: boolean;
  showAvatar?: boolean;
  enableThreads?: boolean;
  theme?: any;
  className?: string;
  style?: any;
  hideHeader?: boolean;
  auth?: {
    flow: 'PASSWORD';
  };
}>;
