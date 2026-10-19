const LAST_UPDATED = "2026-10-19";

const ITEMS = [
  {
    id: "kira-modular-2026",
    kind: "contest",
    title: "2026 대한건축사협회 대학(원)생 모듈러건축 공모전",
    host: "대한건축사협회",
    theme: "모듈러를 통한 사회문제에 대한 건축적 모색",
    tags: ["모듈러", "설계", "건축공학 적합"],
    eligibility: "건축 관련 학과 대학·대학원 재학생·휴학생, 2인 이내",
    grade: ["학부", "대학원"],
    amount: "총상금 1,350만 원 (대상 500만 원)",
    applyStart: "2026-09-21",
    deadline: "2026-10-19T15:00:00+09:00",
    extraDates: [
      { label: "작품 제출", date: "2026-12-02T15:00:00+09:00" },
      { label: "1차 결과", date: "2026-12-09" },
      { label: "2차 결과", date: "2026-12-18" }
    ],
    method: "이메일 접수 (k-modular@kira.or.kr)",
    fee: "무료",
    summary:
      "모듈러 건축으로 사회 문제를 푸는 학생 공모전입니다. 대표자는 국내 건축(공)학 전공자여야 하고, 참가 신청과 작품 제출이 따로입니다.",
    notes: [
      "오늘(10/19) 15시까지 참가 신청입니다. 이미 신청했다면 작품은 12월 2일까지입니다.",
      "동일인이 2개 팀 중복 참여 불가.",
      "재학·휴학증명서 미제출 시 평가에서 제외될 수 있습니다."
    ],
    url: "https://www.kira.or.kr/jsp/main/01/01.jsp?ba_bbsId=BBS_00_NOTICE&mode=read&ba_id=264476"
  },
  {
    id: "bim-awards-2026",
    kind: "contest",
    title: "BIM AWARDS 2026 (학생 부문)",
    host: "(사)빌딩스마트협회 · 오프사이트모듈러산업협회",
    theme: "BIM의 효율적·혁신적 활용 (Design / Construction / Research / OSC Modular)",
    tags: ["BIM", "스마트건설", "시공", "건축공학 적합"],
    eligibility: "대학·대학원 전일제 재학생·휴학생, 4인까지",
    grade: ["학부", "대학원"],
    amount: "부문별 대상·최우수·우수 및 오토데스크·트림블 특별상",
    applyStart: "2026-06-22",
    deadline: "2026-10-01",
    method: "이벤터스 참가신청 후 파일·출력물 제출",
    fee: "학생 88,000원 (컨퍼런스 초대권 포함)",
    summary:
      "설계·시공·연구·모듈러까지 BIM 활용을 평가하는 공모입니다. 건축공학 전공이 바로 쓸 수 있는 포트폴리오 기회입니다.",
    notes: [
      "공식 홈페이지 기준으로 접수·제출이 10월 1일까지 연장됐습니다.",
      "학생 부문은 Design, Construction, Research, OSC Modular입니다."
    ],
    url: "https://event.buildingsmart.or.kr/Awards/2026"
  },
  {
    id: "lh-tech-2026",
    kind: "contest",
    title: "제17회 LH 국토기술대전",
    host: "한국토지주택공사(LH)",
    theme: "스마트건설, 안전한 도시, 모빌리티, ESG 등 단지·도시 적용 기술",
    tags: ["스마트건설", "BIM", "아이디어", "건축공학 적합"],
    eligibility: "대학(원)생 재학·휴학, 2026년 졸업자 지원 가능, 2인 이내",
    grade: ["학부", "대학원"],
    amount: "금·은·동·장려 총 8팀",
    applyStart: "2026-07-27",
    deadline: "2026-08-28T18:00:00+09:00",
    extraDates: [
      { label: "2차 PT", date: "2026-10-15" },
      { label: "최종 발표", date: "2026-10-29" },
      { label: "시상식", date: "2026-11-25" }
    ],
    method: "LH 국토기술대전 홈페이지",
    fee: "무료",
    summary:
      "단지·도시 사업에 붙일 수 있는 기술 아이디어를 뽑습니다. BIM, 드론, 자동화, 안전, 탄소중립이 모두 해당됩니다.",
    notes: [
      "참가 접수는 마감됐습니다. 최종 결과는 10월 29일 공고 예정입니다.",
      "이미 사업화·특허·타 공모 수상작은 시상에서 제외됩니다."
    ],
    url: "https://lh.or.kr/user/land/intro.do"
  },
  {
    id: "lh-youth-2026",
    kind: "contest",
    title: "2026 LH 청년주택건축대전 (설계 부문)",
    host: "한국토지주택공사(LH)",
    theme: "Form Follows [ ] — 기후위기 시대, 생태와 공존하는 지속가능한 청년주거",
    tags: ["주거", "설계", "공공주택"],
    eligibility: "만 19~39세 청년, 2인 이내 (관련 업계 종사자 제외)",
    grade: ["학부", "대학원"],
    amount: "대상 500만 원 + 해외건축기행, LH 채용 우대",
    applyStart: "2026-06-18",
    deadline: "2026-07-03T16:00:00+09:00",
    method: "공모전 홈페이지 참가신청",
    fee: "무료",
    summary:
      "청년 주거를 주제로 한 설계 공모입니다. 대상·최우수상은 해외 기행과 LH 채용 가산이 있습니다.",
    notes: ["2026년 참가신청은 7월 3일 마감됐습니다. 내년 공고를 대비해 주제를 기록해 두세요."],
    url: "https://www.lharch2026.co.kr/info.asp"
  },
  {
    id: "spacea-2026",
    kind: "contest",
    title: "제39회 공간국제학생건축상",
    host: "(주)공간종합건축사사무소",
    theme: "창의문을 중심으로 북악산과 인왕산을 다시 잇는 장소 상상",
    tags: ["설계", "도시", "장소성"],
    eligibility: "국내외 대학·대학원(석사) 재학생·휴학생, 전공 무관, 3인 이내",
    grade: ["학부", "대학원"],
    amount: "대상 700만 원",
    applyStart: "2026-05-06",
    deadline: "2026-07-09T16:00:00+09:00",
    method: "spaceA.com 참가신청 및 참가비 납부",
    fee: "팀당 6만 원 (환불 불가)",
    summary:
      "한양도성 창의문 일대를 주제로 한 학생 건축상입니다. 시상식 당일 학생 신분이어야 합니다.",
    notes: ["2026년 접수는 마감됐습니다. 매년 봄~여름에 공고됩니다."],
    url: "https://www.spacea.com/SpaceA2026/Home/Index"
  },
  {
    id: "kia-culture-2026",
    kind: "contest",
    title: "제35회 한국건축문화대상 학생설계 공모전",
    host: "국토교통부",
    theme: "일반: 시·공간의 적층 / 한옥: 다시, 공공의 한옥",
    tags: ["설계", "한옥", "공공"],
    eligibility: "전문대·대학·대학원 재학생·휴학생, 전공 무관, 3인 이내 (건축사 제외)",
    grade: ["학부", "대학원"],
    amount: "부문별 대상 국토교통부장관상 및 500만 원",
    applyStart: "2026-07-27",
    deadline: "2026-07-31",
    extraDates: [{ label: "작품 제출", date: "2026-08-28" }, { label: "시상", date: "2026-11-01" }],
    method: "한국건축문화대상 홈페이지",
    fee: "무료",
    summary:
      "국토부가 주최하는 학생 설계 공모입니다. 일반 부문과 한옥 부문으로 나뉩니다.",
    notes: ["2026년 신청·제출은 마감됐습니다. 시상은 11월 본행사에서 진행됩니다."],
    url: "https://c3korea.com/2026-korean-architecture-award-student-competition/"
  },
  {
    id: "sh-smart-2026",
    kind: "contest",
    title: "2026 SH 스마트 건설기술 경진대회 (설계 VE)",
    host: "서울주택도시개발공사(SH)",
    theme: "시설물 가치 향상을 위한 창의적 VE 제안 (남부여성발전센터)",
    tags: ["VE", "스마트건설", "시공", "건축공학 적합"],
    eligibility: "설계 VE 부문: 대학(원)생",
    grade: ["학부", "대학원"],
    amount: "설계 VE 대상 500만 원, 최우수 250만 원",
    applyStart: "2026-06-29",
    deadline: "2026-07-20",
    extraDates: [{ label: "공모안 접수", date: "2026-08-14" }],
    method: "SH 홈페이지 신청",
    fee: "무료",
    summary:
      "스마트 건설·시공 BIM·설계 VE 중 학생은 설계 VE에 참여합니다. 현장 실무 참여 기회가 있습니다.",
    notes: ["2026년 참가신청은 7월 20일 마감됐습니다."],
    url: "http://www.i-sh.co.kr/main/smart2026.do"
  },
  {
    id: "kosaf-stem-2026",
    kind: "scholarship",
    title: "국가우수장학금(이공계)",
    host: "한국장학재단",
    theme: "이공계 우수학생 등록금 전액 지원",
    tags: ["국가장학", "성적", "이공계"],
    eligibility: "자연·공학계열 1학년(성적우수) 또는 3학년(재학중우수자), 대학 추천 후 재단 신청",
    grade: ["학부"],
    amount: "등록금 전액 (기초생활수급자 학기당 생활비 250만 원 추가)",
    applyStart: "2026-04-30",
    deadline: "2026-05-28",
    method: "학과·학생지원팀 추천 → 한국장학재단 포털 신청",
    fee: "없음",
    summary:
      "건축공학은 공학계열로 대상입니다. 1학년은 최대 8학기, 3학년 유형은 최대 4학기 지원입니다. 일정은 학교마다 며칠씩 다릅니다.",
    notes: [
      "2026년 신규 선발은 5월에 마감됐습니다. 내년 4~5월 학과 공지를 확인하세요.",
      "졸업 후 이공계 미진출 시 환수될 수 있습니다.",
      "타 한국장학재단 우수장학금과 중복이 안 됩니다."
    ],
    url: "https://www.kosaf.go.kr"
  },
  {
    id: "kosaf-national",
    kind: "scholarship",
    title: "국가장학금 I·II유형 (연례)",
    host: "한국장학재단",
    theme: "소득 구간 기반 등록금 지원",
    tags: ["국가장학", "소득", "상시·연례"],
    eligibility: "국내 대학 재학생, 학자금 지원구간 및 성적 기준 충족",
    grade: ["학부"],
    amount: "소득구간·유형에 따라 차등 (I유형 최대 등록금 범위)",
    applyStart: "2026-08-01",
    deadline: "2026-09-10",
    method: "한국장학재단 포털 + 가구원 동의 및 소득·재산 조사",
    fee: "없음",
    summary:
      "가장 기본이 되는 국가장학입니다. 1학기는 보통 11~12월과 2~3월, 2학기는 5~6월과 8~9월에 열립니다.",
    notes: [
      "정확한 2026-2학기 마감일은 재단 공고를 확인하세요. 여기 날짜는 전형적 2학기 창을 안내한 것입니다.",
      "반드시 본인 인증과 가구원 정보 동의가 필요합니다."
    ],
    url: "https://www.kosaf.go.kr"
  },
  {
    id: "kcea-2026",
    kind: "scholarship",
    title: "2026 예비 건설엔지니어 장학사업",
    host: "한국건설기술인협회",
    theme: "건설 분야 예비 기술인 양성",
    tags: ["건설", "교외장학", "건축공학 적합"],
    eligibility: "건설 관련 학과 대학생 (학교 공지 기준)",
    grade: ["학부"],
    amount: "협회 안내문 기준 (학교 공지 확인)",
    applyStart: "2026-03-16",
    deadline: "2026-04-10T13:00:00+09:00",
    method: "소속 대학 안내에 따른 서류 제출",
    fee: "없음",
    summary:
      "건설기술인협회가 예비 엔지니어를 뽑는 교외 장학입니다. 건축공학과 공지에 매년 올라옵니다.",
    notes: [
      "2026년 접수는 4월 10일 마감됐습니다.",
      "제출 서식이 대학생용으로 따로 있습니다. 내년 3월 학과 게시판을 확인하세요."
    ],
    url: "https://eng.snu.ac.kr/communication/notice/notice?bbsidx=6494&md=v"
  },
  {
    id: "seoul-injae-2026",
    kind: "scholarship",
    title: "서울인재대학장학금 (2026 상반기)",
    host: "서울장학재단",
    theme: "학업·진로를 스스로 설계하는 서울 인재 지원",
    tags: ["교외장학", "소득", "성적"],
    eligibility:
      "서울 소재 대학 재학 또는 서울시민(자녀)의 비서울 대학 재학, 2학년 이상, 학자금 4구간 이하, 백분위 90점 이상",
    grade: ["학부"],
    amount: "재단 공고 금액 (상반기 선발)",
    applyStart: "2026-03-24T10:00:00+09:00",
    deadline: "2026-03-31T16:00:00+09:00",
    method: "재단 홈페이지 온라인 신청",
    fee: "없음",
    summary:
      "성적과 소득 기준이 함께 있습니다. 기초·차상위 또는 학자금 4구간 이하, 전체 평점 백분위 90점 이상이어야 합니다.",
    notes: ["2026 상반기는 마감됐습니다. 하반기·내년 공고는 서울장학재단에서 확인하세요."],
    url: "https://www.seoulscholarship.or.kr"
  },
  {
    id: "inha-alumni-2026-2",
    kind: "scholarship",
    title: "인하건축 총동문회 장학금 (2026-2)",
    host: "인하대학교 건축학부 총동문회",
    theme: "학부 활동과 선후배 유대가 깊은 학생 지원",
    tags: ["교내·동문", "학과"],
    eligibility: "인하대 건축공학과 재학생, 2학기 등록 예정, 휴학·조기취업 제외",
    grade: ["학부"],
    amount: "1인 100만 원",
    applyStart: "2026-09-01",
    deadline: "2026-09-30T14:00:00+09:00",
    method: "학과 사무실 방문 제출",
    fee: "없음",
    summary:
      "학과 동문회 장학의 대표 사례입니다. 다른 학교도 가을에 동문·기부자 장학이 많이 열립니다.",
    notes: [
      "인하대 소속 학생 대상입니다. 타 대학생은 본인 학과 동문회·기부자 장학을 같은 시기에 확인하세요.",
      "직전 학기 동문회 수혜자는 제외, 수여식·송년회 참석이 필요합니다."
    ],
    url: "https://arch.inha.ac.kr/bbs/arch/539/191110/artclView.do"
  },
  {
    id: "daelim-suam",
    kind: "scholarship",
    title: "대림수암장학문화재단 장학생 (연례)",
    host: "대림수암장학문화재단",
    theme: "건설·건축 분야와 인연이 깊은 교외 장학",
    tags: ["교외장학", "건설", "연례"],
    eligibility: "재단 및 소속 대학 추천 기준 (보통 12월 전후)",
    grade: ["학부", "대학원"],
    amount: "재단 연도별 공고",
    applyStart: "2025-11-15",
    deadline: "2025-12-15T23:59:00+09:00",
    method: "대학 추천 또는 재단 안내",
    fee: "없음",
    summary:
      "건축·건설 전공 공지에 자주 올라오는 교외 장학입니다. 최근 공고는 2025년 12월 마감이었습니다.",
    notes: ["2026년 하반기 공고를 학과 게시판에서 확인하세요."],
    url: "https://architecture.seoultech.ac.kr/bachelor_of_information/scholarship"
  },
  {
    id: "deokshin-epc",
    kind: "scholarship",
    title: "덕신EPC 건축안전 장학금 (연례)",
    host: "덕신EPC",
    theme: "건축 안전 분야 인재 지원",
    tags: ["기업장학", "안전", "건축공학 적합"],
    eligibility: "건축공학 등 관련 전공 재학생 (대학 공지 기준)",
    grade: ["학부"],
    amount: "기업 공고 기준",
    applyStart: "2025-10-01",
    deadline: "2025-10-31",
    method: "소속 대학 건축공학전공 접수",
    fee: "없음",
    summary:
      "건축 안전을 키워드로 하는 기업 장학입니다. 구조·시공·안전 관심 학생에게 잘 맞습니다.",
    notes: ["최근 공개된 선발은 2025년 10월 마감입니다. 2026년 공고는 학과에 문의하세요."],
    url: "https://architecture.seoultech.ac.kr/bachelor_of_information/scholarship"
  },
  {
    id: "hyoduk-2026",
    kind: "scholarship",
    title: "효덕산업 기부자장학금",
    host: "(주)효덕산업 · 대학 발전기금",
    theme: "교외 기부자 지정 장학",
    tags: ["기부자장학", "학과"],
    eligibility: "해당 대학 건축공학전공 재학생 (학교 공지)",
    grade: ["학부"],
    amount: "대학 안내",
    applyStart: "2026-03-16",
    deadline: "2026-03-31",
    method: "학과·학생지원 안내에 따른 신청",
    fee: "없음",
    summary:
      "건설 관련 기업이 학과에 내는 지정 장학 유형입니다. 학교마다 이름만 다르고 3~4월, 9~10월에 자주 뜹니다.",
    notes: ["서울과기대 건축공학전공 2026년 3월 안내 사례입니다. 본인 학교 기부자 장학을 함께 보세요."],
    url: "https://architecture.seoultech.ac.kr/bachelor_of_information/scholarship"
  }
];
