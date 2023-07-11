import React, { useEffect } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

const SurveyComponent = () => {
  useEffect(() => {
    // 설문 조사 저장 및 로드를 위한 코드
    const surveyData = getCookie('surveyData');

    const survey = new Survey.Model({ /* 설문 조사 데이터 */ });
    // survey.onComplete 이벤트 핸들러 등록
    survey.onComplete.add((result) => {
      // 설문 조사 완료 시, 데이터를 쿠키에 저장
      setCookie('surveyData', JSON.stringify(result.data));
      console.log(result.data);
    });

    if (surveyData) {
      // 이전에 저장된 데이터가 있으면 설문 조사에 로드
      survey.data = JSON.parse(surveyData);
    }

    Survey.SurveyNG.render('surveyElement', { model: survey });
  }, []);

  // 쿠키 설정 함수
  const setCookie = (name, value, days = 7) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  };

  // 쿠키 가져오는 함수
  const getCookie = (name) => {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? decodeURIComponent(cookieValue.pop()) : null;
  };

  return <div id="surveyElement"></div>;
};

export default SurveyComponent;
