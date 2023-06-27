export const json3 = {
  "progressTitle": "진행률",
  "progressBarType": "questions",
  previewText: "Preview",
  "pages": [
    {
      "name": "intropage",
      "navigationTitle": "intropage",
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
        {
          "type": "panel",
          "elements": [
            {
              "type": "html",
              "name": "info",
              "html": "<pre style='color:red; font-family:fontESR; font-size:18px'>다음은 '자동차'배터리 유형에 대한 업무 영역을 확인하기 위한 질문 입니다.</pre>"
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
                { value: "요구사항 검토서", visibleIf: "{Question0_2} contains 'CV'" },
                { value: "개발 계획서", visibleIf: "{Question0_2} contains 'CV'" },
                { value: "예비 공정 흐름도", visibleIf: "{Question0_2} contains 'CV'" },
                { value: "수익성 검토서", visibleIf: "{Question0_2} contains 'CV'" },
                { value: "DFMEA", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "특별특성 목록표", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "안전/환경/품질 조사서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "Gate Review", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "PFMEA", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "제품사양서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "MSDS", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' " },
                { value: "BOM", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "설계 Checklist", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "특별특성(CTQ/CTP) 목록표", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "부품/자재사양서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "도면", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "Control Plan", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "공정 흐름도", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "검사 기준서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "공정성 검증 계획서", visibleIf: "{Question0_2} contains 'DV'or {Question0_2} contains 'PD'" },
                { value: "품의서 (샘플 제작 품의서)", visibleIf: "{Question0_2} contains 'DV'or {Question0_2} contains 'PD'or {Question0_2} contains 'PV'" },
                { value: "부품/자재 구매요청", visibleIf: "{Question0_2} contains 'CV'or {Question0_2} contains 'DV'or {Question0_2} contains 'PD'" },
                { value: "검사 결과서(IQC, LQC, OQC)", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "샘플 생산 결과서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "인증시험 계획서/결과서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "공정성 평가 보고서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "고객 설계사양 승인", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "기능안전 문서", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "교육 계획서/결과보고서", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "포장용기 사양서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "형/설비 점검 결과서", visibleIf: "{Question0_2} contains 'PV' " },
                { value: "구매요청서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "측정 시스템 평가서(IQC, LQC, OQC)", visibleIf: "{Question0_2} contains 'PD' " },
                { value: "작업 표준서", visibleIf: "{Question0_2} contains 'PD' " },
                { value: "부품 승인서", visibleIf: "{Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "품의서 (개시 품의서)", visibleIf: "{Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "유동 관리 계획", visibleIf: "{Question0_2} contains 'PV' " },
                { value: "공정감사 결과서", visibleIf: "{Question0_2} contains 'PV' " },
                { value: "품의서 (샘플 출하 품의서)", visibleIf: "{Question0_2} contains 'DV' " },

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
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
              "choices": ["개발 등급 결정서", "CFT 조직도", "WBS Elements (Datasheet)"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_A_1",
              "indent": 2,
              "title": "Q1-1. '개발 등급 결정서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains '개발 등급 결정서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["개발등급 결정 사유", "개발등급 정의",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_A_1_1",
            //   "indent": 4,
            //   "title": "Q. '개발등급 결정 사유' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains '개발 등급 결정서' and {Question1_A_1} contains '개발등급 결정 사유'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["평가 항목", "평가 세부 내용", "레벨", "가중치", "점수",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_A_1_2",
            //   "indent": 4,
            //   "title": "Q. '개발등급 정의' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains '개발 등급 결정서' and {Question1_A_1} contains '개발등급 정의'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["개발등급", "Gate 진행 원칙", "기존 등급 책정 사례",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },
            {
              "type": "checkbox",
              "name": "Question1_A_2",
              "indent": 2,
              "title": "Q1-2. 'CFT 조직도' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains 'CFT 조직도'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["본사 조직 구성", "중국 법인 조직 구성",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_A_3",
              "indent": 2,
              "title": "Q1-3. 'WBS Elements (Datasheet)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (개발발의 품의서)' and {Question1_A} contains 'WBS Elements (Datasheet)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Phase(Gate)", "Process Area", "Process", "Activity", "Task", "Element Name", "Element Type - Phase, Activity, Task", "Oragnization", "Duration", "Output Name", "Mandatory (필수 해당 여부)", "Screen Code", "Connnect Screen Code", "Activity Code", "Review Flag - True/False",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],


    },
    {
      "name": "요구사항 검토서",
      "navigationTitle": "요구사항 검토서",
      "visibleIf": " {Question1} contains '요구사항 검토서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_요구사항 검토서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '요구사항 검토서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>요구사항 검토서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "요구사항 검토서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_B",
              "title": "Q1. '요구사항 검토서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["제품 국제 규격/법규 검토 결과서", "Warranty 검토 결과서", "유해물질 검토계획 및 결과서", "Compliance Matrix(고객요구사항)", "Compliance Matrix(포장 물류)", "Compliance Matrix(품질, 불량률 이슈)", "Compliance Matrix(공정)",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_B_1",
              "indent": 2,
              "title": "Q1-1. '제품 국제 규격/법규 검토 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains '제품 국제 규격/법규 검토 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["규격명", "규격 현수준 및 예상수준", "규격 대응계획",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_B_2",
              "indent": 2,
              "title": "Q1-2. 'Warranty 검토 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Warranty 검토 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["고객 수명 요구 수준", "User Conditions", "수명 예측 모델", "수명 예측 시나리오", "주행 시나리오",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_2_1",
            //   "indent": 4,
            //   "title": "Q. 'User Conditions' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Warranty 검토 결과서' and {Question1_B_2} contains 'User Conditions'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["주행 패턴 및 온도", "수명 예측에 사용된 data",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_B_3",
              "indent": 2,
              "title": "Q1-3. '유해물질 검토계획 및 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains '유해물질 검토계획 및 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["원부자재 유해물질분석 계획", "Cell 유해물질분석 계획",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_3_1",
            //   "indent": 4,
            //   "title": "Q. '원부자재 유해물질분석 계획' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains '유해물질 검토계획 및 결과서' and {Question1_B_3} contains '원부자재 유해물질분석 계획'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["원부자재 종류", "자재코드", "원부자재명", "원부자재 공급 업체명", "신규재료 여부", "관련 법규", "유해물질 분석 계획 일정", "유해물질 분석 결과서 공유방법",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_3_2",
            //   "indent": 4,
            //   "title": "Q. 'Cell 유해물질분석 계획' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains '유해물질 검토계획 및 결과서' and {Question1_B_3} contains 'Cell 유해물질분석 계획'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["Cell 종류", "모델명", "샘플 단계", "생산 Site", "유해물질 분석 계획 일정", "유해물질 분석 결과서 공유방법",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_B_4",
              "indent": 2,
              "title": "Q1-4. 'Compliance Matrix(고객요구사항)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(고객요구사항)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "기술 제안", "고객 요구사항 검토",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_4_1",
            //   "indent": 4,
            //   "title": "Q. '프로젝트 정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(고객요구사항)' and {Question1_B_4} contains '프로젝트 정보'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["수주 규모", "차량 생산지", "공급제품", "SOP", "적용차량", "최종 판가(고객기준)", "PJT 개발 등급", "제품 3D이미지", "제품 사이즈", "수량", "배터리 용량", "고객·개발·생산 일정 비교", "연도별 수주 물량 계획"],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_4_2",
            //   "indent": 4,
            //   "title": "Q. '기술 제안' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(고객요구사항)' and {Question1_B_4} contains '기술 제안'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["요구 사양", "제안 사양", "제안 사양별 장단점 비교",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_4_3",
            //   "indent": 4,
            //   "title": "Q. '고객 요구사항 검토' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(고객요구사항)' and {Question1_B_4} contains '고객 요구사항 검토'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["개발 목표", "측정 조건", "고객 요구사항", "현수준", "설계 개선안",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_B_5",
              "indent": 2,
              "title": "Q1-5. 'Compliance Matrix(포장 물류)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(포장 물류)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["운송 구간", "비용 항목", "비용 합계",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_5_1",
            //   "indent": 4,
            //   "title": "Q. '운송 구간' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(포장 물류)' and {Question1_B_5} contains '운송 구간'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["포장", "물류", "회수", "창고작업"],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_B_6",
              "indent": 2,
              "title": "Q1-6. 'Compliance Matrix(품질, 불량률 이슈)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(품질, 불량률 이슈)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["판매수량", "불량수량", "불량률", "불량 항목", "불량 항목별 대안책 적용 시기", "불량 항목별 월별 발생 빈도",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_6_1",
            //   "indent": 4,
            //   "title": "Q. '불량 항목' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(품질, 불량률 이슈)' and {Question1_B_6} contains '불량 항목'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["양극탭 찢김&뚫림", "폴딩분리막 찢김", "분리막 뚫림(tab 부)", "분리막 뚫림(V홈 부)", "파우치 뚫림(절연파괴)", "폴딩 분리막 접힘", "Mono-cell 분리막 찢김", "외관찢김"],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_B_7",
              "indent": 2,
              "title": "Q1-7. 'Compliance Matrix(공정)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(공정)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["치수 설계 가이드 검토 항목", "판정결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_7_1",
            //   "indent": 4,
            //   "title": "Q. '치수 설계 가이드 검토 항목' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(공정)' and {Question1_B_7} contains '치수 설계 가이드 검토 항목'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["전극", "조립", "활성화",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            // {
            //   "type": "checkbox",
            //   "name": "Question1_B_7_2",
            //   "indent": 4,
            //   "title": "Q. '판정결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '요구사항 검토서' and {Question1_B} contains 'Compliance Matrix(공정)' and {Question1_B_7} contains '판정결과'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["판정결과(Pass/Fail)", "항목 수", "적용 수", "적용 예정 수", "미적용 수",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

          ]
        },

      ],
    },
    {
      "name": "개발 계획서",
      "navigationTitle": "개발 계획서",
      "visibleIf": " {Question1} contains '개발 계획서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
              "name": "Question1_C",
              "title": "Q1. '개발 계획서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Master Schedule", "Cell Design Concept", "필드 불량률 예측",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_C_1",
              "indent": 2,
              "title": "Q1-1. 'Master Schedule' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_C} contains 'Master Schedule'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["주요 Action Plan", "샘플 생산 일정", "원자재 수급 및 부품 승인 일정",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_C_2",
              "indent": 2,
              "title": "Q1-2. 'Cell Design Concept' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_C} contains 'Cell Design Concept'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Cell 도면 이미지", "Cell information",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_C_2_1",
            //   "indent": 4,
            //   "title": "Q. 'Cell information' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '개발 계획서' and {Question1_C} contains 'Cell Design Concept' and {Question1_C_2} contains 'Cell information'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["Cell 설계 주요 사항", "Cell 용량/두께 검토 결과",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_C_3",
              "indent": 2,
              "title": "Q1-3. '필드 불량률 예측' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_C} contains '필드 불량률 예측'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["HPCD 미적용(Risk 구간 1)", "HPCD 적용품(Risk 구간 2)",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },

      ],
    },
    {
      "name": "예비 공정 흐름도",
      "navigationTitle": "예비 공정 흐름도",
      "visibleIf": " {Question1} contains '예비 공정 흐름도'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_예비 공정 흐름도",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '예비 공정 흐름도'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>예비 공정 흐름도</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "예비 공정 흐름도_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_D",
              "title": "Q1. '예비 공정 흐름도'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["공정별 흐름도 Diagram",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_D_1",
              "indent": 2,
              "title": "Q1-1. 'Master Schedule' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '예비 공정 흐름도' and {Question1_D} contains '공정별 흐름도 Diagram'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Notching", "L&S", "Welding & Taping", "forming & Packging", "filling & Final sealing", "formation"],
              "storeOthersAsComment": false,
              "colCount": 4
            },


          ]
        },

      ],
    },
    {
      "name": "수익성 검토서",
      "navigationTitle": "수익성 검토서",
      "visibleIf": " {Question1} contains '수익성 검토서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_수익성 검토서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '수익성 검토서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>수익성 검토서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "수익성 검토서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_E",
              "title": "Q1. '수익성 검토서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Cell 원가 절감안", "설계 조건", "BR vs. CV 원가 비교"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_E_1",
              "indent": 2,
              "title": "Q1-1. '설계 조건' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '수익성 검토서' and {Question1_E} contains '설계 조건'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["활물질", "바인더", "도전재", "집전체", "전극로딩", "전극밀도", "Porosity", "CMC", "Loading raio", "첨가제 및 용매", "주액량", "Excess Factor", "분리막", "SRS", "Lead Ass'y. N/P ratio", "Minimum Capacity", "Norminal Capcity"],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },

      ],
    },
    {
      "name": "DFMEA",
      "navigationTitle": "DFMEA",
      "visibleIf": " {Question1} contains 'DFMEA'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_DFMEA",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'DFMEA'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>DFMEA</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "DFMEA_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_F",
              "title": "Q1. 'DFMEA'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["DFMEA 활동 결과", "잠재적 원인 시스템 요소",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_F_1",
              "indent": 2,
              "title": "Q1-1. 'DFMEA 활동 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'DFMEA' and {Question1_F} contains 'DFMEA 활동 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["신규재료/신규설계 (구분)", "검증 대상 (종류 및 상세)", "적용 이유", "Risk", "개발 대응 계획", "검증 계획",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_F_2",
              "indent": 2,
              "title": "Q1-2. '잠재적 원인 시스템 요소' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'DFMEA' and {Question1_F} contains '잠재적 원인 시스템 요소'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["잠재적 고장", "고장의 잠재적 영향", "Sev. 심각도", "고장의 잠재적 원인", "현재 예방 조치", "Occ. 발생도", "현재 검출 조치", "Dev. 검출도", "RPN", "최적화 조치", "개선 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "특별특성 목록표",
      "navigationTitle": "특별특성 목록표",
      "visibleIf": " {Question1} contains '특별특성 목록표'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_특별특성 목록표",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '특별특성 목록표'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>특별특성 목록표</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "특별특성 목록표_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_G",
              "title": "Q1. '특별특성 목록표'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["특별특성 점검 요건", "선정 사유", "관리항목", "관리문서번호", "상세 스펙", "스펙 선정 기준", "요건 관리 현황", "점검 결과",],
              "storeOthersAsComment": false
            },


          ]
        },

      ],
    },
    {
      "name": "안전/환경/품질 조사서",
      "navigationTitle": "안전/환경/품질 조사서",
      "visibleIf": " {Question1} contains '안전/환경/품질 조사서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
              "name": "Question1_H",
              "title": "Q1. '안전/환경/품질 조사서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["PL Claim 조사표", "기술수준 조사표", "오사용 조건 분석 결과", "안전 부품 관리 LIST", "사용환경 조사표", "안전성 Checklist", "안전공정관리 List",],
              "storeOthersAsComment": false
            },


            {
              "type": "checkbox",
              "name": "Question1_H_1",
              "indent": 2,
              "title": "Q1-1. 'PL Claim 조사표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains 'PL Claim 조사표'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["제품명", "대표 MODEL 명", "사고원인", "유사 MODEL 명", "생산년도", "개선내용", "개선 완료일", "재발시험방법 - 시험항목 및 관련표준",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_H_2",
              "indent": 2,
              "title": "Q1-2. '기술수준 조사표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '기술수준 조사표'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["보호장치 비교분석", "Critical Component/Construction 경쟁사 비교분석 - 보호장치", "자사품 평가방법 및 결과(자사 제품 시험 결과) - 보호장치", "경고 내용, 경고 문구 없을 시 원인과 대책",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_H_2_1",
            //   "indent": 2,
            //   "title": "Q. '보호장치 비교분석' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '기술수준 조사표' and {Question1_H_2} contains '보호장치 비교분석'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["경쟁사/자사제품 부착 수 비교", "경쟁사/자사제품 용도 비교",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_H_3",
              "indent": 2,
              "title": "Q1-3. '오사용 조건 분석 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '오사용 조건 분석 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["오사용조건", "예상위험성", "대책",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_H_4",
              "indent": 2,
              "title": "Q1-4. '안전 부품 관리 LIST' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '안전 부품 관리 LIST'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["부품명", "시험방법", "중점관리항목", "시험주기", "협력사명(제품명, 제조사)",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_H_5",
              "indent": 2,
              "title": "Q1-5. '사용환경 조사표' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '사용환경 조사표'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["출시지역 온도/습도", "출시사례", "시장조건", "관련규격",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_H_6",
              "indent": 2,
              "title": "Q1-6. '안전성 Checklist' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '안전성 Checklist'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["평가 진행 현황", "시험 보고서",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_H_7",
              "indent": 2,
              "title": "Q1-7. '안전공정관리 List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_H} contains '안전공정관리 List'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["안전공정 항목", "고장모드", "안전성영향", "고장원인(1차, 2차)", "관리항목 및 관리방법",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },

      ],
    },
    {
      "name": "Gate Review",
      "navigationTitle": "Gate Review",
      "visibleIf": " {Question1} contains 'Gate Review'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
              "name": "Question1_I",
              "title": "Q1. 'Gate Review'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Gate Check Sheet", "Gate Check", "Cell Concept Verification", "DV Gate 점검결과", "PD, PV Gate 검토 결과", "CE PV Gate 점검​", "실무자 회의록",],
              "storeOthersAsComment": false
            },


            {
              "type": "checkbox",
              "name": "Question1_I_1",
              "indent": 2,
              "title": "Q1-1. 'Gate Check Sheet' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'Gate Check Sheet'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "Gate Checklist", "Score Table", "QC Map Process", "Gate별 Process 운영",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_I_2",
              "indent": 2,
              "title": "Q1-2. 'Gate Check' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'Gate Check'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["점수표(DR, DV, PV, MPV)", "평가 Checklist(DR, DV, PV, MPV)", "Project Risk", "고객사별 안전 시험 종류",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_I_3",
              "indent": 2,
              "title": "Q1-3. 'Cell Concept Verification' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'Cell Concept Verification'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["BR Review", "Project Overview", "Concept Verification",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_I_4",
              "indent": 2,
              "title": "Q1-4. 'DV Gate 점검결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'DV Gate 점검결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["DV gate 품평회 회의록", "Gate 점검 결과", "논의사항 및 요청사항", "DV 단계 Pending 항목", "DV Gate 리뷰", "DV Gate 부품 검증 결과 보고"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            // {
            //   "type": "checkbox",
            //   "name": "Question1_I_2_1",
            //   "indent": 2,
            //   "title": "Q. '보호장치 비교분석' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
            //   "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains '기술수준 조사표' and {Question1_I_2} contains '보호장치 비교분석'",
            //   "isRequired": true,
            //   "showOtherItem": true,
            //   "choices": ["경쟁사/자사제품 부착 수 비교", "경쟁사/자사제품 용도 비교",],
            //   "storeOthersAsComment": false,
            //   "colCount": 4
            // },

            {
              "type": "checkbox",
              "name": "Question1_I_5",
              "indent": 2,
              "title": "Q1-5. 'PD, PV Gate 검토 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'PD, PV Gate 검토 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정성 점검 결과", "CP(공정 Parameter) 점검 결과", "안전 설계 검증 결과", "규격 만족 여부 점검 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_I_6",
              "indent": 2,
              "title": "Q1-6. 'CE PV Gate 점검​' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'CE PV Gate 점검​'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정성 점검 결과", "CP(공정 Parameter) 점검 결과", "안전 설계 검증 결과", "규격 만족 여부 점검 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_I_7",
              "indent": 2,
              "title": "Q1-7. 'CE PV Gate 점검​' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains 'CE PV Gate 점검​'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["8대 safety 점검 결과", "개발 목표 만족 여부 점검 결과", "수율 점검 결과", "공정 능력 점검 결과", "PV 전극 수율 현황", "PV 전극 수율 pareto chart",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_I_8",
              "indent": 2,
              "title": "Q1-8. '실무자 회의록' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Gate Review' and {Question1_I} contains '실무자 회의록'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["회의 개요(일시, 장소, 참석자)", "회의 내용", "개발 단축 상세 계획",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },


      ],
    },
    {
      "name": "PFMEA",
      "navigationTitle": "PFMEA",
      "visibleIf": " {Question1} contains 'PFMEA'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_PFMEA",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'PFMEA'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>PFMEA</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "PFMEA_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_J",
              "title": "Q1. 'PFMEA'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["기능", "요구사항", "잠재적 고장", "고장의 잠재적 영향(들)", "Sev. 심각도", "고장의 잠재적 원인(들)​", "현재 예방 조치", "Occ. 발생도", "검출 조치", "Dev. 검출도", "RPN", "추천 조치", "결과",],
              "storeOthersAsComment": false
            },


            {
              "type": "checkbox",
              "name": "Question1_J_1",
              "indent": 2,
              "title": "Q1-1. '결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'PFMEA' and {Question1_J} contains '결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["실행된 조치", "Sev. 심각도", "Occ. 발생도", "Dev. 검출도", "RPN", "AP",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "제품사양서",
      "navigationTitle": "제품사양서",
      "visibleIf": " {Question1} contains '제품사양서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
          "name": "제품사양서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_K",
              "title": "Q1. '제품사양서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["제작사양서", "사내 표준 제품 사양서",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_K_1",
              "indent": 2,
              "title": "Q1-1. '제작사양서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '제품사양서' and {Question1_K} contains '제작사양서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["투자 개요", "제작 개요", "제품규격", "공통사양", "일반사양", "상세사양", "설비 공통사양", "공정별 형개발 사양", "제작사양", "검수(A/T)사양",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_K_2",
              "indent": 2,
              "title": "Q1-2. '사내 표준 제품 사양서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '제품사양서' and {Question1_K} contains '사내 표준 제품 사양서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["사내 표준 원안 처리서", "사내 표준 이력 관리 대장", "사내 표준",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "MSDS",
      "navigationTitle": "MSDS",
      "visibleIf": " {Question1} contains 'MSDS'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_MSDS",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'MSDS'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>MSDS</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "MSDS_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_L",
              "title": "Q1. 'MSDS'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["MSDS", "시험 성적서",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_L_1",
              "indent": 2,
              "title": "Q1-1. 'MSDS' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'MSDS' and {Question1_L} contains 'MSDS'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Chemical Product and Company Identification", "Composition Information (구성정보)", "Harzardous Identification", "First Aid Measure", "Fire Fighting Measures", "Accidental Realease Measues", "Handling and Storage", "Exposure Controls / Personal Protection", "Physical and Chemical Properties", "Stability and Reactivity", "Toxicological Information", "Ecological Information", "Disposal Consideration", "Transport Infomation", "Regulatory Information",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_L_2",
              "indent": 2,
              "title": "Q1-2. '시험 성적서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'MSDS' and {Question1_L} contains '시험 성적서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Product Name", "시험의뢰 업체명", "Sample No. 및 Name", "Sample Description", "시험 항목"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "BOM",
      "navigationTitle": "BOM",
      "visibleIf": " {Question1} contains 'BOM'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
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
              "name": "Question1_M",
              "title": "Q1. 'BOM'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Application", "Cell Information", "Size", "Configuration", "Manufacturing Information", "표준원단위 Spec", "자재명세", "설계 Loss 상세",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_M_1",
              "indent": 2,
              "title": "Q1-1. 'Cell Information' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains 'Cell Information'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Model Name", "Product Type", "Status(개발)", "Capacoty", "Bi-cell 수", "Stack 수", "Tab", "Cell Type", "Nominal Voltage(V)", "Voltage Range(V)", "Sealing(면)", "SRS 정보", "충방전 소요시간(분)", "Taping·Folding Type",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_2",
              "indent": 2,
              "title": "Q1-2. 'Size' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains 'Size'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Foot Print(mm)", "Cell Size(mm)", "Cathode(mm)", "Anode(mm)", "Separator(mm)"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_3",
              "indent": 2,
              "title": "Q1-3. 'Configuration' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains 'Configuration'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Module", "Configuraion", "Pack Configuration", "Cell/Module", "Module/Pack", "Cell/Pack",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_4",
              "indent": 2,
              "title": "Q1-4. 'Manufacturing Information' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains 'Manufacturing Information'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["음극 VD", "양극 VD",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_5",
              "indent": 2,
              "title": "Q1-5. '표준원단위 Spec' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains '표준원단위 Spec'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Double Layer 유무", "Bi-cell Quatity", "Separator Width", "SRS Pancake Lane(ea)", "SRS 분리막 입고 형태", "Notching Type",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_6",
              "indent": 2,
              "title": "Q1-6. '자재명세' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains '자재명세'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["자재 구분", "자재코드", "원재료명", "원재료 업체", "Net 소요량", "설계 Loss 포함", "Width(mm)", "생산 Loss 포함", "설계 Loss(%)", "생산 Loss(%)", "적용 단위", "구매 단위",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_M_7",
              "indent": 2,
              "title": "Q1-7. '설계 Loss 상세' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'BOM' and {Question1_M} contains '설계 Loss 상세'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["발생 공정", "Loss 항목", "반영률(Loss%)", "Loss 반영 원부자재", "Loss Logic", "상세 도면",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "설계 Checklist",
      "navigationTitle": "설계 Checklist",
      "visibleIf": " {Question1} contains '설계 Checklist'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_설계 Checklist",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '설계 Checklist'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>설계 Checklist</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "설계 Checklist_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_N",
              "title": "Q1. '설계 Checklist'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["특성 분류", "시험 항목", "부품", "설계 Check 사항", "Check 상세 내용 및 판정기준", "적용 여부", "판단 근거", "개발팀 및 개발품질팀 의견", "이슈 모델 및 이슈 상세", "GPLM 등록번호", "검토 중인 설계", "Design Title", "도면", "Features", "Design Intent(Estimated)", "Measured", "설계 Checklist 검토 결과서", "설계 가이드 검토",],
              "storeOthersAsComment": false
            },

            {
              "type": "checkbox",
              "name": "Question1_N_1",
              "indent": 2,
              "title": "Q1-1. 'Design Intent(Estimated)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '설계 Checklist' and {Question1_N} contains 'Design Intent(Estimated)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양극", "음극", "설계공차", "Desired Cpk", "Standard Deviation", "Variance", "Percent Control",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_N_2",
              "indent": 2,
              "title": "Q1-2. 'Measured' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '설계 Checklist' and {Question1_N} contains 'Measured'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양극", "음극", "설계공차", "Desired Cpk", "Standard Deviation", "Variance", "Percent Control",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_N_3",
              "indent": 2,
              "title": "Q1-3. '설계 Checklist 검토 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '설계 Checklist' and {Question1_N} contains '설계 Checklist 검토 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["8대 Safety 설계 검토 힝목", "점검 기준", "측정 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_N_4",
              "indent": 2,
              "title": "Q1-4. '설계 가이드 검토' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '설계 Checklist' and {Question1_N} contains '설계 가이드 검토'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["설계 가이드 검토 결과", "주요 치수 검토",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },

      ],
    },
    {
      "name": "특별특성(CTQ/CTP) 목록표",
      "navigationTitle": "특별특성(CTQ/CTP) 목록표",
      "visibleIf": " {Question1} contains '특별특성(CTQ/CTP) 목록표'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_특별특성(CTQ/CTP) 목록표",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '특별특성(CTQ/CTP) 목록표'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>특별특성(CTQ/CTP) 목록표</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "특별특성(CTQ/CTP) 목록표_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_O",
              "title": "Q1. '특별특성(CTQ/CTP) 목록표'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["CTQ/CTP List", "생산성 점검",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_O_1",
              "indent": 2,
              "title": "Q1-1. 'CTQ/CTP List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '특별특성(CTQ/CTP) 목록표' and {Question1_O} contains 'CTQ/CTP List'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["CTQ/CTP Review", "CTQ/CTP 항목 정합화", "CP 확정 근거",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_O_2",
              "indent": 2,
              "title": "Q1-2. '생산성 점검' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '특별특성(CTQ/CTP) 목록표' and {Question1_O} contains '생산성 점검'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정능력 점검", "공정별 수율 및 불량률 점검", "이슈",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "부품/자재사양서",
      "navigationTitle": "부품/자재사양서",
      "visibleIf": " {Question1} contains '부품/자재사양서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_부품/자재사양서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '부품/자재사양서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>부품/자재사양서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "부품/자재사양서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_P",
              "title": "Q1. '부품/자재사양서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["원부자재 사양서", "납입사양서",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_P_1",
              "indent": 2,
              "title": "Q1-1. '원부자재 사양서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '부품/자재사양서' and {Question1_P} contains '원부자재 사양서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["부품검증 Check 항목", "부품검증(PPAP) 결과 - Pass/Fail", "신규 부품 및 원재료 개발등급", "CV 이후 공급업체 변경 여부 및 사항", "신규 부품 신뢰성 및 재료 평가 완료 여부",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_P_2",
              "indent": 2,
              "title": "Q1-2. '납입사양서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '부품/자재사양서' and {Question1_P} contains '납입사양서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["적용 범위 및 재질 정보", "부품 규격 List", "부품 규격 및 측정", "검사 기준", "공정 흐름도", "Lot 구성", "포장 사양", "보관 및 취급",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "도면",
      "navigationTitle": "도면",
      "visibleIf": " {Question1} contains '도면'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_도면",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '도면'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>도면</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "도면_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_Q",
              "title": "Q1. '도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["도면 List (Part Name, Part No.)", "부품 도면",],
              "storeOthersAsComment": false
            },

            {
              "type": "checkbox",
              "name": "Question1_Q_1",
              "indent": 2,
              "title": "Q1-1. '부품 도면' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '도면' and {Question1_Q} contains '부품 도면'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Wingfolded Cell","Side Taped Cell","Trimmed Cell","Resealed Cell","Packaged Cell","Taped Cell","Welded Cell","Folded Cell","Mono-cell","Half-cell","Anode Electrode","Cathode Electrode","Anode Roll","Cathode Roll","Separator Roll","Lead Assembly","PKG Sheet Forming","PKG Sheet",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "Control Plan",
      "navigationTitle": "Control Plan",
      "visibleIf": " {Question1} contains 'Control Plan'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_Control Plan",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'Control Plan'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>Control Plan</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "Control Plan_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_R",
              "title": "Q. 'Control Plan'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Resister sheet of Master Control plan(Revision)", "Process Diagram (Master Process Flow Diagram)", "공정별 Master CP", "Process(공정) Flow", "Methods", "Reaction Plan",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_R_1",
              "indent": 2,
              "title": "Q. 'Resister sheet of Master Control plan(Revision)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_R} contains 'Resister sheet of Master Control plan(Revision)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Product", "Model", "Line",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_R_2",
              "indent": 2,
              "title": "Q. '공정별 Master CP' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_R} contains '공정별 Master CP'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Step", "Control Plan Number", "Application", "Product Name/Description", "Process Name", "MDT(Model Type)", "Supplier / Plant (Site - Plant - Line)", "Supplier Code", "Customer Engineering Approval/Date", "Customer Quality Approval/Date",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_R_3",
              "indent": 2,
              "title": "Q. 'Process(공정) Flow' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_R} contains 'Process(공정) Flow'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Process Flow Diagram(PFD)", "Process Name/Operation Description", "Management Category", "Product/Process Characteristic", "Classification", "Specification / Tolerance",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_R_4",
              "indent": 2,
              "title": "Q. 'Methods' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_R} contains 'Methods'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Inspection equipment", "Samples", "Management Category", "Control Method",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_R_5",
              "indent": 2,
              "title": "Q. 'Reaction Plan' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_R} contains 'Reaction Plan'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Method", "Standard Document",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "공정 흐름도",
      "navigationTitle": "공정 흐름도",
      "visibleIf": " {Question1} contains '공정 흐름도'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_공정 흐름도",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '공정 흐름도'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>공정 흐름도</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "공정 흐름도_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_S",
              "title": "Q1. '공정 흐름도'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["기본 정보", "Process Flow",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_S_1",
              "indent": 2,
              "title": "Q1-1. '기본 정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정 흐름도' and {Question1_S} contains '기본 정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Product", "Model", "Line",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_S_2",
              "indent": 2,
              "title": "Q1-2. 'Process Flow' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정 흐름도' and {Question1_S} contains 'Process Flow'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Sub - Process Name", "Diagram", "Machine", "Product/Process Characteristics", "Operation Description", "Operation Condition",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "검사 기준서",
      "navigationTitle": "검사 기준서",
      "visibleIf": " {Question1} contains '검사 기준서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_검사 기준서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '검사 기준서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>검사 기준서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "검사 기준서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_T",
              "title": "Q1. '검사 기준서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["EOL 기본정보", "제품 검사", "신뢰성 검사", "안정성 검사", "장기재고 검사", "Li석출 검사", "CT 검사", "최종 Cell 도면 (Taping 위치 및 공차)",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_T_1",
              "indent": 2,
              "title": "Q1-1. 'EOL 기본정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains 'EOL 기본정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["모델명", "검사항목", "표준번호",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_T_2",
              "indent": 2,
              "title": "Q1-2. '제품 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains '제품 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["제품 검사 항목", "합/불합 판정기준", "검사 장비", "검사 조건",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_T_3",
              "indent": 2,
              "title": "Q1-3. '신뢰성 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains '신뢰성 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["신뢰성 검사 항목", "합/불합 판정기준", "검사 조건",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_T_4",
              "indent": 2,
              "title": "Q1-4. '안정성 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains '안정성 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["안정성 검사 항목", "합/불합 판정기준", "검사 조건",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_T_5",
              "indent": 2,
              "title": "Q1-5. '장기재고 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains '장기재고 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["장기재고 검사 항목", "합/불합 판정기준", "검사 장비", "검사 조건",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_T_6",
              "indent": 2,
              "title": "Q1-6. 'Li석출 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains 'Li석출 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["석출 판정 Step", "석출 판정 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

            {
              "type": "checkbox",
              "name": "Question1_T_7",
              "indent": 2,
              "title": "Q1-7. 'CT 검사' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 기준서' and {Question1_T} contains 'CT 검사'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["CT 측정 항목", "spec", "Inspection", "Inspection Method",],
              "storeOthersAsComment": false,
              "colCount": 4
            },

          ]
        },

      ],
    },
    {
      "name": "공정성 검증 계획서",
      "navigationTitle": "공정성 검증 계획서",
      "visibleIf": " {Question1} contains '공정성 검증 계획서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_공정성 검증 계획서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '공정성 검증 계획서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>공정성 검증 계획서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "공정성 검증 계획서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_U",
              "title": "Q1. '공정성 검증 계획서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["PD 인정시험 계획", "공정성 검증 계획서",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_U_1",
              "indent": 2,
              "title": "Q1-1. 'PD 인정시험 계획' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정성 검증 계획서' and {Question1_U} contains 'PD 인정시험 계획'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["CTQ 선정", "공정 Parameter 확정", "PD gate 판정 실험",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_U_2",
              "indent": 2,
              "title": "Q1-2. '공정성 검증 계획서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정성 검증 계획서' and {Question1_U} contains '공정성 검증 계획서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양산 TFT 조직도", "TFT 추진 계획 및 점검 항목 요약", "TFT 점검항목 상세",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },

      ],
    },
    {
      "name": "품의서 (샘플 제작 품의서)",
      "navigationTitle": "품의서 (샘플 제작 품의서)",
      "visibleIf": " {Question1} contains '품의서 (샘플 제작 품의서)'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_품의서 (샘플 제작 품의서)",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '품의서 (샘플 제작 품의서)'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>품의서 (샘플 제작 품의서)</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "품의서 (샘플 제작 품의서)_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_V",
              "title": "Q1. '품의서 (샘플 제작 품의서)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "샘플 생산 계획 및 목적", "샘플 빌드 계획", "샘플 설계정보", "샘플 제작정보",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_V_1",
              "indent": 2,
              "title": "Q1-1. '프로젝트 정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (샘플 제작 품의서)' and {Question1_V} contains '프로젝트 정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트명", "생산라인",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_V_2",
              "indent": 2,
              "title": "Q1-2. '샘플 설계정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (샘플 제작 품의서)' and {Question1_V} contains '샘플 설계정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Cell 용량 및 두께", "음극 및 양극", "사이즈",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_V_3",
              "indent": 2,
              "title": "Q1-3. '샘플 제작정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (샘플 제작 품의서)' and {Question1_V} contains '샘플 제작정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["전극수율", "투입수량", "예상수율",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },

    {
      "name": "부품/자재 구매요청",
      "navigationTitle": "부품/자재 구매요청",
      "visibleIf": " {Question1} contains '부품/자재 구매요청'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_부품/자재 구매요청",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '부품/자재 구매요청'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>부품/자재 구매요청</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "부품/자재 구매요청_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_W",
              "title": "Q1. '부품/자재 구매요청'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "품의 목적", "구매 요청 원부자재 목록",],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_W_1",
              "indent": 2,
              "title": "Q1-1. '프로젝트 정보' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '부품/자재 구매요청' and {Question1_W} contains '프로젝트 정보'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["목적","출하 수량", "출하일정",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },

    {
      "name": "검사 결과서(IQC, LQC, OQC)",
      "navigationTitle": "검사 결과서(IQC, LQC, OQC)",
      "visibleIf": " {Question1} contains '검사 결과서(IQC, LQC, OQC)'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_검사 결과서(IQC, LQC, OQC)",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '검사 결과서(IQC, LQC, OQC)'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>검사 결과서(IQC, LQC, OQC)</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "검사 결과서(IQC, LQC, OQC)_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_X",
              "title": "Q1. '검사 결과서(IQC, LQC, OQC)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["샘플 출하 검사성적서 (OQC)", "반제품 검사성적서 (LQC)", "부품 입고 검사 결과", "안전성시험성적서 (OQC)",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_X_1",
              "indent": 2,
              "title": "Q1-1. '샘플 출하 검사성적서 (OQC)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 결과서(IQC, LQC, OQC)' and {Question1_X} contains '샘플 출하 검사성적서 (OQC)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["SOC 및 OQC 검사 기본정보", "출하검사 성능 (상세 Data)", "Dimension", "Base Performance", "High Temperature Storage", "Cycle Life", "Cycle RPT",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_X_2",
              "indent": 2,
              "title": "Q1-2. '반제품 검사성적서 (LQC)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 결과서(IQC, LQC, OQC)' and {Question1_X} contains '반제품 검사성적서 (LQC)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["LQC 검사 기본정보", "Coating(+/-)", "Roll Pressing(+/-)", "세부공정별 LQC Data",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_X_3",
              "indent": 2,
              "title": "Q1-3. '부품 입고 검사 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 결과서(IQC, LQC, OQC)' and {Question1_X} contains '부품 입고 검사 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Lot No.", "보관일자", "배럴 번호", "샘플 수", "부품 정보", "검사 및 사양 확인 항목", "측정 결과 값", "심사 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_X_4",
              "indent": 2,
              "title": "Q1-4. '안전성시험성적서 (OQC)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '검사 결과서(IQC, LQC, OQC)' and {Question1_X} contains '안전성시험성적서 (OQC)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["시험 항목", "제품명", "시험조건", "시험방법", "판정기준", "판정결과(Pass/Fail)", "Lot No. 별 시험결과",],
              "storeOthersAsComment": false,
              "colCount": 4
              
            },
          ]
        },
      ],
    },
    {
      "name": "샘플 생산 결과서",
      "navigationTitle": "샘플 생산 결과서",
      "visibleIf": " {Question1} contains '샘플 생산 결과서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_샘플 생산 결과서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '샘플 생산 결과서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>샘플 생산 결과서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "샘플 생산 결과서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_Y",
              "title": "Q1. '샘플 생산 결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["주요 성능 평가", "신뢰성 평가", "안전성 평가", "시험보고서",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_Y_1",
              "indent": 2,
              "title": "Q1-1. '주요 성능 평가' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '샘플 생산 결과서' and {Question1_Z} contains '주요 성능 평가'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["주요 성능 항목", "시험 조건", "시험소 및 진행현황",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Y_2",
              "indent": 2,
              "title": "Q1-1. '신뢰성 평가' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '샘플 생산 결과서' and {Question1_Z} contains '신뢰성 평가'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["신뢰성 항목", "시험 조건", "시험소 및 진행현황",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Y_3",
              "indent": 2,
              "title": "Q1-3. '안전성 평가' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '샘플 생산 결과서' and {Question1_Z} contains '안전성 평가'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["안전성 항목", "시험 조건", "시험소 및 진행현황",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Y_4",
              "indent": 2,
              "title": "Q1-4. '시험보고서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '샘플 생산 결과서' and {Question1_Z} contains '시험보고서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["시험 대상", "시험 항목", "시험 조건", "시험 결과", "주요 사양", "사양 만족 여부"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        }
      ]
    },
    {
      "name": "인증시험 계획서/결과서",
      "navigationTitle": "인증시험 계획서/결과서",
      "visibleIf": " {Question1} contains '인증시험 계획서/결과서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_인증시험 계획서/결과서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>샘플 생산 결과서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "인증시험 계획서/결과서_Question",
          "visibleIf": " {Question1} contains '인증시험 계획서/결과서",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_Z",
              "title": "Q1. '인증시험 계획서/결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["인증시험 계획서", "개발 목표 달성 여부 점검 결과", "안전성 시험", "신뢰성 시험", "성능 시험", "FQC 시험", "DV/PD 인정 시험완료(단기/장기)", "국제 인증 의뢰서", "Report for Safe Transport of Goods",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_1",
              "indent": 2,
              "title": "Q1-1. '인증시험 계획서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '인증시험 계획서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양산 target", "판정기준", "완료 필요/예상 시점", "검증항목",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_2",
              "indent": 2,
              "title": "Q1-2. '개발 목표 달성 여부 점검 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '개발 목표 달성 여부 점검 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["안전성 검증 결과", "신뢰성 검증 결과", "성능 및 치수 검증 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_3",
              "indent": 2,
              "title": "Q1-3. '안전성 시험' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '안전성 시험'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["테스트 조건", "판정결과", "SOC", "개발 목표",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_4",
              "indent": 2,
              "title": "Q1-4. '안전성 시험' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_X} contains '안전성 시험'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["테스트 조건", "판정결과", "SOC", "개발 목표",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_5",
              "indent": 2,
              "title": "Q1-5. '신뢰성 시험' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '신뢰성 시험'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["테스트 조건", "판정결과", "SOC", "개발 목표",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_6",
              "indent": 2,
              "title": "Q1-6. '성능 시험' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '성능 시험'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["테스트 조건", "판정결과", "SOC", "개발 목표",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_7",
              "indent": 2,
              "title": "Q1-7. 'FQC 시험' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains 'FQC 시험'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["평가항목", "테스트 조건", "요건",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_8",
              "indent": 2,
              "title": "Q1-8. 'DV/PD 인정 시험완료(단기/장기)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains 'DV/PD 인정 시험완료(단기/장기)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["DV F/up 항목 검증 결과", "인증 시험 결과 (안전성)​", "인증 시험 결과 (신뢰성)​", "인증 시험 결과 (성능)​"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_9",
              "indent": 2,
              "title": "Q1-9. '국제 인증 의뢰서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains '국제 인증 의뢰서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["MDM Code", "샘플 제출 일정​", "완료 요청 일정​", "Model Name​", "인증 요청 항목",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_Z_10",
              "indent": 2,
              "title": "Q1-10. 'Report for Safe Transport of Goods' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '인증시험 계획서/결과서' and {Question1_Z} contains 'Report for Safe Transport of Goods'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["샘플정보", "샘플 이미지​", "포장 정보​", "공장 정보​", "점검 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "공정성 평가 보고서",
      "navigationTitle": "공정성 평가 보고서",
      "visibleIf": " {Question1} contains '공정성 평가 보고서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_공정성 평가 보고서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '공정성 평가 보고서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>공정성 평가 보고서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "공정성 평가 보고서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AA",
              "title": "Q1. '공정성 평가 보고서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["공정성 평가 결과", "양산성 검증 결과",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AA_1",
              "indent": 2,
              "title": "Q1-1. '공정성 평가 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_AA} contains '공정성 평가 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정별 생산성 및 수율 현황", "공정별 CTQ 항목", "공정별 공정성 검증 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AA_2",
              "indent": 2,
              "title": "Q1-2. '양산성 검증 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_AA} contains '양산성 검증 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["전극 생산 결과", "셀 생산 결과",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "고객 설계사양 승인",
      "navigationTitle": "고객 설계사양 승인",
      "visibleIf": " {Question1} contains '고객 설계사양 승인'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_고객 설계사양 승인",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '고객 설계사양 승인'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>고객 설계사양 승인</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "고객 설계사양 승인_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AB",
              "title": "Q1. '고객 설계사양 승인'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["샘플별 설계 비교",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AB_1",
              "indent": 2,
              "title": "Q1-1. '샘플별 설계 비교' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '고객 설계사양 승인' and {Question1_AB} contains '샘플별 설계 비교'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Design factors 항목별 현재 설계 vs. 최종 설계", "설계 변경사항별 상세 분석",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "기능안전 문서",
      "navigationTitle": "기능안전 문서",
      "visibleIf": " {Question1} contains '기능안전 문서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_기능안전 문서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '기능안전 문서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>기능안전 문서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "기능안전 문서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AC",
              "title": "Q1. '기능안전 문서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["General Information", "Nominal Specification", "Appearance and Dimension", "Performace Specification", "Casution and Prohibition in Handling",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AC_1",
              "indent": 2,
              "title": "Q1-1. 'General Information' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '기능안전 문서' and {Question1_AC} contains 'General Information'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["scope", "Application", "Product classification",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AC_2",
              "indent": 2,
              "title": "Q1-2. 'Nominal Specification' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '기능안전 문서' and {Question1_AC} contains 'Nominal Specification'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Recommended specification", "Safety specification",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AC_3",
              "indent": 2,
              "title": "Q1-3. 'Appearance and Dimension' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '기능안전 문서' and {Question1_AC} contains 'Appearance and Dimension'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Appearance", "Dimension",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AC_4",
              "indent": 2,
              "title": "Q1-4. 'Performace Specification' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '기능안전 문서' and {Question1_AC} contains 'Performace Specification'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Standard test condition", "Electrical specification", "Environmental specification", "Safety specification"],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "교육 계획서/결과보고서",
      "navigationTitle": "교육 계획서/결과보고서",
      "visibleIf": " {Question1} contains '교육 계획서/결과보고서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_교육 계획서/결과보고서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '교육 계획서/결과보고서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>교육 계획서/결과보고서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "교육 계획서/결과보고서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AD",
              "title": "Q1. '교육 계획서/결과보고서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["교육 프로그램", "교육 요약", "교육 결과", "교육 결과 분석"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AD_1",
              "indent": 2,
              "title": "Q1-1. '교육 프로그램' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '교육 계획서/결과보고서' and {Question1_AD} contains '교육 프로그램'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["교육 기간", "교육 항목", "교육 방법",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AD_2",
              "indent": 2,
              "title": "Q1-2. '교육 요약' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '교육 계획서/결과보고서' and {Question1_AD} contains '교육 요약'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정명", "교육 항목", "교육 방법",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AD_3",
              "indent": 2,
              "title": "Q1-3. '교육 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '교육 계획서/결과보고서' and {Question1_AD} contains '교육 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["교육 항목", "직원 인적 정보", "교육 완료 여부 및 완료 일자", "시험점수 및 시험일자", "실무 능력 평가 일자 및 합격 여부",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AD_4",
              "indent": 2,
              "title": "Q1-4. '교육 결과 분석' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '교육 계획서/결과보고서' and {Question1_AD} contains '교육 결과 분석'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["교육 항목", "교육 수강 인원", "합격 인원",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "포장용기 사양서",
      "navigationTitle": "포장용기 사양서",
      "visibleIf": " {Question1} contains '포장용기 사양서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_포장용기 사양서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '포장용기 사양서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>포장용기 사양서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "포장용기 사양서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AE",
              "title": "Q1. '포장용기 사양서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["포장용기 계획서(concept)", "포장용기 사양서"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AE_1",
              "indent": 2,
              "title": "Q1-1. '포장용기 계획서(concept)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '포장용기 사양서' and {Question1_AE} contains '포장용기 계획서(concept)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Package Concept View (도면)", "Packaging Detail (Spec)",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AE_2",
              "indent": 2,
              "title": "Q1-2. '포장용기 사양서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '포장용기 사양서' and {Question1_AE} contains '포장용기 사양서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["Tray Packaging Specification", "SOP - Work Instruction",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
        
          ]
        },
      ],
    },
    {
      "name": "형/설비 점검 결과서",
      "navigationTitle": "형/설비 점검 결과서",
      "visibleIf": " {Question1} contains '형/설비 점검 결과서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_형/설비 점검 결과서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '형/설비 점검 결과서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>형/설비 점검 결과서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "형/설비 점검 결과서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AF",
              "title": "Q1. '형/설비 점검 결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "choices": ["형설비 구매 목록", "형/설비 점검 결과"],
              "showOtherItem": true,
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AF_1",
              "title": "Q1. '형설비 구매 목록'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "visibleIf": "{Question1} contains '형/설비 점검 결과서' and {Question1_AE} contains '형설비 구매 목록'",
              "choices": ["공정명", "작업명", "제품명", "기기", "라인", "사용팀", "부품", "가공부품코드", "코스트센터", "사양", "안전재고", "재고번호", "진행중인 수량", "구입 수량", "단가", "세전비용", "공급", "도착일시", "납기", "용도"],
              "showOtherItem": true,
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AF_2",
              "title": "Q1. '형/설비 점검 결과'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "visibleIf": "{Question1} contains '형/설비 점검 결과서' and {Question1_AE} contains '형/설비 점검 결과'",
              "choices": ["Tool ID", "공구 인터락 유형", "한계 사용 횟수·일수", "누적 사용 횟수·일수", "한계 연마 횟수", "누적 연마 횟수", "Tool 유형", "Tool Model Code", "현재 투입 설비", "설비 장착 위치"],
              "showOtherItem": true,
              "storeOthersAsComment": false
            },
          ]
        },
      ],
    },
    {
      "name": "구매요청서",
      "navigationTitle": "구매요청서",
      "visibleIf": " {Question1} contains '구매요청서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_구매요청서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '구매요청서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>구매요청서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "구매요청서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AG",
              "title": "Q1. '구매요청서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["샘플 빌드 현황", "구매 PO", "GPLM 품의서"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AG_1",
              "indent": 2,
              "title": "Q1-1. '샘플 빌드 현황' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '구매요청서' and {Question1_AG} contains '샘플 빌드 현황'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트명", "샘플 단계", "샘플 용도", "전극", "셀 조립", "모듈 조립", "셀 수량", "양극재", "음극재", "전해액", "분리막", "파우치", "전극생산 기준 현황",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AG_2",
              "indent": 2,
              "title": "Q1-2. '구매 PO' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '구매요청서' and {Question1_AG} contains '구매 PO'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공급업체명", "Item Code 및 아이템명", "수량", "Total Amount",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AG_3",
              "indent": 2,
              "title": "Q1-3. 'GPLM 품의서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '구매요청서' and {Question1_AG} contains 'GPLM 품의서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "구매 요청 정보",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
        
          ]
        },
      ],
    },
    {
      "name": "측정 시스템 평가서(IQC, LQC, OQC)",
      "navigationTitle": "측정 시스템 평가서(IQC, LQC, OQC)",
      "visibleIf": " {Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_측정 시스템 평가서(IQC, LQC, OQC)",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>측정 시스템 평가서(IQC, LQC, OQC)</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "측정 시스템 평가서(IQC, LQC, OQC)_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AH",
              "title": "Q1. '측정 시스템 평가서(IQC, LQC, OQC)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["LQC Gage List", "OQC Gage List", "IQC Gage List", "측정 및 관찰 결과 Report",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_AH_1",
              "indent": 2,
              "title": "Q1-1. 'LQC Gage List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)' and {Question1_AH} contains 'LQC Gage List'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["설비(시스템) 명칭", "GGR 여부", "조정(Correction) 검증 여부",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AH_2",
              "indent": 2,
              "title": "Q1-2. 'OQC Gage List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)' and {Question1_AH} contains 'OQC Gage List'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["설비(시스템) 명칭", "GGR 여부", "조정(Correction) 검증 여부",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AH_3",
              "indent": 2,
              "title": "Q1-3. 'IQC Gage List' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)' and {Question1_AH} contains 'IQC Gage List'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["팀, 검사실, 책임자", "설비(시스템) 명칭 및 기기코드", "측정 항목", "지연시간", "측정일정", "특별특성항목 여부",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AH_4",
              "indent": 2,
              "title": "Q1-4. '측정 및 관찰 결과 Report' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '측정 시스템 평가서(IQC, LQC, OQC)' and {Question1_AH} contains '측정 및 관찰 결과 Report'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["분석 기본정보", "입자 분산 분석", "Tukey pairing 비교", "Tukey 동시 95% 신뢰성 구간", "%Contribution", "%Study Variation", "%Tolerance", "가분 변수(Number of)", "P", "판정", "주의사항",],
              "storeOthersAsComment": false,
              "colCount": 4
            },
        
          ]
        },
      ],
    },
    /////////
    {
      "name": "부품 승인서",
      "navigationTitle": "부품 승인서",
      "visibleIf": " {Question1} contains '부품 승인서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_부품 승인서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '부품 승인서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>부품 승인서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "부품 승인서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AI",
              "title": "Q1. '부품 승인서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["부품 PPAP 결과서", "고객 PPAP 승인",],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_AI_1",
              "indent": 2,
              "title": "Q1-1. '부품 PPAP 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '부품 승인서' and {Question1_AI} contains '부품 PPAP 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["납입 사양서","공정 흐름도","PFMEA","Control Plan","협력사 부품 평가 결과","부품 평가 보고서","외관 검사 성적서","Audit Result","공정성 평가 결과","양산부품 보증서","단품 평가 결과(SQA 샘플 평가)", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AI_2",
              "indent": 2,
              "title": "Q1-2. '고객 PPAP 승인' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '부품 승인서' and {Question1_AI} contains '고객 PPAP 승인'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["공정감사 결과", "양산 프로세스 점검 결과" ,],
              "storeOthersAsComment": false,
              "colCount": 4
            },
        
    
          ]
        },
      ],
    },
    {
      "name": "품의서 (개시 품의서)",
      "navigationTitle": "품의서 (개시 품의서)",
      "visibleIf": " {Question1} contains '품의서 (개시 품의서)'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_품의서 (개시 품의서)",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '품의서 (개시 품의서)'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>품의서 (PV 개시 품의서)</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "품의서 (개시 품의서)_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AJ",
              "title": "Q1. '품의서 (개시 품의서)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["PV Gate Kick-off meeting", "PD 개시 품의서 (GPLM)"],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_AJ_1",
              "indent": 2,
              "title": "Q1-1. 'PV Gate Kick-off meeting' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (개시 품의서)' and {Question1_AJ} contains 'PV Gate Kick-off meeting'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["PV Gate 요구사항","TFT 조직","PD Gate 수행 계획","PD Gate 품평회 계획","CTQ List", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AJ_2",
              "indent": 2,
              "title": "Q1-2. 'PD 개시 품의서 (GPLM)' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (개시 품의서)' and {Question1_AJ} contains 'PD 개시 품의서 (GPLM)'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["프로젝트 정보", "샘플 생산 계획 및 목적" ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "유동 관리 계획",
      "navigationTitle": "유동 관리 계획",
      "visibleIf": " {Question1} contains '유동 관리 계획'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_유동 관리 계획",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '유동 관리 계획'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>유동 관리 계획</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "유동 관리 계획_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AK",
              "title": "Q1. '유동 관리 계획'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["초기 유동관리 계획서​", "부품 초기 유동관리 계획서", ],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_AK_1",
              "indent": 2,
              "title": "Q1-1. '초기 유동관리 계획서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '유동 관리 계획' and {Question1_AK} contains '초기 유동관리 계획서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양산 초기 품질 관리 계획","청정도 및 온습도 점검 결과","작업자 배치 현황 및 숙련도 관리", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AK_2",
              "indent": 2,
              "title": "Q1-2. '부품 초기 유동관리 계획서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '유동 관리 계획' and {Question1_AK} contains '부품 초기 유동관리 계획서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["IQC 항목", "샘플링 검사 계획", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "공정감사 결과서",
      "navigationTitle": "공정감사 결과서",
      "visibleIf": " {Question1} contains '공정감사 결과서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_공정감사 결과서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '공정감사 결과서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>공정감사 결과서</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "공정감사 결과서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AL",
              "title": "Q1. '공정감사 결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["내부 공정 감사 결과서​", "고객 공정감사 결과", ],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_AL_1",
              "indent": 2,
              "title": "Q1-1. '내부 공정 감사 결과서' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정감사 결과서' and {Question1_AL} contains '내부 공정 감사 결과서'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["양산 TFT 점검 결과 요약","양신 TFT 점검 결과 상세", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AL_2",
              "indent": 2,
              "title": "Q1-2. '고객 공정감사 결과' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '공정감사 결과서' and {Question1_AL} contains '고객 공정감사 결과'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["점검 내용", "Audit 결과", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },
    {
      "name": "품의서 (샘플 출하 품의서)",
      "navigationTitle": "품의서 (샘플 출하 품의서)",
      "visibleIf": " {Question1} contains '품의서 (샘플 출하 품의서)'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_품의서 (샘플 출하 품의서)",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '품의서 (샘플 출하 품의서)'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>품의서 (샘플 출하 품의서)</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "품의서 (샘플 출하 품의서)_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_AM",
              "title": "Q1. '품의서 (샘플 출하 품의서)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["품의 내용","고객 샘플 출하 승인", ],
              "storeOthersAsComment": false
            }, 
            {
              "type": "checkbox",
              "name": "Question1_AM_1",
              "indent": 2,
              "title": "Q1-1. '품의 내용' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (샘플 출하 품의서)' and {Question1_AM} contains '품의 내용'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["고객사, 프로그램, SOP, 출하일정, 샘플 수량", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
            {
              "type": "checkbox",
              "name": "Question1_AM_2",
              "indent": 2,
              "title": "Q1-2. '고객 샘플 출하 승인' 내 어떤 정보가 업무상 중요하게 취급됩니까? (중복선택 가능)",
              "visibleIf": "{Question1} contains '품의서 (샘플 출하 품의서)' and {Question1_AM} contains '고객 샘플 출하 승인'",
              "isRequired": true,
              "showOtherItem": true,
              "choices": ["샘플 정보","샘플 요청정보","출하평가 결과", ],
              "storeOthersAsComment": false,
              "colCount": 4
            },
          ]
        },
      ],
    },

    {
      "name": "기타 항목",
      "navigationTitle": "기타 항목",
      "visibleIf": " {Question1} contains 'other'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '자동차'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "ProcessBox_기타 항목",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'other'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>{Question1_Comment}</div>"
            },
          ]
        },
        {
          "type": "panel",
          "name": "기타 항목_Question",
          "elements": [
            {
              "type": "text",
              "name": "Question1_AN",
              "title": "Q1. '{Question1_Comment}'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              // "colCount": 4,
              // "showOtherItem": true,
              // "storeOthersAsComment": false
            }, 
          ]
        },
      ],
    },
  ],
  "showQuestionNumbers": "off",
  showPrevButton: false,
  pageNextText: "다음",
  completedHtml: "<div>{name}님 설문에 참여해주셔서 감사합니다.</div> <div><img src='https://github.com/junyong2902/LGEN_ICON/blob/master/secuendol.PNG?raw=true' /></div>",




};
