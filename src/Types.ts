export interface initialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
    channelName: string;
  };
}

export interface InitialChannelState {
  channelId: string | null;
  channelName: string | null;
}
