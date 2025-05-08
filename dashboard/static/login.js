// static/login.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnLogin');
    const msg = document.getElementById('msg');
  
    btn.addEventListener('click', async () => {
      const user = document.getElementById('username').value;
      const pw   = document.getElementById('password').value;
  
      // 자격증명 JSON 불러오기
      let creds;
      try {
        const res = await fetch('static/credentials.json');
        creds = await res.json();
      } catch (e) {
        msg.innerText = '자격증명 파일 로드 실패';
        return;
      }
  
      // 검증
      if (creds[user] === pw) {
        localStorage.setItem('studentId', user);
        location.href = 'dashboard.html';
      } else {
        msg.innerText = 'ID 또는 비밀번호가 올바르지 않습니다.';
      }
    });
  });
  