import { DetailDataType, fetchDetailAPI } from "@/apis/detail";
import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Detail = () => {
  const [params] = useSearchParams();
  const id = params.get("id");

  const [detail, setDetail] = useState<DetailDataType | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!);
        setDetail(res.data.data);
      } catch {
        throw new Error("fetch detail error");
      }
    };
    getDetail();
  }, [id]);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  // 没有数据的时候，返回一个loading的状态

  if (!detail) {
    return <div>this is loading....</div>;
  }

  // 数据返回之后，正式渲染的内容，这样可以避免数据未返回导致渲染问题

  return (
    <div>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content,
        }}
      ></div>
    </div>
  );
};

export default Detail;
