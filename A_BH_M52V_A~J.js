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
              "choices": [
                { value: "CFO", text: "CFO" },
                { value: "CPO", text: "CPO" },
                { value: "CQO", text: "CQO" },
                { value: "CTO", text: "CTO" },
                { value: "ESS전지사업부", text: "ESS전지사업부" },
                { value: "LG에너지솔루션(해외현지사원)", text: "LG에너지솔루션(해외현지사원)" },
                { value: "소형전지사업부", text: "소형전지사업부" },
                { value: "자동차전지사업부", text: "자동차전지사업부" },
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
                { value: "도면", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "BOM", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "제품규격", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV'" },
                { value: "안전/환경/품질 조사서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "DFMEA", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "PFMEA", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "Control Plan", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "개발 계획서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "제품 검사 결과서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "공정성 평가 보고서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV' " },
                { value: "제품사양서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "시생산 결과 보고서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' " },
                { value: "검사 결과서(IQC, LQC, OQC)", visibleIf: "{Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "Gate Review", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "인증시험 계획서/결과서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "부품 승인서", visibleIf: "{Question0_2} contains 'CV' or {Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "Pre-SOP/SIP", visibleIf: "{Question0_2} contains 'CV'" },
                { value: "작업의뢰서/작업지시서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PV'" },
                { value: "작업표준서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },
                { value: "측정 시스템 평가서", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "표준문서", visibleIf: "{Question0_2} contains 'PD'or {Question0_2} contains 'PV'" },
                { value: "품의서 (개시 품의서)", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD'" },
                { value: "특별특성(CTQ/CTP) 목록표", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "부품/자재사양서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "품의서 (샘플 제작/출하 품의서)", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "품의서 (양산검증 개시 품의서)", visibleIf: "{Question0_2} contains 'PV'" },
                { value: "공정감사 결과서", visibleIf: "{Question0_2} contains 'DV'" },
                { value: "포장용기 사양서", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "형/설비 점검 결과서", visibleIf: "{Question0_2} contains 'PD'" },
                { value: "제품 검사 계획서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PV'" },
                { value: "교육 계획서/결과보고서", visibleIf: "{Question0_2} contains 'DV' or {Question0_2} contains 'PD' or {Question0_2} contains 'PV'" },

              ]
            },
          ]
        },
        //// 후보군 (그룹명) 추가 ////
      ]
    },
    {
      ///// 수정 필요 --> 그룹화 Name 변경
      "name": "도면",   /// name --> 그룹화 Name 입력
      "navigationTitle": "도면", /// navigationTitle --> 그룹화 Name 입력

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
              "title": "Q1-1. '와인딩 공정도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
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
            {
              "type": "checkbox",
              "name": "Question1_A_2",
              "title": "Q1-2. '조립 공정도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '도면' and {Question1_A} contains '조립 공정도면'",
              "choices": ["CSZ(Sizing Cell Ass’y)", "CCR(Crimping Cell Ass’y)", "Sitting Cap Ass’y", "CSW(Welding Cap Ass’y)", "CEF", "CBD(Beading Can Ass’y)", "CSG(Swaging Can Ass’y)", "CCI/CTW",],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_A_3",
              "title": "Q1-3. '부품 공정도면'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '도면' and {Question1_A} contains '부품 공정도면'",
              "choices": ["Washer", "Can", "T/C Ass'y", "Top Insulator", "Bottom Insulator", "Top cap", "Vent", "CID filter", "Crimping Gasket", "CID Gasket"],
              "storeOthersAsComment": false,
            },
          ]

        }
      ]

    },
    {
      "name": "BOM",
      "navigationTitle": "BOM",

      "visibleIf": "{Question1} contains 'BOM'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_BOM",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'BOM'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>BOM</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "BOM_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_B",
              "title": "Q1. 'BOM'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["BOM Summary", "자재명세", "BOM Cost",],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_B_1",
              "title": "Q1-1. 'BOM Summary'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'BOM' and {Question1_B} contains 'BOM Summary'",
              "choices": ["Customer(고객명)", "Model Name", "Pack code(ERP)", "Application", "Pack Type", "Configuration", "Date", "Write", "Check", "Approval", "Biz Type", "Slurry Type", "SRS Coating Site", "Manufacturer(Site)", "Version", "Spec", "원재료비"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_B_2",
              "title": "Q1-2. '자재명세'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'BOM' and {Question1_B} contains '자재명세'",
              "choices": ["Category Name(슬러리 종류)", "Level", "Component", "MDM Code", "Material/Specification", "Description", "Unit", "Each Quantity", "Remark", "Part No", "Specification", "Quantity(Loss반영)", "Powder Ratio", "표준화 적용여부", "공용화 적용여부"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_B_3",
              "title": "Q1-3. 'BOM Cost'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'BOM' and {Question1_B} contains 'BOM Cost'",
              "choices": ["자재(Code)", "자재명", "자재내역", "UOM", "Quantity", "통화", "단가(1Unit)", "추정단가", "추정단가(원화 환산)", "양/음극 활물질 투입량", "NMP 투입량", "DI water 투입량", "T/I, B/I, Washer"],
              "storeOthersAsComment": false,
            },
          ]

        }
      ],

    },
    {
      "name": "제품규격",
      "navigationTitle": "제품규격",

      "visibleIf": "{Question1} contains '제품규격'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_제품규격",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '제품규격'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>제품규격</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "제품규격_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_C",
              "title": "Q1. '제품규격'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["PS Summary", "Nominal Specification", "Appearance and Dimension", "Performance Specification", "Warranty", "Cautions and Prohibitions in Handling", "Compliance details of buyer", "Exclusion of Liability"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_C_1",
              "title": "Q1-1. 'PS Summary'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품규격' and {Question1_C} contains 'PS Summary'",
              "choices": ["Scope", "Application", "Product Classification", "Model Name"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_C_2",
              "title": "Q1-2. 'Nominal Specification'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품규격' and {Question1_C} contains 'Nominal Specification'",
              "choices": ["Energy", "Nominal Voltage", "Shipping Cell Voltage", "Standard Charge", "Max. Charge Voltage", "Max. Charge Current", "Standard Discharge", "Min. Discharge Voltage", "Max. Discharge Current", "Over Voltage Protection", "Under Voltage Protection", "Weight", "Operating (Atmosphere) Temperature", "Storage Temperature (for shipping state)", "Storage Temperature (for fully charge state)", "Storage Humidity"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_C_3",
              "title": "Q1-3. 'Appearance and Dimension'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품규격' and {Question1_C} contains 'Appearance and Dimension'",
              "choices": ["Appearance", "Dimension"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_C_4",
              "title": "Q1-4. 'Performance Specification'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품규격' and {Question1_C} contains 'Performance Specification'",
              "choices": ["Test Condition", "Electrical Specification", "Environmental Specification", "Safety Specification"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_C_5",
              "title": "Q1-5. 'Cautions and Prohibitions in Handling'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품규격' and {Question1_C} contains 'Cautions and Prohibitions in Handling'",
              "choices": ["Cautions for Use and Handling", "Prohibitions", "Caution for the battery and the pack"],
              "storeOthersAsComment": false,
            },
          ]

        }
      ],

    },
    {
      "name": "안전/환경/품질 조사서",
      "navigationTitle": "안전/환경/품질 조사서",

      "visibleIf": "{Question1} contains '안전/환경/품질 조사서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_안전/환경/품질 조사서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>안전/환경/품질 조사서</div>"
            }
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
              "choices": ["안전환경문서 Set", "안전 공정 관리 List"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_D_1",
              "title": "Q1-1. '안전환경문서 Set'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_D} contains '안전환경문서 Set'",
              "choices": ["PL Claim 조사표", "기술수준 조사표", "오사용 조건 분석 결과", "안전 부품 관리 LIST", "사용환경 조사표", "안전성 Checklist"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_D_2",
              "title": "Q1-2. '안전 공정 관리 List'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '안전/환경/품질 조사서' and {Question1_D} contains '안전 공정 관리 List'",
              "choices": ["안전공정 항목", "고장모드", "안전성영향", "고장원인(1차, 2차)", "관리항목 및 관리방법"],
              "storeOthersAsComment": false,
            },
          ]

        }
      ],

    },
    {
      "name": "DFMEA",
      "navigationTitle": "DFMEA",

      "visibleIf": "{Question1} contains 'DFMEA'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_DFMEA",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'DFMEA'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>DFMEA</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "DFMEA_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_E",
              "title": "Q1. 'DFMEA'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["시스템 요소", "설계인자", "구분(설계변경점 기인 여부)", "고장모드", "고장영향", "Sev. 심각도", "고장원인", "현재 예방관리", "Occ. 발생도", "현재 검출관리", "Dev. 검출도", "개선/최적화 계획", "Optimization Results 개선결과", "SOD Rating", "DV RA 검토 내용 및 개선/최적화 검증 결과", "DV Build Issue 검토 내용 및 개선/최적화 검증 결과", "Risk Matrix(CV, DV)"],
              "storeOthersAsComment": false
            },
          ]

        }
      ],

    },
    {
      "name": "PFMEA",
      "navigationTitle": "PFMEA",

      "visibleIf": "{Question1} contains 'PFMEA'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_PFMEA",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'PFMEA'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>PFMEA</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "PFMEA_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_F",
              "title": "Q1. 'PFMEA'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["PFMEA Summary", "시스템 요소/기능/요구사항"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_F_1",
              "title": "Q1-1. 'PFMEA Summary'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'PFMEA' and {Question1_F} contains 'PFMEA Summary'",
              "choices": ["프로세스", "유형/모델/생산/로트 (Type/Model/Fabrication/Lot)", "FMEA/시스템 요소(FMEA/system element)", "계획 및 준비(단계)"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_F_2",
              "title": "Q1-2. '시스템 요소/기능/요구사항'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'PFMEA' and {Question1_F} contains '시스템 요소/기능/요구사항'",
              "choices": ["영향(Effect)", "Sev. 심각도", "사양, 특성", "고장모드", "원인", "예방조치", "Occ. 발생도", "검출 조치", "추천 조치", "Dev. 검출도", "RPN", "책임자/마감일", "AP, 참조 AP", "Characteristic(특성)"],
              "storeOthersAsComment": false,
            },
          ]

        }
      ],

    },
    {
      "name": "Control Plan",
      "navigationTitle": "Control Plan",

      "visibleIf": "{Question1} contains 'Control Plan'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_Control Plan",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains 'Control Plan'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>Control Plan</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "Control Plan_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_G",
              "title": "Q1. 'Control Plan'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Control Plan 작성 Guideline", "Register sheet of Master Control plan(Revision)", "Process Diagram", "공정별 개요", "Process(공정) Flow", "Methods", "Management Standard", "Reaction Plan"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_G_1",
              "title": "Q1-1. 'Control Plan 작성 Guideline'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Control Plan 작성 Guideline'",
              "choices": ["필수사항", "양식 Summary", "Symbols 설명"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_2",
              "title": "Q1-2. 'Register sheet of Master Control plan(Revision)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Register sheet of Master Control plan(Revision)'",
              "choices": ["Product", "Model", "Line"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_3",
              "title": "Q1-3. 'Process Diagram'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Process Diagram'",
              "choices": ["Control Plan Process Diagram", "Control Plan Review Process", "Master Process Flow Diagram"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_4",
              "title": "Q1-4. '공정별 개요'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains '공정별 개요'",
              "choices": ["Step", "Control Plan Number (Ver.No)", "Application", "Product Name/Description", "Process Name", "MDT(Model Type)", "Supplier / Plant (Site - Plant - Line)", "Supplier Code", "Customer Engineering Approval/Date", "Customer Quality Approval/Date", "MDT"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_5",
              "title": "Q1-5. 'Process(공정) Flow'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Process(공정) Flow'",
              "choices": ["Process Flow Diagram(PFD)", "Process Name/Operation Description", "Management Category", "Characteristics", "Machine(Equipment) Management", "Special Char. Class (특별 특성)", "Specification/Tolerance"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_6",
              "title": "Q1-6. 'Methods'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Methods'",
              "choices": ["Inspection equipment", "Responsible", "Samples", "Control Method"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_7",
              "title": "Q1-7. 'Management Standard'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Management Standard'",
              "choices": ["Control Item", "Specification/Tolerance", "Gauge(계측기) Management", "Sample", "Record", "Control", "Criteria of Process Capability(Cpk)", "Responsibility"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_G_8",
              "title": "Q1-8. 'Reaction Plan'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains 'Control Plan' and {Question1_G} contains 'Reaction Plan'",
              "choices": ["Method", "DRI", "Standard Document"],
              "storeOthersAsComment": false,
            },
          ],
        },
      ],
    },
    {
      "name": "개발 계획서",
      "navigationTitle": "개발 계획서",

      "visibleIf": "{Question1} contains '개발 계획서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "Process_개발 계획서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '개발 계획서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>개발 계획서</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "개발 계획서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_H",
              "title": "Q1. '개발 계획서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["Business Review", "PS", "PSDS (Cell MSDS)"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_H_1",
              "title": "Q1-1. 'Business Review'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_H} contains 'Business Review'",
              "choices": ["시장/고객/경쟁 현황", "개발 난이도 및 Risk분석", "수익성 분석", "종합검토의견", "셀 기본 정보", "상세 설계안", "설계관련 부문별 필수 F/U 사항", "Master Plan", "모델 라인 운용 방안 검토 안", "주요 제품 중장기 매출 계획", "Cost 경쟁력 확보 방안", "BR 회의록"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_H_2",
              "title": "Q1-2. 'PS'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_H} contains 'PS'",
              "choices": ["Usage range", "Material", "Specification for each process", "Final Product Specification", "Printing Specification", "Formation and Aging and Shipping Charge", "Product Verification", "Product Inspection", "Production Grading condition", "Package and Labelling"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_H_3",
              "title": "Q1-3. 'PSDS (Cell MSDS)'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_H} contains 'PSDS (Cell MSDS)'",
              "choices": ["Chemical Product and Company Identification", "Composition Information (구성정보)", "Harzardous Identification", "First Aid Measure", "Fire Fighting Measures", "Accidental Realease Measues", "Handling and Storage", "Exposure Controls / Personal Protection", "Physical and Chemical Properties", "Stability and Reactivity", "Toxicological Information", "Ecological Information", "Disposal Consideration", "Transport Infomation", "Regulatory Information"],
              "storeOthersAsComment": false,
            },
          ],
        },
      ],
    },
    {
      "name": "제품 검사 결과서",
      "navigationTitle": "제품 검사 결과서",

      "visibleIf": "{Question1} contains '제품 검사 결과서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "제품 검사 결과서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '제품 검사 결과서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>제품 검사 결과서</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "제품 검사 결과서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_I",
              "title": "Q1. '제품 검사 결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["제품 검사 결과서", "제품검사 항목"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_I_1",
              "title": "Q1-1. '제품 검사 결과서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '제품 검사 결과서' and {Question1_I} contains '제품 검사 결과서'",
              "choices": ["검사 결과 요약", "검사 결과", "샘플별 검사 결과"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_I_2",
              "title": "Q1-2. '제품검사 항목'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '개발 계획서' and {Question1_I} contains '제품검사 항목'",
              "choices": ["검사항목 Pool", "검사항목 상세", "Group 기준", "국제인증 규격 Pool", "LGES 시험법"],
              "storeOthersAsComment": false,
            },
          ],
        },
      ],
    },
    {
      "name": "공정성 평가 보고서",
      "navigationTitle": "공정성 평가 보고서",

      "visibleIf": "{Question1} contains '공정성 평가 보고서'",
      "elements": [
        {
          "type": "html",
          "name": "info",
          "html": "<pre style='color:red; font-family:fontESR; font-size:25px;'>다음은 '소형 원통형'베터리 유형에 대한 핵심정보를 식별하기 위한 질문 입니다.아래의 표에 따른 개발단계별 기준을 참고하여 산출물 및 정보의 중요도를 판단하여 주시기 바랍니다.<br></br><table  border-color:red;><tr><th><pre style='color:red; font-family:fontESR; font-size:18px; '>BR, CV, DV 단계에서의 핵심정보 중요도 판단기준</th><th><pre style='color:red; font-family:fontESR; font-size:18px;'>PD, PV 단계에서의 핵심정보 중요도 판단기준</th></tr><tr><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 고객/시장 Needs를 단기간에 충족 가능한 제품 설계 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 개발 기간을 획기적으로 줄일 수 있는 정보</td><td><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 획기적인 원가절감, 품질향상을 위한 新 공정/설비기술과 관련된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- 당사만의 Capa, 품질, 수율, 가동율 향상 Knowhow가 반영된 정보<br><pre style='color:red; font-family:fontESR; font-size:18px;'>- (유출시) 경쟁사가 품질/수율을 빠르게 높일 수 있는 정보</td></tr></table></pre>"
        },
        {
          "type": "panel",
          "name": "공정성 평가 보고서",
          "elements": [
            {
              "type": "html",
              "indent": 2,
              "name": "info",
              "visibleIf": "{Question1} contains '공정성 평가 보고서'",
              "html": "<div style='display: flex; justify-content: center; align-items: center; border: 1px; border-radius: 5px; width: 300; height: 50px; color: white; font-family: fontESR; font-size: 15px; background-color: #c5003d; padding: 10px;'>공정성 평가 보고서</div>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "공정성 평가 보고서_Question",
          "elements": [
            {
              "type": "checkbox",
              "name": "Question1_J",
              "title": "Q1. '공정성 평가 보고서'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "choices": ["공정성 검증 계획 및 평가결과 Summary", "전극 공정성 평가", "조립 공정성 평가", "와인더 공정성 평가", "활성화 공정성 평가"],
              "storeOthersAsComment": false
            },
            {
              "type": "checkbox",
              "name": "Question1_J_1",
              "title": "Q1-1. '공정성 검증 계획 및 평가결과 Summary'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_J} contains '공정성 검증 계획 및 평가결과 Summary'",
              "choices": ["Customer", "Product Line", "Quantity", "Development Schedule"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_J_2",
              "title": "Q1-2. '전극 공정성 평가'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_J} contains '전극 공정성 평가'",
              "choices": ["공정성 항목", "Pass 기준", "양극 스펙/결과", "음극 스펙/결과", "합/불 판정", "측정방법"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_J_3",
              "title": "Q1-3. '조립 공정성 평가'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_J} contains '조립 공정성 평가'",
              "choices": ["주요 설계 변경 사항", "공정성 평가 결과", "주요 이슈항목", "공정성 검증 결과(Yield)", "공정성 검증 결과(Process Quality)"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_J_4",
              "title": "Q1-4. '와인더 공정성 평가'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_J} contains '와인더 공정성 평가'",
              "choices": ["와인더 Check list", "수율"],
              "storeOthersAsComment": false,
            },
            {
              "type": "checkbox",
              "name": "Question1_J_5",
              "title": "Q1-5. '활성화 공정성 평가'의 어떤 정보가 업무상 중요하게 취급됩니까?",
              "isRequired": true,
              "colCount": 4,
              "showOtherItem": true,
              "visibleIf": "{Question1} contains '공정성 평가 보고서' and {Question1_J} contains '활성화 공정성 평가'",
              "choices": ["활성화 평가 방법", "활성화 공정성 색지도", "활성화 공정성 평가 결과", "사양 항목", "활성화 공정성 검증 결과"],
              "storeOthersAsComment": false,
            },
          ],
        },
      ],
    },
  ],
}