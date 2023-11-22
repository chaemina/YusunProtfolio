import React from "react";
import Title from "~/components/atom/Ttitle";

const Video = () => {
  return (
    <div className="flex bg-sky-100 space-y-4">
      <div>
        <Title className="p-4">
          분실 위험 알리미 <p className="font-bold">비케어플 </p>
        </Title>
        <video
          src="/asset/image/video.mp4"
          controls
          className="relative -top-20 h-[90%] w-[90%]"
        ></video>
      </div>
      <div className="w-[50%] p-2">
        <p>
          [비케어플]은 광주지역에서 사용자의 IP 주소를 이용하여 현재 사용자
          위치를 파악하고, 현 위치를 기준으로 분실 위험 수준을 알려줍니다. 부가
          기능으로는 분실 위험도, 가장 많이 분실한 물건 5가지, 총 분실 개수를
          알려줍니다.
          <div className="space-y-4">
            개발환경 및 개발언어
            <p>FrontEnd : vscode, jsx,React, javascript</p>
            <p> BackEnd : InteliJ, Springboot 2.7.15, Java11</p>
            <p>AI : jupyter notebook, flask, python</p>
          </div>
          프로젝트 주요기능
          <div>
            AI API
            <p>
              (1) 데이터 수집 : 분실 위험도 예측을 위해 두 가지 데이터를
              수집하였습니다. 경찰청 분실물 정보 조회 서비스: 공공데이터포탈에서
              제공하는 분실물 정보를 수집하여 위치와 날짜, 물품 종류 등의
              데이터를 확보 후 분실물 데이터의 검색 범위는 startYear부터
              endYear까지로 광주지역코드인 LCQ000을 사용해 광주 지역의 2023년
              분실물 데이터를 data에 저장한다.
            </p>
            <p>
              (2) 전처리 과정: 수집한 데이터를 전처리하여 모델 학습에 적합한
              형태로 가공하였다. 해당 데이터를 GoogleMaps에서 제공하는
              GeoCoding을 이용하여 텍스트 기반의 위치데이터를 위도와 경도로
              변환하였고, 해당 데이터에서 광주 지역을 벗어난 데이터와, 위도와
              경도로 변환이 실패한 데이터는 제거해주엇다.{" "}
            </p>
            <p>
              (3) 자치구 정보 추가: 분실위험도를 측정하기 위해서, 각 자치구의
              인구밀도가 영향을 끼친다고 판단하였고, 해당 위도와 경도를 바탕으로
              KakaoMaps의 API를 사용하여 해당 위치의 자치구를 데이터에
              추가하였다. 추가 된 자치구를 바탕으로 공공데이터에서 받아온
              자치구별 인구밀도 정보를 데이터셋에 추가하였다.{" "}
            </p>
            <p>
              (4) 군집화: 분실물 위치가 밀집된 지역을 군집화하기 위하여 L-means
              군집을 실시하였고, 해당 예측결과를 dataset에 추가하였다. dataset을
              .xlsx 확장자로 변환하여 서버에서 활용할 수 있도록 한다.{" "}
            </p>
            <p>
              (5) 인공지능 모델 학습: 및 응답 GoogleMaps API를 사용하여 해당
              서버에 접속한 사용자의 현재 위치 IP를 기반으로 위도와 경도를
              추출했다. 해당 위치의 군집 레이블을 확인하여 분실물 개수를
              계산하고, 유사한 위치의 자치구를 찾아 인구밀도로 나누어 분실
              위험도를 측정했다. 위험수준을 출력하기 위해 위험수준 매핑 함수를
              정의하고 ,해당구역의 위험수준과 최다 분실물품을 확인 할 수 있는
              기능을 추가하였다. 해당 서버에 접속한 사용자의 위치정보를 바탕으로
              위험수준과 최다 분실물품을 응답body에 담아주었다.
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Video;
