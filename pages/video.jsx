import React from "react";
import Title from "~/components/atom/Ttitle";

const Video = () => {
  return (
    <div>
      <video
        src="/asset/image/video.mp4"
        controls
        className="h-[50%] w-[50%]"
      ></video>

      <div className="w-[50%] p-2">
        <Title className="">분실 위험 알리미 [ 비케어플 ]</Title>

        <p>
          [비케어플]은 광주지역에서 사용자의 IP 주소를 이용하여 현재 사용자
          위치를 파악하고, 현 위치를 기준으로 분실 위험 수준을 알려줍니다. 부가
          기능으로는 분실 위험도, 가장 많이 분실한 물건 5가지, 총 분실 개수를
          알려줍니다.
        </p>
      </div>
    </div>
  );
};

export default Video;
