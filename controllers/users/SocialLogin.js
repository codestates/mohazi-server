// JWT 안 쓰고
// 현재 client에서 email, googleId, name parameter가 들어온다.
// email: email, password: googleId, username: name 으로 설정
// 1. 기존에 없던 email(신규회원) => /signup과 동일한 방식으로 소셜 로그인 시 위 params로 signup 진행
// 이후 바로 /login 요청
// 2. 기존에 있던 회원 => 바로 /login 진행