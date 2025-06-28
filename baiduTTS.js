// 百度语音配置（请替换成您自己的API密钥）
const BAIDU_API_KEY = 'jmlVBVvDDl37SpvbGKtO2CS1';
const BAIDU_SECRET_KEY = 'iIOLwOEiPsn5AIIFivfrJL6XpjBPsTdH';
let accessToken = '';

// 初始化语音
(async function initTTS() {
  try {
    const response = await fetch(
      `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${jmlVBVvDDl37SpvbGKtO2CS1}&client_secret=${iIOLwOEiPsn5AIIFivfrJL6XpjBPsTdHY}`
    );
    const data = await response.json();
    accessToken = data.access_token;
    console.log('语音初始化成功');
  } catch (e) {
    console.error('语音初始化失败:', e);
  }
})();

// 中文语音合成
window.speakChinese = function(text) {
  return new Promise((resolve, reject) => {
    if (!accessToken) {
      // 使用浏览器原生语音
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.onend = resolve;
      utterance.onerror = reject;
      speechSynthesis.speak(utterance);
      return;
    }

    const audio = new Audio();
    audio.src = `https://tsn.baidu.com/text2audio?tex=${encodeURIComponent(text)}&tok=${accessToken}&cuid=xiaoman_app&ctp=1&lan=zh&per=0`;
    audio.onended = resolve;
    audio.onerror = reject;
    audio.play().catch(reject);
  });
};

// 英文语音合成
window.speakEnglish = function(text) {
  return new Promise((resolve, reject) => {
    if (!accessToken) {
      // 使用浏览器原生语音
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.onend = resolve;
      utterance.onerror = reject;
      speechSynthesis.speak(utterance);
      return;
    }

    // 百度API英文需要特殊参数
    const audio = new Audio();
    audio.src = `https://tsn.baidu.com/text2audio?tex=${encodeURIComponent(text)}&tok=${accessToken}&cuid=xiaoman_app&ctp=1&lan=en&per=3`; // per=3 美式发音
    audio.onended = resolve;
    audio.onerror = reject;
    audio.play().catch(reject);
  });
};