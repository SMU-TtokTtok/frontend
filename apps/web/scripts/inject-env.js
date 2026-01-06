// 환경 변수를 Service Worker에 주입하는 간단한 스크립트
const fs = require('fs');
const path = require('path');

// .env 파일 로드
const envPath = path.join(__dirname, '../.env');

if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        // 따옴표 제거
        const cleanValue = value.replace(/^["']|["']$/g, '');
        process.env[key.trim()] = cleanValue;
      }
    }
  });
}

const swPath = path.join(__dirname, '../public/firebase-messaging-sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');

// 플레이스홀더를 환경 변수 값으로 교체
// 환경 변수가 없으면 에러 발생 (보안을 위해 하드코딩된 값 사용 방지)
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
  'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID',
];

// 필수 환경 변수 확인
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('❌ 필수 환경 변수가 설정되지 않았습니다:');
  missingVars.forEach((varName) => console.error(`   - ${varName}`));
  console.error('\n💡 .env 파일에 환경 변수를 설정해주세요.');
  process.exit(1);
}

const replacements = {
  __NEXT_PUBLIC_FIREBASE_API_KEY__: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  __NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN__: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  __NEXT_PUBLIC_FIREBASE_PROJECT_ID__: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  __NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET__: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  __NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID__:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  __NEXT_PUBLIC_FIREBASE_APP_ID__: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  __NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID__: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// 플레이스홀더를 실제 값으로 교체
Object.keys(replacements).forEach((placeholder) => {
  const value = replacements[placeholder];
  swContent = swContent.replace(new RegExp(placeholder, 'g'), value);
});

fs.writeFileSync(swPath, swContent, 'utf8');
