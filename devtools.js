chrome.devtools.panels.create(
  "PyConsole",           // 패널에 표시될 이름
  null,                  // 아이콘 경로 (필요 없으면 null)
  "panel.html",          // 패널이 열렸을 때 보여줄 HTML 파일
  function(panel) {
    console.log("PyConsole 패널이 성공적으로 생성되었습니다.");
  }
);
