import { http } from "@/utils";
import { ResType } from "./shared";

// 定义具体的接口类型
export type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};

// 请求频道列表

export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}

// 请求文章列表
export type ListItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: string;
  pubdate: string;
  aut_name: string;
  is_top: number;
  cover: {
    type: number;
    images: string[];
  };
};

export type ListRes = {
  results: ListItem[];
  pre_timestamp: string;
};

export type ReqParams = {
  channel_id: string;
  timestamp: string;
};

export function fetchListAPI(params: ReqParams) {
  return http.request<ResType<ListRes>>({
    url: "/articles",
    params,
  });
}
