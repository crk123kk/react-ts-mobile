import { Image, InfiniteScroll, List } from "antd-mobile";
// mock数据
// import { users } from "./users";
import { useEffect, useState } from "react";
import { fetchListAPI, ListRes } from "@/apis/list";
import { useNavigate } from "react-router-dom";

type Props = {
  channelId: string;
};

const HomeList = (props: Props) => {
  const { channelId } = props;
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: new Date().getTime() + "",
  });

  /// 开关，标记当前是否还有新数据
  const [hasMore, setHasMore] = useState(true);

  // 加载下一页的函数， 上拉加载函数
  const loadMore = async () => {
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp,
      });
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      setHasMore(res.data.data.results.length > 0);
    } catch {
      throw new Error("fetch list error");
    }
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: "" + new Date().getTime(),
        });
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch {
        throw new Error("fetch list error");
      }
    };
    getList();
  }, [channelId]);

  const navigate = useNavigate();
  const goToDetail = (id: string) => {
    // console.log("go to detail");
    navigate(`/detail?id=${id}`);
  };

  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item onClick={() => goToDetail(item.art_id)} key={item.art_id} prefix={<Image src={item.cover.images?.[0]} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />} description={item.pubdate}>
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
    </>
  );
};

export default HomeList;
