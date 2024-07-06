import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
// import { collection, query } from "firebase/firestore/lite";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
} from "firebase/firestore";

interface Channel {
  id: string;
  channel: DocumentData;
}

const Sidebar = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const user = useAppSelector((state) => state.user);
  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (quarySnapshot) => {
      const channelsResults: Channel[] = [];
      quarySnapshot.docs.forEach((doc) =>
        // console.log(doc.id,doc.data())
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setChannels(channelsResults);
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordLogo.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
              <div className="sidebarVoice">
                <KeyboardVoiceIcon />
                <HeadphonesIcon />
                <SettingsIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
