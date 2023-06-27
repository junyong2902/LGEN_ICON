export const json5 = {
  "progressTitle": "진행률",
  "progressBarType": "questions",
  "showQuestionNumbers": "off",
  previewText: "Preview",
  showPrevButton: false,
  pageNextText: "다음",
  pages:
    [
      {
        elements: [
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
                "name": "사업부",
                "title": "사업부",
                "startWithNewLine": false,
                "isRequired": true,
                "maxLength": 50,
                "choices": [
                  { value: "CFO", text: "CFO" },
                  { value: "CPO", text: "CPO" },
                  { value: "CQO", text: "CQO" },
                  { value: "CTO", text: "CTO" },
                  { value: "ESS전지사업부", text: "ESS전지사업부" },
                  { value: "LG에너지솔루션(해외현지사원)", text: "LG에너지솔루션(해외현지사원)" },
                  { value: "자동차.생산센터.LGESWA", text: "자동차.생산센터.LGESWA" },
                  { value: "자동차전지사업부", text: "자동차전지사업부" },
                ]
              },
              {
                "type": "text",
                "name": "담당/센터",
                "title": "담당/센터",
                "isRequired": false,
                "maxLength": 50
              },
              {
                "type": "text",
                "name": "팀",
                "title": "팀",
                "isRequired": true,
                "startWithNewLine": false,
                "maxLength": 50
              },
            ]
          },
          {
            "type": "panel",
            "name": "VOE",
            "elements": [{
              "type": "html",
              "name": "info",
              "html": "<pre style='color:red; font-family:fontESR; font-size: 18px;'>다음은 회사의 중요정보에 대한 VOE를 수집하기 위한 질문입니다.</pre>"
            },
            {
              "type": "boolean",
              "name": "Question0_1",
              "title": "Q. 응답자는 회사 업무 수행 시 중요한 정보를 취급한다고 생각합니까?",
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
              "title": "Q. 업무 중 어떤 정보가 중요정보인지 판단할 수 있는 기준이 있습니까?",
              "visibleIf": "{Question0_1} = 'Yes'",
              "isRequired": true,

              "colCount": 4,
              "storeOthersAsComment": false,
            },
            {
              "type": "text",
              "name": "Question0_1_1_1",
              "indent": 4,
              "title": "Q. 응답자는 중요정보를 어떤 기준으로 판단합니까? (경험, 판단 기준 출처, 관련 가이드/문서/정보가 있다면 작성 부탁드립니다)",
              "visibleIf": "{Question0_1} contains 'Yes' and {Question0_1_1} contains 'Yes'",
              "isRequired": true,
              "colCount": 4,
              "storeOthersAsComment": false,
            }, {
              "type": "boolean",
              "valueTrue": "Yes",
              "valueFalse": "No",
              "renderAs": "radio",
              "name": "Question0_1_2",
              "indent": 2,
              "title": "Q. 업무 중 중요정보를 타부서/협력사/고객사에 공유 시 참고할 수 있는 가이드/기준을 알고 있습니까?",
              "visibleIf": "{Question0_1} = 'Yes'",
              "isRequired": true,
              "colCount": 4,
              "storeOthersAsComment": false,
            },
            {
              "type": "text",
              "name": "Question0_1_2_1",
              "indent": 4,
              "title": "Q. 중요정보 공유시 참고하는 가이드/기준은 무엇입니까? (경험, 판단 기준 출처, 관련 가이드/문서/정보가 있다면 작성 부탁드립니다)",
              "visibleIf": "{Question0_1} contains 'Yes' and {Question0_1_2} contains 'Yes'",
              "isRequired": true,
              "colCount": 4,
              "storeOthersAsComment": false,
            }, {
              "type": "boolean",
              "valueTrue": "Yes",
              "valueFalse": "No",
              "renderAs": "radio",
              "name": "Question0_1_3",
              "indent": 2,
              "title": "Q. 응답자는 업무 수행 시 '중요정보 판단기준' 및 '중요정보 취급 가이드'가 필요하다고 생각합니까?",
              "visibleIf": "{Question0_1} = 'Yes'",
              "isRequired": true,
              "colCount": 4,
              "storeOthersAsComment": false,
            },

            {
              "type": "panel",
              "elements": [
                {
                  "type": "html",
                  "name": "info",
                  "html": "<pre style='color:red; font-family:fontESR; font-size:18px'>다음은 'Ess' 유형에 대한 업무 영역을 확인하기 위한 질문 입니다.</pre>"
                }, {
                  "type": "checkbox",
                  "name": "Question0_2",
                  "title": "Q2. 업무 중 주로 관여하는 개발 밸류체인은 어디에 해당됩니까? (중복선택 가능)",
                  "isRequired": true,
                  "choices": ["CV", "DV", "PD", "PV"],
                  "colCount": 4
                }, {
                  "type": "checkbox",
                  "name": "Question0_3",
                  "title": "Q3. CFT 상에서의 주된 역할은 무엇입니까?",
                  "isRequired": true,
                  "showOtherItem": true,
                  "choices": ["Product Planning (상품기획)", "Development (개발)", "Product/Production (생산)", "Technology (기술)", "International Certification (국제인증)", "Marketing, Sales (마케팅)", "Quality (품질)", "Purchaing (구매)"],
                  "colCount": 4,
                  "storeOthersAsComment": false,
                },
                /////// Qustion1///////
                {
                  "type": "checkbox",
                  "name": "Question1",
                  "title": "Q4. 업무상 취급되는 산출물 중 핵심정보를 포함하는 문서는 무엇입니까? (중복선택 가능)",
                  "visibleIf": "{Question0_2.length} > 0",
                  "isRequired": true,
                  "colCount": 4,
                  "showOtherItem": true,
                  "storeOthersAsComment": true,
                  "choices": [
                    { value: "품의서 (개발발의 품의서)", visibleIf: "{Question0_2} contains 'CV'" },
                    { value: "개발 계획서", visibleIf: "{Question0_2} contains 'CV'" },
                    { value: "부품 개발 계획서 (부품 개발 등급 포함)", visibleIf: "{Question0_2} contains 'CV' " },
                    { value: "안전/환경/품질 조사서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' " },
                    { value: "Gate Review", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                    { value: "제품사양서", visibleIf: "{Question0_2} contains 'DV'" },
                    { value: "BOM", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                    { value: "설계 Checklist", visibleIf: "{Question0_2} contains 'PD'" },
                    { value: "특별특성(CTQ/CTP) 목록표", visibleIf: "{Question0_2} contains 'DV'" },
                    { value: "도면", visibleIf: "{Question0_2} contains 'DV'" },
                    { value: "Control Plan", visibleIf: "{Question0_2} contains 'PD'" },
                    { value: "공정 흐름도", visibleIf: "{Question0_2} contains 'PD'" },
                    { value: "검사 결과서(IQC, LQC, OQC)", visibleIf: "{Question0_2} contains 'PD'" },
                    { value: "인증시험 계획서/결과서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                    { value: "공정성 평가 보고서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                    { value: "기능안전 문서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                    { value: "작업 표준서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                  ],
                },
              ]
            },
            ]
          },
        ]
      },
      {
        "name": "품의서 (개발발의 품의서)",
        "navigationTitle": "품의서 (개발발의 품의서)",
        "visibleIf": " {Question1} contains '품의서 (개발발의 품의서)'",
        "elements": [
          {
            "type": "html",
            "name": "info",
            "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
          },
          {
            "type": "panel",
            "name": "ProcessBox_품의서 (개발발의 품의서)",
            "elements": [
              {
                "type": "html",
                "indent": 2,
                "name": "info",
                "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)'",
                "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>품의서 (개발발의 품의서)</div>"
              },
            ]
          },
          {
            "type": "panel",
            "name": "품의서 (개발발의 품의서)_Question",
            "elements": [
              {
                "type": "checkbox",
                "name": "Question1_A",
                "title": "Q1. '품의서 (개발발의 품의서)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                "isRequired": true,
                "colCount": 4,
                "showOtherItem": true,
                "choices": ["Kick-off 회의록",],
                "storeOthersAsComment": false
              },
              {
                "type": "checkbox",
                "name": "Question1_A_1",
                "title": "Q1-1. 'Kick-off 회의록' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                "isRequired": true,
                "colCount": 4,
                "showOtherItem": true,
                "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains 'Kick-off 회의록'",
                "choices": ["이슈 및 논의사항", "담당부서 및 일정"],
                "storeOthersAsComment": false
              },
            ]
          },
        ]
        },
        {
          "name": "개발 계획서",
          "navigationTitle": "개발 계획서",
          "visibleIf": " {Question1} contains '개발 계획서'",
          "elements": [
            {
              "type": "html",
              "name": "info",
              "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
            },
            {
              "type": "panel",
              "name": "ProcessBox_개발 계획서",
              "elements": [
                {
                  "type": "html",
                  "indent": 2,
                  "name": "info",
                  "visibleIf": "{Question1} contains '개발 계획서'",
                  "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>개발 계획서</div>"
                },
              ]
            },
            {
              "type": "panel",
              "name": "개발 계획서_Question",
              "elements": [
                {
                  "type": "checkbox",
                  "name": "Question1_B",
                  "title": "Q1. '개발 계획서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                  "isRequired": true,
                  "colCount": 4,
                  "showOtherItem": true,
                  "choices": ["제품 Concept 설계안",],
                  "storeOthersAsComment": false
                },
                {
                  "type": "checkbox",
                  "name": "Question1_B_1",
                  "title": "Q1-1. '제품 Concept 설계안' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                  "isRequired": true,
                  "colCount": 4,
                  "showOtherItem": true,
                  "visibleIf": "{Question1} contains '개발 계획서' and {Question1_B} contains '제품 Concept 설계안'",
                  "choices": ["Dimension/Spec" , "Chemistry Deisgn"],
                  "storeOthersAsComment": false
                },
              ]
            },
          ]
          },
          {
            "name": "부품 개발 계획서 (부품 개발 등급 포함)",
            "navigationTitle": "부품 개발 계획서 (부품 개발 등급 포함)",
            "visibleIf": " {Question1} contains '부품 개발 계획서 (부품 개발 등급 포함)'",
            "elements": [
              {
                "type": "html",
                "name": "info",
                "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
              },
              {
                "type": "panel",
                "name": "ProcessBox_부품 개발 계획서 (부품 개발 등급 포함)",
                "elements": [
                  {
                    "type": "html",
                    "indent": 2,
                    "name": "info",
                    "visibleIf": "{Question1} contains '부품 개발 계획서 (부품 개발 등급 포함)'",
                    "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>부품 개발 계획서 (부품 개발 등급 포함)</div>"
                  },
                ]
              },
              {
                "type": "panel",
                "name": "부품 개발 계획서 (부품 개발 등급 포함)_Question",
                "elements": [
                  {
                    "type": "checkbox",
                    "name": "Question1_C",
                    "title": "Q1. '부품 개발 계획서 (부품 개발 등급 포함)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                    "isRequired": true,
                    "colCount": 4,
                    "showOtherItem": true,
                    "choices": ["원재료 수급 계획" , "재료 PPAP 일정",],
                    "storeOthersAsComment": false
                  },
                  {
                    "type": "checkbox",
                    "name": "Question1_C_1",
                    "title": "Q1-1. '원재료 수급 계획' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                    "isRequired": true,
                    "colCount": 4,
                    "showOtherItem": true,
                    "visibleIf": "{Question1} contains '부품 개발 계획서 (부품 개발 등급 포함)' and {Question1_C} contains '원재료 수급 계획'",
                    "choices": ["재료 종류" , "재료명" , "개발 대응 계획" , "위험도" , "검증 계획"],
                    "storeOthersAsComment": false
                  },
                  {
                    "type": "checkbox",
                    "name": "Question1_C_2",
                    "title": "Q1-1. '재료 PPAP 일정' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                    "isRequired": true,
                    "colCount": 4,
                    "showOtherItem": true,
                    "visibleIf": "{Question1} contains '부품 개발 계획서 (부품 개발 등급 포함)' and {Question1_C} contains '재료 PPAP 일정'",
                    "choices": ["Gate 일정" , "부품 승인 일정"],
                    "storeOthersAsComment": false
                  },
                ]
              },
            ]
            },
            {
              "name": "안전/환경/품질 조사서",
              "navigationTitle": "안전/환경/품질 조사서",
              "visibleIf": " {Question1} contains '안전/환경/품질 조사서'",
              "elements": [
                {
                  "type": "html",
                  "name": "info",
                  "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
                },
                {
                  "type": "panel",
                  "name": "ProcessBox_안전/환경/품질 조사서",
                  "elements": [
                    {
                      "type": "html",
                      "indent": 2,
                      "name": "info",
                      "visibleIf": "{Question1} contains '안전/환경/품질 조사서'",
                      "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>안전/환경/품질 조사서</div>"
                    },
                  ]
                },
                {
                  "type": "panel",
                  "name": "안전/환경/품질 조사서_Question",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "Question1_D",
                      "title": "Q1. '안전/환경/품질 조사서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                      "isRequired": true,
                      "colCount": 4,
                      "showOtherItem": true,
                      "choices": ["사용환경 조사표" , "안전성 Checklist"],
                      "storeOthersAsComment": false
                    },
                    {
                      "type": "checkbox",
                      "name": "Question1_D_1",
                      "title": "Q1-1. '사용환경 조사표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                      "isRequired": true,
                      "colCount": 4,
                      "showOtherItem": true,
                      "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_D} contains '사용환경 조사표'",
                      "choices": ["출시지역 온도/습도" , "경쟁사 온도 조건" , "사용 환경" , "관련 규격" , "시장 조건"],
                      "storeOthersAsComment": false
                    },
                    {
                      "type": "checkbox",
                      "name": "Question1_D_2",
                      "title": "Q1-1. '안전성 Checklist' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                      "isRequired": true,
                      "colCount": 4,
                      "showOtherItem": true,
                      "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_D} contains '안전성 Checklist'",
                      "choices": ["Checklist(Cell, Pack, BMS, BPU)" , "Checklist Overview"],
                      "storeOthersAsComment": false
                    },
                  ]
                },
              ]
              },
              {
                "name": "Gate Review",
                "navigationTitle": "Gate Review",
                "visibleIf": " {Question1} contains 'Gate Review'",
                "elements": [
                  {
                    "type": "html",
                    "name": "info",
                    "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
                  },
                  {
                    "type": "panel",
                    "name": "ProcessBox_Gate Review",
                    "elements": [
                      {
                        "type": "html",
                        "indent": 2,
                        "name": "info",
                        "visibleIf": "{Question1} contains 'Gate Review'",
                        "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>Gate Review</div>"
                      },
                    ]
                  },
                  {
                    "type": "panel",
                    "name": "Gate Review_Question",
                    "elements": [
                      {
                        "type": "checkbox",
                        "name": "Question1_E",
                        "title": "Q1. 'Gate Review'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "choices": ["실무자 회의록" , "PD 품평회 회의록" , "RWW 자료" , "Gate Check Sheet" , "CV Gate Review" , "DV Gate Review" , "PD Gate Review" , "Concept Verification" , "체크리스트 점검 결과"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_1",
                        "title": "Q1-1. '실무자 회의록' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains '실무자 회의록'",
                        "choices": ["논의 내용" , "담당부서" , "Comment 및 결정사항"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_2",
                        "title": "Q1-1. 'PD 품평회 회의록' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'PD 품평회 회의록'",
                        "choices": ["Gate Review 결과" , "논의 내용"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_3",
                        "title": "Q1-1. 'RWW 자료' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'RWW 자료'",
                        "choices": ["전력망 DC Flex" , "배터리 개요"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_4",
                        "title": "Q1-1. 'Gate Check Sheet' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'Gate Check Sheet'",
                        "choices": ["프로젝트 정보" , "Gate Checklist" , "Gate별 Process 운영"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_5",
                        "title": "Q1-1. 'CV Gate Review' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'CV Gate Review'",
                        "choices": ["개발 목표 검토 결과" , "모델별 설계 검토 결과" , "Safety 설계 검토" , "DFMEA" , "CTQ" , "DV 인증 시험 계획" , "부품 개발 검증 결과" , "부품 검증 현황"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_6",
                        "title": "Q1-1. 'DV Gate Review' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'DV Gate Review'",
                        "choices": ["프로젝트 정보" , "개발 목표 달성 여부 점검 결과" , "DV Gate 부품 검증 결과" , "설계 변경 List" , "주요 논의 사항" , "Elctrode Yield" , "Process capability Improvement Plan" , "조립 기술" , "DV Gate Review Follow Up"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_7",
                        "title": "Q1-1. 'PD Gate Review' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'PD Gate Review'",
                        "choices": ["PD Gate 점검 결과" , "부품 검증 결과" , "생산 이슈 Report" , "조립공정성" , "DV F/UP" , "8대 Safety"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_8",
                        "title": "Q1-1. 'Concept Verification' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'Concept Verification'",
                        "choices": ["Project Overview" , "Design Concept" , "설계 비교" , "개발 요구사항 검토" , "공정별 이슈 표" , "DFMEA Review" , "제품 CTQ" , "반제품 CTQ" , "DV 검증 시험 계획" , "DV 일정 계획" , "DV Build DOE Plan" , "8대 Safety 과제 설계 반영"],
                        "storeOthersAsComment": false
                      },
                      {
                        "type": "checkbox",
                        "name": "Question1_E_9",
                        "title": "Q1-1. '체크리스트 점검 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                        "isRequired": true,
                        "colCount": 4,
                        "showOtherItem": true,
                        "visibleIf": "{Question1} contains 'Gate Review' and {Question1_E} contains 'Concept Verification'",
                        "choices": ["설계 점검 결과" , "공정 점검 결과" , "규격 점검 결과" , "검증 점검 결과"],
                        "storeOthersAsComment": false
                      },
                    ]
                  },
                ]
                },
                {
                  "name": "제품사양서",
                  "navigationTitle": "제품사양서",
                  "visibleIf": " {Question1} contains '제품사양서'",
                  "elements": [
                    {
                      "type": "html",
                      "name": "info",
                      "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
                    },
                    {
                      "type": "panel",
                      "name": "ProcessBox_제품사양서",
                      "elements": [
                        {
                          "type": "html",
                          "indent": 2,
                          "name": "info",
                          "visibleIf": "{Question1} contains '제품사양서'",
                          "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>제품사양서</div>"
                        },
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "제품사양서",
                      "elements": [
                        {
                          "type": "checkbox",
                          "name": "Question1_F",
                          "title": "Q1. '제품사양서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                          "isRequired": true,
                          "colCount": 4,
                          "showOtherItem": true,
                          "choices": ["Raw Material List" , "Separator & Electrode Process" , "Electrode Storage Period" , "제품 규격서"],
                          "storeOthersAsComment": false
                        },
                        {
                          "type": "checkbox",
                          "name": "Question1_F_1",
                          "title": "Q1-1. 'Raw Material List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                          "isRequired": true,
                          "colCount": 4,
                          "showOtherItem": true,
                          "visibleIf": "{Question1} contains '제품사양서' and {Question1_F} contains 'Raw Material List'",
                          "choices": ["Material Name" , "MDM Code" , "Company Name"],
                          "storeOthersAsComment": false
                        },
                        {
                          "type": "checkbox",
                          "name": "Question1_F_2",
                          "title": "Q1-1. 'Separator & Electrode Process' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                          "isRequired": true,
                          "colCount": 4,
                          "showOtherItem": true,
                          "visibleIf": "{Question1} contains '제품사양서' and {Question1_F} contains 'Separator & Electrode Process'",
                          "choices": ["Separator Process" , "Mixing Process" , "Coating Process" , "Roll Press Process" , "Slitting Process"],
                          "storeOthersAsComment": false
                        },
                        {
                          "type": "checkbox",
                          "name": "Question1_F_3",
                          "title": "Q1-1. 'Electrode Storage Period' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                          "isRequired": true,
                          "colCount": 4,
                          "showOtherItem": true,
                          "visibleIf": "{Question1} contains '제품사양서' and {Question1_F} contains 'Electrode Storage Period'",
                          "choices": ["프로세스별 기간"],
                          "storeOthersAsComment": false
                        },
                        {
                          "type": "checkbox",
                          "name": "Question1_F_4",
                          "title": "Q1-1. '제품 규격서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                          "isRequired": true,
                          "colCount": 4,
                          "showOtherItem": true,
                          "visibleIf": "{Question1} contains '제품사양서' and {Question1_F} contains '제품 규격서'",
                          "choices": ["Notching(Cathode, Anode)" , "Vacuum Drying" , "Lamination(Mono-cell, Half-cell)" , "Stacking Process" , "Pre-welding / Tab Cutting Process" , "Lead Welding Process" , "CPP Taping Process" , "Al Pouch Forming Process" , "Packaging Process" , "Formation Process" , "Formation Rework Process" , "Degas Process" , "Trimming Process" , "Double Side Folding Process" , "Final Cell 100% Inspection" , "Product Inspection" , "Final Cell"],
                          "storeOthersAsComment": false
                        },
                      ]
                    },
                  ]
                  },
                  {
                    "name": "BOM",
                    "navigationTitle": "BOM",
                    "visibleIf": " {Question1} contains 'BOM'",
                    "elements": [
                      {
                        "type": "html",
                        "name": "info",
                        "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 'Ess' 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
                      },
                      {
                        "type": "panel",
                        "name": "ProcessBox_BOM",
                        "elements": [
                          {
                            "type": "html",
                            "indent": 2,
                            "name": "info",
                            "visibleIf": "{Question1} contains 'BOM'",
                            "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>BOM</div>"
                          },
                        ]
                      },
                      {
                        "type": "panel",
                        "name": "BOM_Question",
                        "elements": [
                          {
                            "type": "checkbox",
                            "name": "Question1_G",
                            "title": "Q1. 'BOM'의 어떤 정보가 업무상 중요하게 취급됩니까?",
                            "isRequired": true,
                            "colCount": 4,
                            "showOtherItem": true,
                            "choices": ["Application" , "Cell information" , "생산원단위 표" , "자재별 Net 소요량 표"],
                            "storeOthersAsComment": false
                          },
                          {
                            "type": "checkbox",
                            "name": "Question1_G_1",
                            "title": "Q1-1. 'Cell information' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                            "isRequired": true,
                            "colCount": 4,
                            "showOtherItem": true,
                            "visibleIf": "{Question1} contains 'BOM' and {Question1_G} contains 'Cell information'",
                            "choices": ["Model Name" , "Capacity" , "Bi-cell 수" , "Size" , "양극" , "음극" , "분리막"],
                            "storeOthersAsComment": false
                          },
                          {
                            "type": "checkbox",
                            "name": "Question1_G_2",
                            "title": "Q1-1. '생산원단위 표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                            "isRequired": true,
                            "colCount": 4,
                            "showOtherItem": true,
                            "visibleIf": "{Question1} contains 'BOM' and {Question1_G} contains '생산원단위 표'",
                            "choices": ["MDM Code" , "Grade" , "Supplier" , "개발원단위" , "생산원단위" , "Amount in Final Cell"],
                            "storeOthersAsComment": false
                          },
                          {
                            "type": "checkbox",
                            "name": "Question1_G_3",
                            "title": "Q1-1. '자재별 Net 소요량 표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
                            "isRequired": true,
                            "colCount": 4,
                            "showOtherItem": true,
                            "visibleIf": "{Question1} contains 'BOM' and {Question1_G} contains '자재별 Net 소요량 표'",
                            "choices": ["레벨" , "자재명" , "자재내역" , "소요량" , "자재사양"],
                            "storeOthersAsComment": false
                          },
                        ]
                      },
                    ]
                    },
                    ]
  
}
