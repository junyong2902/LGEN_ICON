export const json1 = {
    "progressTitle": "진행률",
    "progressBarType": "questions",
    previewText: "Preview",
    "showQuestionNumbers": "off",
    showPrevButton: false,
    pageNextText: "다음",
    completedHtml: "<div>{name}님 설문에 참여해주셔서 감사합니다.</div> <div><img src='https://github.com/junyong2902/LGEN_ICON/blob/master/secuendol.PNG?raw=true' /></div>",
    "pages": [
        {
            "name": "intropage",
            "navigationsTitle": "intropage",
            "elements": [
                {
                    "type": "html",
                    "name": "info",
                    "html": "<pre style='background-color:#f3f3f3; font-family:fontESR; font-size:18px'><br></br>안녕하십니까, CFO.정보보안담당 핵심정보 보호체계 수립 TF(이하, TF)입니다.\nLG에너지솔루션 분사 이후 거듭되는 성장으로 지금의 위상을 만들기까지\n많은 임직원분들께서 다양한 영역에서 일구어낸 성과물을 보호하기 지키기 위하여, 정보보안담당에서는 핵심정보 보호체계 수립을 목표하였습니다.\n\n첫번째 과정으로 연구, 개발, 양산 각 영역의 주요 산출물을 기준으로 중요정보를 찾고자 합니다.\n\nTF에서는 산출물 내 데이터 분석을 통해 핵심정보 후보를 선별하였습니다. 설문은 후보 데이터 중 핵심정보에 해당하는 항목을 선택하도록 구성되어 있습니다.\n임직원께서 담당 또는 담당하셨던 업무를 바탕으로 답변 하여주시고,\n입력하신 정보는 퉁계를 통해 핵심정보 최종 도출 업무에 활용됩니다.\n\n설문에 소요되는 시간은 약 15분 내외이며, 자사의 핵심정보 식별 및 보호를 위한 과정으로 임직원 분들의 적극적인 지원과 신중한 답변을 부탁드립니다.\n\n응답해주신 내용은 TF 내부에서만 확인이 가능하며, 타인에게 공개되지 않습니다.\n\n■ 설문 요령----------------------------------------------------------------------\n① 질문에 해당하는 항목의 체크박스 선택\n② 자유기재 형식의 경우 서술형으로 작성\n③ Q2. 질문의 경우 항목 선택에 따라 질문 추가 생성\n\n바쁘신 와중에도 설문에 응해주셔서 감사드립니다.<br></br></pre>"
                },

                {
                    "type": "panel",
                    "name": "name-dept",
                    "title": "응답자의 성함 및 부서명을 기입하여 주시기 바랍니다",
                    "elements": [
                      {
                        "type": "text",
                        "name": "Name",
                        "title": "성함",
                        "isRequired": true,
                        "maxLength": 50
                      },
                      {
                        "type": "dropdown",
                        "name": "Dept",
                        "title": "사업부",
                        "startWithNewLine": false,
                        "isRequired": true,
                        "maxLength": 50,
                        "choices":[
                          { value: "CFO", text: "CFO"},
                          { value: "CPO", text: "CPO"},
                          { value: "CQO", text: "CQO"},
                          { value: "CTO", text: "CTO"},
                          { value: "ESS전지사업부", text: "ESS전지사업부"},
                          { value: "LG에너지솔루션(해외현지사원)", text: "LG에너지솔루션(해외현지사원)"},
                          { value: "소형전지사업부", text: "소형전지사업부"},
                          { value: "자동차전지사업부", text: "자동차전지사업부"},
                        ]
                      },
                      {
                        "type": "text",
                        "name": "center",
                        "title": "센터/담당",
                        "isRequired": false,
                        "maxLength": 50
                      },
                      {
                        "type": "text",
                        "name": "team",
                        "isRequired": true,
                        "title": "팀",
                        "startWithNewLine": false,
                        "maxLength": 50
                      },
                    ]
                  },
                  {
                    "type": "panel",
                    "name": "VOE",
                    "elements": [
                      {
                        "type": "html",
                        "name": "info",
                        "html": "<pre style='color:red; font-family:fontESR; font-size: 18px'>다음은 회사의 중요정보에 대한 VOE를 수집하기 위한 질문입니다.</pre>"
                      }, {
                        "type": "boolean",
                        "name": "Question0_1",
                        "title": "Q1. 응답자는 회사 업무 수행 시 중요한 정보를 취급한다고 생각합니까?",
                        "isRequired": true,
                        "valueTrue": "Yes",
                        "valueFalse": "No",
                      },
                      {
                        "type": "boolean",
                        "valueTrue": "Yes",
                        "valueFalse": "No",
                        "renderAs": "radio",
                        "name": "Question0_1_1",
                        "indent": 2,
                        "title": "Q1-1. 업무 중 주요정보를 판단 할 수 있는 부서내 자체적인 기준(문서, 지표 등)을 보유 또는 알고 있습니까?",
                        "visibleIf": "{Question0_1} = 'Yes'",
                        "isRequired": true,
                        "valueTrue": "Yes",
                        "valueFalse": "No",
                        "renderAs": "radio",
                        "colCount": 4,
                        "storeOthersAsComment": false,
                      },
                      {
                        "type": "text",
                        "name": "Question0_1_1_1",
                        "indent": 4,
                        "title": "Q. (1.1.1) 기준에 대한 간략한 설명 또는 문서명/관리주체를 작성해주세요.",
                        "visibleIf": "{Question0_1} contains 'Yes' and {Question0_1_1} contains 'Yes'",
                        "isRequired": true,
          
                      }, {
                        "type": "boolean",
                        "valueTrue": "Yes",
                        "valueFalse": "No",
                        "renderAs": "radio",
                        "name": "Question0_1_2",
                        "indent": 2,
                        "title": "Q1-2. 내/외부 협업 시 공유 및 전송이 필요한 경우 중요정보 여부에 대한 판단이 가능한 기준(문서, 지표 등)을 보유 또는 알고있습니까?",
                        "visibleIf": "{Question0_1} = 'Yes'",
                        "isRequired": true,
          
                      },
                      {
                        "type": "text",
                        "name": "Question0_1_2_1",
                        "indent": 4,
                        "title": "Q. (1.2.1) 기준에 대한 간략한 설명 또는 문서명/관리주체를 작성하여주세요",
                        "visibleIf": "{Question0_1} contains 'Yes' and {Question0_1_2} contains 'Yes'",
                        "isRequired": true,
                        "colCount": 4,
          
                      },
                      {
                        "type": "boolean",
                        "name": "Question0_1_3",
                        "valueTrue": "Yes",
                        "indent": 2,
                        "valueFalse": "No",
                        "renderAs": "radio",
                        "name": "Question0_1_3",
                        "title": "Q1-3. 응답자는 업무 수행 시 '중요정보 판단기준' 및 '중요정보 취급 가이드'가 필요하다고 생각합니까?",
                        "visibleIf": "{Question0_1} = 'Yes'",
                        "isRequired": true,
                        "choices": ["Yes", "No"],
                      },
                    ]
                  },
                  //// 후보군 (그룹명) 추가 ////
            ]
        },
        {
            ///// 수정 필요 --> 그룹화 Name 변경
            "name": "",   /// name --> 그룹화 Name 입력
            "navigationTitle": "", /// navigationTitle --> 그룹화 Name 입력
            
            "visibleIf": "{Question1} contains '도면'", /// Put your Group Category name
            "elements": [
                {
                    "type": "html",
                    "name": "info",
                    "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
                },
                {
                    "type": "panel",
                    "name": "Process_도면", /// Put your Group Category name (ex: Process_도면)
                    "elements": [
                        {
                            "type": "html",
                            "indent": 2,
                            "name": "info",
                            ///// 수정 필요 --> 그룹화 Name 변경
                            "visibleIf": "{Question1} contains '도면'", /// Put your Group Category name
                            ///// 수정 필요 --> 그룹화 Name 변경
                            "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>도면</div>"
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "도면_Question", /// 수정 필요 --> 그룹화 name 변경 (Ex 'Group name'_Question)
                    "elements": [

                        /// 첫번째 질문 Level1의 응답을 위한 Question
                        {
                            "type": "checkbox",
                            /// Question name db의 Column 명과 일치
                            "name": "Question1_A",
                            /// Put your Group Category name 
                            /// ex: "title": "Q1. 'your Group name'의 어떤 정보가 업무상 중요하게 취급됩니까?"
                            "title": "Q1. '도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                            /// 필수 질문 항목으로 선언 (true: 필수 항목 , false: skip 가능)
                            "isRequired": true,
                            /// colCount 의 경우 default:0 --> min:0 max:4 (max 4 이상일 경우 default로 적용)
                            "colCount": 4,
                            /// showOtherItem: '기타(자유 기재)' 적용
                            "showOtherItem": true,
                            /// choices: [List] 형태의 checkbox 항목 적용
                            "choices": ["와인딩 공정도면", "조립 공정도면", "부품 공정도면",],
                            /// storeothersAsComment -->True: {Question name}--> other로 저장된 후 {Question name}_Comment 형태로 입력 값 적용, 
                            ///                      -->False: {Question name} --> text 입력 값 저장
                            "storeOthersAsComment": false
                          },

                           /// 두번째 질문 Level2의 응답을 위한 Question
                        {
                            "type": "checkbox",
                            /// Question name db의 Column 명과 일치
                            "name": "Question1_A_1",
                            /// Put your Group Category name 
                            /// ex: "title": "Q1. 'your Group name'의 어떤 정보가 업무상 중요하게 취급됩니까?"
                            "title": "Q1. '와인딩 공정도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                            /// 필수 질문 항목으로 선언 (true: 필수 항목 , false: skip 가능)
                            "isRequired": true,
                            /// colCount 의 경우 default:0 --> min:0 max:4 (max 4 이상일 경우 default로 적용)
                            "colCount": 4,
                            /// showOtherItem: '기타(자유 기재)' 적용
                            "showOtherItem": true,
                            /// visibleIf: Casecade 형태로 상기의 질문에 따라 추가 질문 여부를 정의
                            "visibleIf": "{Question1} contains '도면' and {Question1_A} contains '와인딩 공정도면'",
                            /// choices: [List] 형태의 checkbox 항목 적용
                            "choices": ["Jelly Roll Ass'y A", "Jelly Roll Ass'y B", "Cathode Electrode Ass'y", "Anode Electrode Ass'y", "Separator", "Cathode Tab", "Anode In/Out Tab", "Sticky Tape",],
                            /// storeothersAsComment -->True: {Question name}--> other로 저장된 후 {Question name}_Comment 형태로 입력 값 적용, 
                            ///                      -->False: {Question name} --> text 입력 값 저장
                            "storeOthersAsComment": false,
                          },
                    ]

                }
            ]

        }
    ]
}