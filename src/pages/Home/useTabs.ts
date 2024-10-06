import { ChannelItem, fetchChannelAPI } from "@/apis/list";
import { useEffect, useState } from "react";

// 业务逻辑 和 UI 分离开来
function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        setChannels(res.data.data.channels);
      } catch {
        throw new Error("fetch channel error");
      }
    };
    getChannels();
  }, []);

  return {
    channels,
  };
}

export { useTabs };
