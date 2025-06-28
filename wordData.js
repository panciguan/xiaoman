// 拼音分解工具函数（保持不变）
function splitPinyin(pinyin) {
  const initials = [
    'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h',
    'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's',
    'y', 'w'
  ];
  
  let parts = [];
  
  // 特殊处理 ü 的拼音
  if (pinyin.includes('ü') || pinyin.includes('ǖ') || 
      pinyin.includes('ǘ') || pinyin.includes('ǚ') || pinyin.includes('ǜ')) {
    const tone = pinyin.replace(/[^ǖǘǚǜ]/g, '');
    const base = pinyin.replace(/[ǖǘǚǜ]/g, 'ü');
    
    if (base.startsWith('ü')) {
      parts = ['', 'ü' + tone];
    } else {
      const initial = base.substring(0, base.indexOf('ü'));
      parts = [initial, 'ü' + tone];
    }
    return parts.filter(p => p);
  }

  // 尝试匹配复合声母 (zh, ch, sh)
  if (pinyin.length >= 2 && initials.includes(pinyin.substring(0, 2))) {
    parts.push(pinyin.substring(0, 2));
    parts.push(pinyin.substring(2));
  } 
  // 尝试匹配单声母
  else if (pinyin.length >= 1 && initials.includes(pinyin[0])) {
    parts.push(pinyin[0]);
    parts.push(pinyin.substring(1));
  } 
  // 零声母处理
  else {
    parts.push(pinyin);
  }
  
  return parts;
}

// 汉字数据（优化后）
window.wordData = [
  {
    char: '天', 
    pinyin: 'tiān', 
    split: splitPinyin('tiān'),
    english: "sky",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '天空', english: "sky" },
      { text: '天气', english: "weather" }
    ],
    meaning: '今天天气真好',
    meaningEn: "The weather is nice today"
  },
  {
    char: '地', 
    pinyin: 'dì', 
    split: splitPinyin('dì'),
    english: "ground",
    strokePath: 'M20,20 L80,20 M20,20 L20,80 M20,80 L80,80 M80,20 L80,80 M40,40 L60,60',
    phrases: [
      { text: '土地', english: "land" },
      { text: '地球', english: "earth" }
    ],
    meaning: '地球是圆的',
    meaningEn: "The earth is round"
  },
  {
    char: '人', 
    pinyin: 'rén', 
    split: splitPinyin('rén'),
    english: "person",
    strokePath: 'M50,20 L30,80 M50,20 L70,80',
    phrases: [
      { text: '人民', english: "people" },
      { text: '人类', english: "humanity" }
    ],
    meaning: '他是一个好人',
    meaningEn: "He is a good person"
  },
  {
    char: '你', 
    pinyin: 'nǐ', 
    split: splitPinyin('nǐ'),
    english: "you",
    strokePath: 'M30,20 L30,80 M30,20 L70,20 M70,20 L70,50 M50,50 L70,50 M30,50 L50,50 M50,50 L50,80',
    phrases: [
      { text: '你好', english: "hello" },
      { text: '你们', english: "you (plural)" }
    ],
    meaning: '你好吗？',
    meaningEn: "How are you?"
  },
  {
    char: '我', 
    pinyin: 'wǒ', 
    split: splitPinyin('wǒ'),
    english: "I/me",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,60 M50,40 L50,60',
    phrases: [
      { text: '我们', english: "we/us" },
      { text: '自我', english: "self" }
    ],
    meaning: '我是学生',
    meaningEn: "I am a student"
  },
  {
    char: '他', 
    pinyin: 'tā', 
    split: splitPinyin('tā'),
    english: "he/him",
    strokePath: 'M40,20 L40,80 M40,20 L80,20 M80,20 L80,50 M60,50 L80,50 M40,50 L60,50 M60,50 L60,80',
    phrases: [
      { text: '他们', english: "they" },
      { text: '其他', english: "other" }
    ],
    meaning: '他是医生',
    meaningEn: "He is a doctor"
  },
  {
    char: '一', 
    pinyin: 'yī', 
    split: splitPinyin('yī'),
    english: "one",
    strokePath: 'M20,50 L80,50',
    phrases: [
      { text: '一个', english: "one (unit)" },
      { text: '第一', english: "first" }
    ],
    meaning: '我有一个苹果',
    meaningEn: "I have an apple"
  },
  {
    char: '二', 
    pinyin: 'èr', 
    split: splitPinyin('èr'),
    english: "two",
    strokePath: 'M20,40 L80,40 M20,60 L80,60',
    phrases: [
      { text: '二月', english: "February" },
      { text: '第二', english: "second" }
    ],
    meaning: '我有两个哥哥',
    meaningEn: "I have two older brothers"
  },
  {
    char: '三', 
    pinyin: 'sān', 
    split: splitPinyin('sān'),
    english: "three",
    strokePath: 'M20,35 L80,35 M20,50 L80,50 M20,65 L80,65',
    phrases: [
      { text: '三月', english: "March" },
      { text: '第三', english: "third" }
    ],
    meaning: '三个小朋友在玩耍',
    meaningEn: "Three children are playing"
  },
  {
    char: '四', 
    pinyin: 'sì', 
    split: splitPinyin('sì'),
    english: "four",
    strokePath: 'M30,20 L70,20 L70,80 L30,80 Z M40,40 L60,60',
    phrases: [
      { text: '四月', english: "April" },
      { text: '四季', english: "four seasons" }
    ],
    meaning: '一年有四季',
    meaningEn: "There are four seasons in a year"
  },
  {
    char: '五', 
    pinyin: 'wǔ', 
    split: splitPinyin('wǔ'),
    english: "five",
    strokePath: 'M20,20 L80,20 L80,80 L20,80 Z M50,20 L50,50 M30,50 L70,50 M50,50 L50,80',
    phrases: [
      { text: '五月', english: "May" },
      { text: '五颜六色', english: "colorful" }
    ],
    meaning: '星期五我们要考试',
    meaningEn: "We have an exam on Friday"
  },
  {
    char: '上', 
    pinyin: 'shàng', 
    split: splitPinyin('shàng'),
    english: "up/above",
    strokePath: 'M20,30 L50,30 L50,70 L20,70 Z M50,30 L80,30',
    phrases: [
      { text: '上面', english: "above" },
      { text: '上学', english: "go to school" }
    ],
    meaning: '书在桌子上面',
    meaningEn: "The book is on the table"
  },
  {
    char: '下', 
    pinyin: 'xià', 
    split: splitPinyin('xià'),
    english: "down/below",
    strokePath: 'M50,30 L80,30 L80,70 L50,70 Z M20,30 L50,30',
    phrases: [
      { text: '下面', english: "below" },
      { text: '下雨', english: "rain" }
    ],
    meaning: '猫在桌子下面',
    meaningEn: "The cat is under the table"
  },
  {
    char: '口', 
    pinyin: 'kǒu', 
    split: splitPinyin('kǒu'),
    english: "mouth",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z',
    phrases: [
      { text: '人口', english: "population" },
      { text: '门口', english: "doorway" }
    ],
    meaning: '请张开嘴',
    meaningEn: "Please open your mouth"
  },
  {
    char: '耳', 
    pinyin: 'ěr', 
    split: splitPinyin('ěr'),
    english: "ear",
    strokePath: 'M40,20 L60,20 L70,50 L60,80 L40,80 L30,50 Z',
    phrases: [
      { text: '耳朵', english: "ear" },
      { text: '耳机', english: "earphones" }
    ],
    meaning: '我的耳朵很痒',
    meaningEn: "My ear is very itchy"
  },
  {
    char: '目', 
    pinyin: 'mù', 
    split: splitPinyin('mù'),
    english: "eye",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '目的', english: "purpose" },
      { text: '目光', english: "gaze" }
    ],
    meaning: '请睁开眼睛',
    meaningEn: "Please open your eyes"
  },
  {
    char: '手', 
    pinyin: 'shǒu', 
    split: splitPinyin('shǒu'),
    english: "hand",
    strokePath: 'M50,20 L30,50 L30,80 M50,20 L70,50 L70,80 M40,50 L60,50',
    phrases: [
      { text: '手机', english: "mobile phone" },
      { text: '手表', english: "wristwatch" }
    ],
    meaning: '请举起手',
    meaningEn: "Please raise your hand"
  },
  {
    char: '足', 
    pinyin: 'zú', 
    split: splitPinyin('zú'),
    english: "foot",
    strokePath: 'M30,30 L70,30 M50,30 L50,80 M30,50 L70,50',
    phrases: [
      { text: '足球', english: "football" },
      { text: '满足', english: "satisfied" }
    ],
    meaning: '我的脚受伤了',
    meaningEn: "My foot is injured"
  },
  {
    char: '站', 
    pinyin: 'zhàn', 
    split: splitPinyin('zhàn'),
    english: "stand",
    strokePath: 'M40,20 L40,80 M60,20 L60,80 M30,50 L70,50 M50,20 L50,50',
    phrases: [
      { text: '站立', english: "stand" },
      { text: '车站', english: "station" }
    ],
    meaning: '请站起来',
    meaningEn: "Please stand up"
  },
  {
    char: '坐', 
    pinyin: 'zuò', 
    split: splitPinyin('zuò'),
    english: "sit",
    strokePath: 'M30,50 L70,50 M50,50 L50,80 M40,30 L60,30',
    phrases: [
      { text: '坐下', english: "sit down" },
      { text: '乘坐', english: "ride" }
    ],
    meaning: '请坐在椅子上',
    meaningEn: "Please sit on the chair"
  },
  {
    char: '日', 
    pinyin: 'rì', 
    split: splitPinyin('rì'),
    english: "sun/day",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z',
    phrases: [
      { text: '日期', english: "date" },
      { text: '生日', english: "birthday" }
    ],
    meaning: '今天是晴天',
    meaningEn: "Today is sunny"
  },
  {
    char: '月', 
    pinyin: 'yuè', 
    split: splitPinyin('yuè'),
    english: "moon/month",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z',
    phrases: [
      { text: '月亮', english: "moon" },
      { text: '月份', english: "month" }
    ],
    meaning: '今晚的月亮很圆',
    meaningEn: "The moon is very round tonight"
  },
  {
    char: '水', 
    pinyin: 'shuǐ', 
    split: splitPinyin('shuǐ'),
    english: "water",
    strokePath: 'M50,20 L30,50 L70,50 L50,80 M40,35 L60,35',
    phrases: [
      { text: '水果', english: "fruit" },
      { text: '喝水', english: "drink water" }
    ],
    meaning: '多喝水对身体好',
    meaningEn: "Drinking more water is good for health"
  },
  {
    char: '火', 
    pinyin: 'huǒ', 
    split: splitPinyin('huǒ'),
    english: "fire",
    strokePath: 'M50,20 L30,60 M50,20 L70,60 M40,50 L60,50',
    phrases: [
      { text: '火车', english: "train" },
      { text: '火灾', english: "fire disaster" }
    ],
    meaning: '小心火烛',
    meaningEn: "Be careful with fire"
  },
  {
    char: '山', 
    pinyin: 'shān', 
    split: splitPinyin('shān'),
    english: "mountain",
    strokePath: 'M50,20 L30,80 L70,80 Z',
    phrases: [
      { text: '爬山', english: "climb mountain" },
      { text: '山顶', english: "mountain top" }
    ],
    meaning: '泰山是中国名山',
    meaningEn: "Mount Tai is a famous mountain in China"
  },
  {
    char: '石', 
    pinyin: 'shí', 
    split: splitPinyin('shí'),
    english: "stone",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,60',
    phrases: [
      { text: '石头', english: "stone" },
      { text: '石油', english: "petroleum" }
    ],
    meaning: '花园里有很多石头',
    meaningEn: "There are many stones in the garden"
  },
  {
    char: '田', 
    pinyin: 'tián', 
    split: splitPinyin('tián'),
    english: "field",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M50,30 L50,70 M30,50 L70,50',
    phrases: [
      { text: '田地', english: "farmland" },
      { text: '田野', english: "field" }
    ],
    meaning: '农民在田里工作',
    meaningEn: "Farmers work in the fields"
  },
  {
    char: '禾', 
    pinyin: 'hé', 
    split: splitPinyin('hé'),
    english: "grain",
    strokePath: 'M50,20 L50,60 M50,30 L30,40 M50,30 L70,40 M40,50 L60,50',
    phrases: [
      { text: '禾苗', english: "seedlings" },
      { text: '禾本科', english: "gramineous" }
    ],
    meaning: '田里的禾苗长高了',
    meaningEn: "The seedlings in the field have grown taller"
  },
  {
    char: '对', 
    pinyin: 'duì', 
    split: splitPinyin('duì'),
    english: "correct/pair",
    strokePath: 'M30,30 L30,70 M30,50 L50,50 M50,30 L50,70 L70,50 L50,30',
    phrases: [
      { text: '对不起', english: "sorry" },
      { text: '对手', english: "opponent" }
    ],
    meaning: '这个答案是对的',
    meaningEn: "This answer is correct"
  },
  {
    char: '云', 
    pinyin: 'yún', 
    split: splitPinyin('yún'),
    english: "cloud",
    strokePath: 'M30,50 L70,50 M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '白云', english: "white cloud" },
      { text: '云彩', english: "cloud" }
    ],
    meaning: '天上的云像棉花糖',
    meaningEn: "The clouds in the sky look like cotton candy"
  },
  {
    char: '雨', 
    pinyin: 'yǔ', 
    split: splitPinyin('yǔ'),
    english: "rain",
    strokePath: 'M50,20 L50,60 M30,40 L70,40 M40,50 L60,50',
    phrases: [
      { text: '下雨', english: "rain" },
      { text: '雨伞', english: "umbrella" }
    ],
    meaning: '今天下午会下雨',
    meaningEn: "It will rain this afternoon"
  },
  {
    char: '风', 
    pinyin: 'fēng', 
    split: splitPinyin('fēng'),
    english: "wind",
    strokePath: 'M50,20 L30,50 L70,50 L50,80 M40,35 L60,35',
    phrases: [
      { text: '风筝', english: "kite" },
      { text: '台风', english: "typhoon" }
    ],
    meaning: '今天的风很大',
    meaningEn: "It's very windy today"
  },
  {
    char: '花', 
    pinyin: 'huā', 
    split: splitPinyin('huā'),
    english: "flower",
    strokePath: 'M50,20 L40,40 L60,40 L50,20 M30,50 L70,50 M50,50 L50,80',
    phrases: [
      { text: '花园', english: "garden" },
      { text: '花朵', english: "flower" }
    ],
    meaning: '公园里有很多花',
    meaningEn: "There are many flowers in the park"
  },
  {
    char: '鸟', 
    pinyin: 'niǎo', 
    split: splitPinyin('niǎo'),
    english: "bird",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M50,50 L50,80',
    phrases: [
      { text: '小鸟', english: "small bird" },
      { text: '鸟类', english: "birds" }
    ],
    meaning: '树上有一只鸟',
    meaningEn: "There is a bird in the tree"
  },
  {
    char: '虫', 
    pinyin: 'chóng', 
    split: splitPinyin('chóng'),
    english: "insect",
    strokePath: 'M50,30 L30,50 L50,70 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '虫子', english: "insect" },
      { text: '昆虫', english: "insect" }
    ],
    meaning: '草地上有虫子',
    meaningEn: "There are insects in the grass"
  },
  {
    char: '六', 
    pinyin: 'liù', 
    split: splitPinyin('liù'),
    english: "six",
    strokePath: 'M50,20 L30,40 L30,70 L70,70 L70,40 Z',
    phrases: [
      { text: '六月', english: "June" },
      { text: '十六', english: "sixteen" }
    ],
    meaning: '六月一日是儿童节',
    meaningEn: "June 1st is Children's Day"
  },
  {
    char: '七', 
    pinyin: 'qī', 
    split: splitPinyin('qī'),
    english: "seven",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '七月', english: "July" },
      { text: '十七', english: "seventeen" }
    ],
    meaning: '一个星期有七天',
    meaningEn: "There are seven days in a week"
  },
  {
    char: '八', 
    pinyin: 'bā', 
    split: splitPinyin('bā'),
    english: "eight",
    strokePath: 'M30,40 L70,60 M70,40 L30,60',
    phrases: [
      { text: '八月', english: "August" },
      { text: '八十', english: "eighty" }
    ],
    meaning: '八月是夏天',
    meaningEn: "August is summer"
  },
  {
    char: '九', 
    pinyin: 'jiǔ', 
    split: splitPinyin('jiǔ'),
    english: "nine",
    strokePath: 'M60,20 L40,40 L60,70 M40,40 L70,40',
    phrases: [
      { text: '九月', english: "September" },
      { text: '十九', english: "nineteen" }
    ],
    meaning: '九月开学',
    meaningEn: "School starts in September"
  },
  {
    char: '十', 
    pinyin: 'shí', 
    split: splitPinyin('shí'),
    english: "ten",
    strokePath: 'M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '十月', english: "October" },
      { text: '十分', english: "very" }
    ],
    meaning: '现在是十点钟',
    meaningEn: "It's ten o'clock now"
  },
    {
    char: '爸', 
    pinyin: 'bà', 
    split: splitPinyin('bà'),
    english: "dad",
    strokePath: 'M30,20 L50,50 L70,20 M50,50 L50,80',
    phrases: [
      { text: '爸爸', english: "father" },
      { text: '爸妈', english: "parents" }
    ],
    meaning: '我爸爸是工程师',
    meaningEn: "My dad is an engineer"
  },
  {
    char: '妈', 
    pinyin: 'mā', 
    split: splitPinyin('mā'),
    english: "mom",
    strokePath: 'M30,20 L70,20 M50,20 L50,80 M40,50 L60,50',
    phrases: [
      { text: '妈妈', english: "mother" },
      { text: '爸妈', english: "parents" }
    ],
    meaning: '妈妈做的饭很好吃',
    meaningEn: "Mom's cooking is delicious"
  },
  {
    char: '马', 
    pinyin: 'mǎ', 
    split: splitPinyin('mǎ'),
    english: "horse",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,70 M30,70 L70,70',
    phrases: [
      { text: '马上', english: "immediately" },
      { text: '马车', english: "carriage" }
    ],
    meaning: '草原上有许多马',
    meaningEn: "There are many horses on the grassland"
  },
  {
    char: '土', 
    pinyin: 'tǔ', 
    split: splitPinyin('tǔ'),
    english: "soil",
    strokePath: 'M50,30 L30,50 L50,70 L70,50 Z',
    phrases: [
      { text: '土地', english: "land" },
      { text: '泥土', english: "mud" }
    ],
    meaning: '农民在土地上耕种',
    meaningEn: "Farmers cultivate the land"
  },
  {
    char: '不', 
    pinyin: 'bù', 
    split: splitPinyin('bù'),
    english: "not",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '不是', english: "is not" },
      { text: '不要', english: "do not want" }
    ],
    meaning: '这不是我的书',
    meaningEn: "This is not my book"
  },
  {
    char: '画', 
    pinyin: 'huà', 
    split: splitPinyin('huà'),
    english: "draw/painting",
    strokePath: 'M30,30 L30,70 L70,70 L70,30 Z M40,40 L60,60',
    phrases: [
      { text: '画画', english: "draw a picture" },
      { text: '图画', english: "picture" }
    ],
    meaning: '我喜欢画画',
    meaningEn: "I like drawing"
  },
  {
    char: '打', 
    pinyin: 'dǎ', 
    split: splitPinyin('dǎ'),
    english: "hit/play",
    strokePath: 'M50,20 L30,50 L50,80 M50,50 L70,50',
    phrases: [
      { text: '打电话', english: "make a phone call" },
      { text: '打球', english: "play ball" }
    ],
    meaning: '我要给妈妈打电话',
    meaningEn: "I want to call my mom"
  },
  {
    char: '棋', 
    pinyin: 'qí', 
    split: splitPinyin('qí'),
    english: "chess",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '下棋', english: "play chess" },
      { text: '象棋', english: "Chinese chess" }
    ],
    meaning: '爷爷喜欢下棋',
    meaningEn: "Grandpa likes playing chess"
  },
  {
    char: '鸡', 
    pinyin: 'jī', 
    split: splitPinyin('jī'),
    english: "chicken",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M50,50 L50,80',
    phrases: [
      { text: '鸡蛋', english: "egg" },
      { text: '鸡肉', english: "chicken meat" }
    ],
    meaning: '农场里有小鸡',
    meaningEn: "There are chicks on the farm"
  },
  {
    char: '字', 
    pinyin: 'zì', 
    split: splitPinyin('zì'),
    english: "character",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '汉字', english: "Chinese character" },
      { text: '写字', english: "write characters" }
    ],
    meaning: '我正在学写汉字',
    meaningEn: "I'm learning to write Chinese characters"
  },
  {
    char: '词', 
    pinyin: 'cí', 
    split: splitPinyin('cí'),
    english: "word",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M50,40 L50,60',
    phrases: [
      { text: '词语', english: "words and phrases" },
      { text: '词典', english: "dictionary" }
    ],
    meaning: '这个词语是什么意思？',
    meaningEn: "What does this word mean?"
  },
  {
    char: '语', 
    pinyin: 'yǔ', 
    split: splitPinyin('yǔ'),
    english: "language",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M40,40 L60,40',
    phrases: [
      { text: '语言', english: "language" },
      { text: '汉语', english: "Chinese language" }
    ],
    meaning: '英语是一种国际语言',
    meaningEn: "English is an international language"
  },
  {
    char: '句', 
    pinyin: 'jù', 
    split: splitPinyin('jù'),
    english: "sentence",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,50 L70,50',
    phrases: [
      { text: '句子', english: "sentence" },
      { text: '句号', english: "period" }
    ],
    meaning: '请用这个词造一个句子',
    meaningEn: "Please make a sentence with this word"
  },
  {
    char: '子', 
    pinyin: 'zǐ', 
    split: splitPinyin('zǐ'),
    english: "child",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '孩子', english: "child" },
      { text: '儿子', english: "son" }
    ],
    meaning: '孩子们在公园玩耍',
    meaningEn: "Children are playing in the park"
  },
  {
    char: '桌', 
    pinyin: 'zhuō', 
    split: splitPinyin('zhuō'),
    english: "table",
    strokePath: 'M30,40 L70,40 M30,40 L30,70 L70,70 L70,40 M40,50 L60,50',
    phrases: [
      { text: '桌子', english: "table" },
      { text: '书桌', english: "desk" }
    ],
    meaning: '书在桌子上',
    meaningEn: "The book is on the table"
  },
  {
    char: '纸', 
    pinyin: 'zhǐ', 
    split: splitPinyin('zhǐ'),
    english: "paper",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,60',
    phrases: [
      { text: '纸张', english: "paper" },
      { text: '纸巾', english: "tissue" }
    ],
    meaning: '请给我一张纸',
    meaningEn: "Please give me a piece of paper"
  },
  {
    char: '文', 
    pinyin: 'wén', 
    split: splitPinyin('wén'),
    english: "writing",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '中文', english: "Chinese" },
      { text: '文化', english: "culture" }
    ],
    meaning: '我在学习中文',
    meaningEn: "I am learning Chinese"
  },
  {
    char: '数', 
    pinyin: 'shù', 
    split: splitPinyin('shù'),
    english: "number",
    strokePath: 'M40,30 L60,30 M50,30 L50,70 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '数学', english: "mathematics" },
      { text: '数字', english: "digit" }
    ],
    meaning: '数学很有趣',
    meaningEn: "Mathematics is interesting"
  },
  {
    char: '学', 
    pinyin: 'xué', 
    split: splitPinyin('xué'),
    english: "study",
    strokePath: 'M40,20 L60,20 L70,40 L60,60 L40,60 L30,40 Z M50,30 L50,50',
    phrases: [
      { text: '学习', english: "study" },
      { text: '学校', english: "school" }
    ],
    meaning: '我要好好学习',
    meaningEn: "I want to study hard"
  },
  {
    char: '音', 
    pinyin: 'yīn', 
    split: splitPinyin('yīn'),
    english: "sound",
    strokePath: 'M40,30 L60,30 M50,30 L50,70 M30,50 L70,50',
    phrases: [
      { text: '音乐', english: "music" },
      { text: '声音', english: "sound" }
    ],
    meaning: '我喜欢听音乐',
    meaningEn: "I like listening to music"
  },
  {
    char: '乐', 
    pinyin: 'lè', 
    split: splitPinyin('lè'),
    english: "happy",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '快乐', english: "happy" },
      { text: '音乐', english: "music" }
    ],
    meaning: '生日快乐！',
    meaningEn: "Happy birthday!"
  },
  {
    char: '妹', 
    pinyin: 'mèi', 
    split: splitPinyin('mèi'),
    english: "younger sister",
    strokePath: 'M30,20 L50,50 L70,20 M50,50 L50,80 M40,60 L60,60',
    phrases: [
      { text: '妹妹', english: "younger sister" },
      { text: '姐妹', english: "sisters" }
    ],
    meaning: '我妹妹五岁了',
    meaningEn: "My younger sister is five years old"
  },
  {
    char: '奶', 
    pinyin: 'nǎi', 
    split: splitPinyin('nǎi'),
    english: "milk",
    strokePath: 'M30,20 L50,50 L70,20 M50,50 L50,80',
    phrases: [
      { text: '牛奶', english: "milk" },
      { text: '奶奶', english: "grandmother" }
    ],
    meaning: '我每天喝牛奶',
    meaningEn: "I drink milk every day"
  },
  {
    char: '小', 
    pinyin: 'xiǎo', 
    split: splitPinyin('xiǎo'),
    english: "small",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '小孩', english: "child" },
      { text: '小狗', english: "puppy" }
    ],
    meaning: '这只小猫很可爱',
    meaningEn: "This kitten is very cute"
  },
  {
    char: '桥', 
    pinyin: 'qiáo', 
    split: splitPinyin('qiáo'),
    english: "bridge",
    strokePath: 'M30,50 L50,30 L70,50 M30,50 L70,50 M50,30 L50,70',
    phrases: [
      { text: '桥梁', english: "bridge" },
      { text: '石桥', english: "stone bridge" }
    ],
    meaning: '河上有一座桥',
    meaningEn: "There is a bridge over the river"
  },
  {
    char: '台', 
    pinyin: 'tái', 
    split: splitPinyin('tái'),
    english: "platform",
    strokePath: 'M30,40 L70,40 M50,40 L50,80 M30,60 L70,60',
    phrases: [
      { text: '舞台', english: "stage" },
      { text: '电视台', english: "TV station" }
    ],
    meaning: '演员在舞台上表演',
    meaningEn: "Actors perform on stage"
  },
  {
    char: '雪', 
    pinyin: 'xuě', 
    split: splitPinyin('xuě'),
    english: "snow",
    strokePath: 'M50,20 L30,50 L70,50 Z M40,35 L60,35 M50,50 L50,70 M30,60 L70,60',
    phrases: [
      { text: '雪花', english: "snowflake" },
      { text: '下雪', english: "snow" }
    ],
    meaning: '冬天会下雪',
    meaningEn: "It snows in winter"
  },
  {
    char: '儿', 
    pinyin: 'ér', 
    split: splitPinyin('ér'),
    english: "child",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M50,50 L50,80',
    phrases: [
      { text: '儿子', english: "son" },
      { text: '儿童', english: "child" }
    ],
    meaning: '儿童节很快乐',
    meaningEn: "Children's Day is happy"
  },
  {
    char: '白', 
    pinyin: 'bái', 
    split: splitPinyin('bái'),
    english: "white",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,60',
    phrases: [
      { text: '白色', english: "white color" },
      { text: '白天', english: "daytime" }
    ],
    meaning: '雪是白色的',
    meaningEn: "Snow is white"
  },
  {
    char: '草', 
    pinyin: 'cǎo', 
    split: splitPinyin('cǎo'),
    english: "grass",
    strokePath: 'M30,60 L50,30 L70,60 M40,50 L60,50',
    phrases: [
      { text: '草地', english: "lawn" },
      { text: '青草', english: "green grass" }
    ],
    meaning: '草地上有羊在吃草',
    meaningEn: "Sheep are grazing on the grass"
  },
  {
    char: '家', 
    pinyin: 'jiā', 
    split: splitPinyin('jiā'),
    english: "home",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80 M40,70 L60,70',
    phrases: [
      { text: '家庭', english: "family" },
      { text: '回家', english: "go home" }
    ],
    meaning: '我想回家',
    meaningEn: "I want to go home"
  },
  {
    char: '是', 
    pinyin: 'shì', 
    split: splitPinyin('shì'),
    english: "is/are",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '是的', english: "yes" },
      { text: '不是', english: "is not" }
    ],
    meaning: '这是一本书',
    meaningEn: "This is a book"
  },
  {
    char: '车', 
    pinyin: 'chē', 
    split: splitPinyin('chē'),
    english: "vehicle",
    strokePath: 'M30,50 L70,50 M40,40 L40,60 L60,60 L60,40 Z',
    phrases: [
      { text: '汽车', english: "car" },
      { text: '火车', english: "train" }
    ],
    meaning: '爸爸开车去上班',
    meaningEn: "Dad drives to work"
  },
  {
    char: '路', 
    pinyin: 'lù', 
    split: splitPinyin('lù'),
    english: "road",
    strokePath: 'M30,50 L70,50 M40,40 L40,60 L60,60 L60,40 Z M50,30 L50,70',
    phrases: [
      { text: '道路', english: "road" },
      { text: '马路', english: "road" }
    ],
    meaning: '这条路通向城市',
    meaningEn: "This road leads to the city"
  },
  {
    char: '灯', 
    pinyin: 'dēng', 
    split: splitPinyin('dēng'),
    english: "lamp",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '灯光', english: "light" },
      { text: '台灯', english: "desk lamp" }
    ],
    meaning: '晚上请开灯',
    meaningEn: "Please turn on the light at night"
  },
  {
    char: '走', 
    pinyin: 'zǒu', 
    split: splitPinyin('zǒu'),
    english: "walk",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '走路', english: "walk" },
      { text: '行走', english: "walk" }
    ],
    meaning: '我们走路去公园',
    meaningEn: "We walk to the park"
  },
  {
    char: '秋', 
    pinyin: 'qiū', 
    split: splitPinyin('qiū'),
    english: "autumn",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '秋天', english: "autumn" },
      { text: '秋季', english: "autumn season" }
    ],
    meaning: '秋天树叶变黄',
    meaningEn: "Leaves turn yellow in autumn"
  },
  {
    char: '气', 
    pinyin: 'qì', 
    split: splitPinyin('qì'),
    english: "air",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M50,50 L50,80',
    phrases: [
      { text: '空气', english: "air" },
      { text: '天气', english: "weather" }
    ],
    meaning: '呼吸新鲜空气',
    meaningEn: "Breathe fresh air"
  },
  {
    char: '了', 
    pinyin: 'le', 
    split: splitPinyin('le'),
    english: "(completed action marker)",
    strokePath: 'M50,30 L30,60 M50,30 L70,60',
    phrases: [
      { text: '来了', english: "have come" },
      { text: '好了', english: "done/ok" }
    ],
    meaning: '我吃完饭了',
    meaningEn: "I have finished eating"
  },
  {
    char: '树', 
    pinyin: 'shù', 
    split: splitPinyin('shù'),
    english: "tree",
    strokePath: 'M50,20 L40,50 L60,50 Z M50,50 L50,80 M30,70 L70,70',
    phrases: [
      { text: '树木', english: "trees" },
      { text: '树叶', english: "tree leaves" }
    ],
    meaning: '院子里有一棵大树',
    meaningEn: "There is a big tree in the yard"
  },
    {
    char: '叶', 
    pinyin: 'yè', 
    split: splitPinyin('yè'),
    english: "leaf",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '树叶', english: "tree leaf" },
      { text: '叶子', english: "leaf" }
    ],
    meaning: '秋天树叶变黄',
    meaningEn: "Leaves turn yellow in autumn"
  },
  {
    char: '片', 
    pinyin: 'piàn', 
    split: splitPinyin('piàn'),
    english: "slice",
    strokePath: 'M40,20 L40,80 M60,20 L60,80 M30,50 L70,50',
    phrases: [
      { text: '一片', english: "a piece" },
      { text: '照片', english: "photo" }
    ],
    meaning: '给我一片面包',
    meaningEn: "Give me a slice of bread"
  },
  {
    char: '大', 
    pinyin: 'dà', 
    split: splitPinyin('dà'),
    english: "big",
    strokePath: 'M30,30 L70,30 M50,30 L50,80 M40,50 L60,50',
    phrases: [
      { text: '大家', english: "everyone" },
      { text: '大学', english: "university" }
    ],
    meaning: '这只狗很大',
    meaningEn: "This dog is very big"
  },
  {
    char: '飞', 
    pinyin: 'fēi', 
    split: splitPinyin('fēi'),
    english: "fly",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '飞机', english: "airplane" },
      { text: '飞行', english: "flight" }
    ],
    meaning: '小鸟在天空飞',
    meaningEn: "Birds fly in the sky"
  },
  {
    char: '会', 
    pinyin: 'huì', 
    split: splitPinyin('huì'),
    english: "can/meeting",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '会议', english: "meeting" },
      { text: '学会', english: "learn" }
    ],
    meaning: '我会说中文',
    meaningEn: "I can speak Chinese"
  },
  {
    char: '个', 
    pinyin: 'gè', 
    split: splitPinyin('gè'),
    english: "individual",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '个人', english: "individual" },
      { text: '一个', english: "one" }
    ],
    meaning: '我有一个苹果',
    meaningEn: "I have an apple"
  },
  {
    char: '的', 
    pinyin: 'de', 
    split: splitPinyin('de'),
    english: "of (possessive)",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '我的', english: "my" },
      { text: '你的', english: "your" }
    ],
    meaning: '这是我的书',
    meaningEn: "This is my book"
  },
  {
    char: '船', 
    pinyin: 'chuán', 
    split: splitPinyin('chuán'),
    english: "boat",
    strokePath: 'M30,60 L70,60 M40,50 L40,70 L60,70 L60,50 Z M50,40 L50,60',
    phrases: [
      { text: '轮船', english: "ship" },
      { text: '小船', english: "boat" }
    ],
    meaning: '我们在湖上划船',
    meaningEn: "We row a boat on the lake"
  },
  {
    char: '两', 
    pinyin: 'liǎng', 
    split: splitPinyin('liǎng'),
    english: "two",
    strokePath: 'M30,30 L70,30 M30,50 L70,50 M30,70 L70,70 M40,40 L60,60',
    phrases: [
      { text: '两个', english: "two" },
      { text: '两岸', english: "both sides" }
    ],
    meaning: '我有两个苹果',
    meaningEn: "I have two apples"
  },
  {
    char: '头', 
    pinyin: 'tóu', 
    split: splitPinyin('tóu'),
    english: "head",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '头发', english: "hair" },
      { text: '头顶', english: "top of head" }
    ],
    meaning: '他点点头表示同意',
    meaningEn: "He nodded his head in agreement"
  },
  {
    char: '在', 
    pinyin: 'zài', 
    split: splitPinyin('zài'),
    english: "at/in",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '现在', english: "now" },
      { text: '存在', english: "exist" }
    ],
    meaning: '我在家里',
    meaningEn: "I am at home"
  },
  {
    char: '里', 
    pinyin: 'lǐ', 
    split: splitPinyin('lǐ'),
    english: "inside",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '里面', english: "inside" },
      { text: '公里', english: "kilometer" }
    ],
    meaning: '书在书包里',
    meaningEn: "The book is in the bag"
  },
  {
    char: '看', 
    pinyin: 'kàn', 
    split: splitPinyin('kàn'),
    english: "look",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50 M50,70 L30,85 M50,70 L70,85',
    phrases: [
      { text: '看见', english: "see" },
      { text: '看书', english: "read a book" }
    ],
    meaning: '请看黑板',
    meaningEn: "Please look at the blackboard"
  },
  {
    char: '见', 
    pinyin: 'jiàn', 
    split: splitPinyin('jiàn'),
    english: "see",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50 M50,70 L30,85 M50,70 L70,85',
    phrases: [
      { text: '见面', english: "meet" },
      { text: '看见', english: "see" }
    ],
    meaning: '明天见',
    meaningEn: "See you tomorrow"
  },
  {
    char: '闪', 
    pinyin: 'shǎn', 
    split: splitPinyin('shǎn'),
    english: "flash",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '闪电', english: "lightning" },
      { text: '闪光', english: "flash" }
    ],
    meaning: '天空闪过一道闪电',
    meaningEn: "A bolt of lightning flashed in the sky"
  },
  {
    char: '星', 
    pinyin: 'xīng', 
    split: splitPinyin('xīng'),
    english: "star",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '星星', english: "star" },
      { text: '星座', english: "constellation" }
    ],
    meaning: '夜空中有很多星星',
    meaningEn: "There are many stars in the night sky"
  },
  {
    char: '江', 
    pinyin: 'jiāng', 
    split: splitPinyin('jiāng'),
    english: "river",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '长江', english: "Yangtze River" },
      { text: '江河', english: "rivers" }
    ],
    meaning: '长江是中国最长的河流',
    meaningEn: "The Yangtze River is the longest river in China"
  },
  {
    char: '南', 
    pinyin: 'nán', 
    split: splitPinyin('nán'),
    english: "south",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '南方', english: "south" },
      { text: '指南针', english: "compass" }
    ],
    meaning: '海南岛在中国的南方',
    meaningEn: "Hainan Island is in the south of China"
  },
  {
    char: '可', 
    pinyin: 'kě', 
    split: splitPinyin('kě'),
    english: "can",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '可以', english: "can" },
      { text: '可爱', english: "cute" }
    ],
    meaning: '我可以进来吗？',
    meaningEn: "Can I come in?"
  },
  {
    char: '采', 
    pinyin: 'cǎi', 
    split: splitPinyin('cǎi'),
    english: "pick",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '采摘', english: "pick" },
      { text: '采花', english: "pick flowers" }
    ],
    meaning: '我们去采草莓',
    meaningEn: "Let's go pick strawberries"
  },
  {
    char: '莲', 
    pinyin: 'lián', 
    split: splitPinyin('lián'),
    english: "lotus",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '莲花', english: "lotus flower" },
      { text: '莲子', english: "lotus seed" }
    ],
    meaning: '池塘里有美丽的莲花',
    meaningEn: "There are beautiful lotus flowers in the pond"
  },
  {
    char: '鱼', 
    pinyin: 'yú', 
    split: splitPinyin('yú'),
    english: "fish",
    strokePath: 'M40,40 L60,40 L70,60 L60,80 L40,80 L30,60 Z M45,55 L55,55',
    phrases: [
      { text: '金鱼', english: "goldfish" },
      { text: '钓鱼', english: "fishing" }
    ],
    meaning: '河里有很多鱼',
    meaningEn: "There are many fish in the river"
  },
  {
    char: '东', 
    pinyin: 'dōng', 
    split: splitPinyin('dōng'),
    english: "east",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '东方', english: "east" },
      { text: '东西', english: "thing" }
    ],
    meaning: '太阳从东方升起',
    meaningEn: "The sun rises in the east"
  },
  {
    char: '西', 
    pinyin: 'xī', 
    split: splitPinyin('xī'),
    english: "west",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '西方', english: "west" },
      { text: '西瓜', english: "watermelon" }
    ],
    meaning: '太阳在西边落下',
    meaningEn: "The sun sets in the west"
  },
  {
    char: '北', 
    pinyin: 'běi', 
    split: splitPinyin('běi'),
    english: "north",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '北方', english: "north" },
      { text: '北京', english: "Beijing" }
    ],
    meaning: '北京在中国的北方',
    meaningEn: "Beijing is in the north of China"
  },
  {
    char: '尖', 
    pinyin: 'jiān', 
    split: splitPinyin('jiān'),
    english: "sharp",
    strokePath: 'M50,20 L30,70 M50,20 L70,70 M40,50 L60,50',
    phrases: [
      { text: '尖锐', english: "sharp" },
      { text: '顶尖', english: "top" }
    ],
    meaning: '这把刀很尖',
    meaningEn: "This knife is very sharp"
  },
  {
    char: '说', 
    pinyin: 'shuō', 
    split: splitPinyin('shuō'),
    english: "speak",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '说话', english: "speak" },
      { text: '说明', english: "explain" }
    ],
    meaning: '请大声说话',
    meaningEn: "Please speak loudly"
  },
  {
    char: '春', 
    pinyin: 'chūn', 
    split: splitPinyin('chūn'),
    english: "spring",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '春天', english: "spring" },
      { text: '春节', english: "Spring Festival" }
    ],
    meaning: '春天天气变暖',
    meaningEn: "The weather gets warmer in spring"
  },
  {
    char: '青', 
    pinyin: 'qīng', 
    split: splitPinyin('qīng'),
    english: "green/blue",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '青年', english: "youth" },
      { text: '青草', english: "green grass" }
    ],
    meaning: '山上的青草很绿',
    meaningEn: "The green grass on the mountain is very green"
  },
  {
    char: '蛙', 
    pinyin: 'wā', 
    split: splitPinyin('wā'),
    english: "frog",
    strokePath: 'M40,40 L60,40 L70,60 L60,80 L40,80 L30,60 Z M45,55 L55,55',
    phrases: [
      { text: '青蛙', english: "frog" },
      { text: '蛙泳', english: "breaststroke" }
    ],
    meaning: '池塘里有青蛙',
    meaningEn: "There are frogs in the pond"
  },
  {
    char: '夏', 
    pinyin: 'xià', 
    split: splitPinyin('xià'),
    english: "summer",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '夏天', english: "summer" },
      { text: '夏季', english: "summer season" }
    ],
    meaning: '夏天很热',
    meaningEn: "Summer is very hot"
  },
  {
    char: '弯', 
    pinyin: 'wān', 
    split: splitPinyin('wān'),
    english: "bend",
    strokePath: 'M30,50 L50,30 L70,50',
    phrases: [
      { text: '弯曲', english: "bend" },
      { text: '转弯', english: "turn" }
    ],
    meaning: '这条路是弯的',
    meaningEn: "This road is curved"
  },
  {
    char: '皮', 
    pinyin: 'pí', 
    split: splitPinyin('pí'),
    english: "skin",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '皮肤', english: "skin" },
      { text: '果皮', english: "fruit peel" }
    ],
    meaning: '香蕉皮是黄色的',
    meaningEn: "Banana peel is yellow"
  },
  {
    char: '就', 
    pinyin: 'jiù', 
    split: splitPinyin('jiù'),
    english: "just",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '就是', english: "exactly" },
      { text: '就要', english: "about to" }
    ],
    meaning: '我就要完成了',
    meaningEn: "I'm about to finish"
  },
  {
    char: '冬', 
    pinyin: 'dōng', 
    split: splitPinyin('dōng'),
    english: "winter",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '冬天', english: "winter" },
      { text: '冬季', english: "winter season" }
    ],
    meaning: '冬天会下雪',
    meaningEn: "It snows in winter"
  },
  {
    char: '男', 
    pinyin: 'nán', 
    split: splitPinyin('nán'),
    english: "male",
    strokePath: 'M30,20 L70,20 M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '男人', english: "man" },
      { text: '男孩', english: "boy" }
    ],
    meaning: '他是一个男孩',
    meaningEn: "He is a boy"
  },
  {
    char: '女', 
    pinyin: 'nǚ', 
    split: splitPinyin('nǚ'),
    english: "female",
    strokePath: 'M30,20 L70,20 M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '女人', english: "woman" },
      { text: '女孩', english: "girl" }
    ],
    meaning: '她是一个女孩',
    meaningEn: "She is a girl"
  },
  {
    char: '开', 
    pinyin: 'kāi', 
    split: splitPinyin('kāi'),
    english: "open",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '开门', english: "open the door" },
      { text: '开始', english: "begin" }
    ],
    meaning: '请开门',
    meaningEn: "Please open the door"
  },
  {
    char: '关', 
    pinyin: 'guān', 
    split: splitPinyin('guān'),
    english: "close",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '关门', english: "close the door" },
      { text: '关系', english: "relationship" }
    ],
    meaning: '请关灯',
    meaningEn: "Please turn off the light"
  },
  {
    char: '正', 
    pinyin: 'zhèng', 
    split: splitPinyin('zhèng'),
    english: "correct",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '正确', english: "correct" },
      { text: '正常', english: "normal" }
    ],
    meaning: '这个答案是正确的',
    meaningEn: "This answer is correct"
  },
    {
    char: '反', 
    pinyin: 'fǎn', 
    split: splitPinyin('fǎn'),
    english: "opposite",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '相反', english: "opposite" },
      { text: '反对', english: "oppose" }
    ],
    meaning: '这两个方向是相反的',
    meaningEn: "These two directions are opposite"
  },
  {
    char: '远', 
    pinyin: 'yuǎn', 
    split: splitPinyin('yuǎn'),
    english: "far",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '远方', english: "distance" },
      { text: '遥远', english: "distant" }
    ],
    meaning: '学校离家很远',
    meaningEn: "The school is far from home"
  },
  {
    char: '有', 
    pinyin: 'yǒu', 
    split: splitPinyin('yǒu'),
    english: "have",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '没有', english: "do not have" },
      { text: '所有', english: "all" }
    ],
    meaning: '我有一个新书包',
    meaningEn: "I have a new schoolbag"
  },
  {
    char: '色', 
    pinyin: 'sè', 
    split: splitPinyin('sè'),
    english: "color",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '颜色', english: "color" },
      { text: '红色', english: "red" }
    ],
    meaning: '彩虹有很多颜色',
    meaningEn: "Rainbows have many colors"
  },
  {
    char: '近', 
    pinyin: 'jìn', 
    split: splitPinyin('jìn'),
    english: "near",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '附近', english: "nearby" },
      { text: '最近', english: "recently" }
    ],
    meaning: '超市离我家很近',
    meaningEn: "The supermarket is near my home"
  },
  {
    char: '听', 
    pinyin: 'tīng', 
    split: splitPinyin('tīng'),
    english: "listen",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '听见', english: "hear" },
      { text: '听音乐', english: "listen to music" }
    ],
    meaning: '请听老师讲课',
    meaningEn: "Please listen to the teacher"
  },
  {
    char: '无', 
    pinyin: 'wú', 
    split: splitPinyin('wú'),
    english: "without",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '无法', english: "unable" },
      { text: '无限', english: "unlimited" }
    ],
    meaning: '房间里空无一人',
    meaningEn: "There is no one in the room"
  },
  {
    char: '声', 
    pinyin: 'shēng', 
    split: splitPinyin('shēng'),
    english: "sound",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '声音', english: "sound" },
      { text: '笑声', english: "laughter" }
    ],
    meaning: '我听到奇怪的声音',
    meaningEn: "I heard a strange sound"
  },
  {
    char: '去', 
    pinyin: 'qù', 
    split: splitPinyin('qù'),
    english: "go",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '过去', english: "past" },
      { text: '去年', english: "last year" }
    ],
    meaning: '我要去学校',
    meaningEn: "I'm going to school"
  },
  {
    char: '还', 
    pinyin: 'hái', 
    split: splitPinyin('hái'),
    english: "still/yet",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '还有', english: "still have" },
      { text: '还是', english: "still" }
    ],
    meaning: '我还有作业要做',
    meaningEn: "I still have homework to do"
  },
  {
    char: '来', 
    pinyin: 'lái', 
    split: splitPinyin('lái'),
    english: "come",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '过来', english: "come over" },
      { text: '未来', english: "future" }
    ],
    meaning: '请来我这里',
    meaningEn: "Please come to me"
  },
  {
    char: '多', 
    pinyin: 'duō', 
    split: splitPinyin('duō'),
    english: "many",
    strokePath: 'M30,50 L70,50 M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '多少', english: "how many" },
      { text: '很多', english: "many" }
    ],
    meaning: '公园里有很多人',
    meaningEn: "There are many people in the park"
  },
  {
    char: '少', 
    pinyin: 'shǎo', 
    split: splitPinyin('shǎo'),
    english: "few",
    strokePath: 'M30,50 L70,50 M40,40 L60,40',
    phrases: [
      { text: '多少', english: "how many" },
      { text: '很少', english: "very few" }
    ],
    meaning: '我的钱很少',
    meaningEn: "I have very little money"
  },
  {
    char: '黄', 
    pinyin: 'huáng', 
    split: splitPinyin('huáng'),
    english: "yellow",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '黄色', english: "yellow" },
      { text: '黄瓜', english: "cucumber" }
    ],
    meaning: '香蕉是黄色的',
    meaningEn: "Bananas are yellow"
  },
  {
    char: '牛', 
    pinyin: 'niú', 
    split: splitPinyin('niú'),
    english: "cow",
    strokePath: 'M30,40 L70,40 M50,40 L50,80 M30,60 L70,60',
    phrases: [
      { text: '牛奶', english: "milk" },
      { text: '牛肉', english: "beef" }
    ],
    meaning: '农场里有奶牛',
    meaningEn: "There are cows on the farm"
  },
  {
    char: '只', 
    pinyin: 'zhī', 
    split: splitPinyin('zhī'),
    english: "only",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M50,50 L50,80',
    phrases: [
      { text: '只有', english: "only have" },
      { text: '一只', english: "one (for animals)" }
    ],
    meaning: '我只有一支笔',
    meaningEn: "I only have one pen"
  },
  {
    char: '猫', 
    pinyin: 'māo', 
    split: splitPinyin('māo'),
    english: "cat",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55',
    phrases: [
      { text: '小猫', english: "kitten" },
      { text: '熊猫', english: "panda" }
    ],
    meaning: '我家有一只猫',
    meaningEn: "My family has a cat"
  },
  {
    char: '边', 
    pinyin: 'biān', 
    split: splitPinyin('biān'),
    english: "side",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '旁边', english: "beside" },
      { text: '左边', english: "left side" }
    ],
    meaning: '书在桌子左边',
    meaningEn: "The book is on the left side of the table"
  },
  {
    char: '鸭', 
    pinyin: 'yā', 
    split: splitPinyin('yā'),
    english: "duck",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55',
    phrases: [
      { text: '鸭子', english: "duck" },
      { text: '烤鸭', english: "roast duck" }
    ],
    meaning: '池塘里有鸭子',
    meaningEn: "There are ducks in the pond"
  },
  {
    char: '苹', 
    pinyin: 'píng', 
    split: splitPinyin('píng'),
    english: "apple (part)",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '苹果', english: "apple" }
    ],
    meaning: '苹果很甜',
    meaningEn: "Apples are sweet"
  },
  {
    char: '果', 
    pinyin: 'guǒ', 
    split: splitPinyin('guǒ'),
    english: "fruit",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '水果', english: "fruit" },
      { text: '苹果', english: "apple" }
    ],
    meaning: '多吃水果有益健康',
    meaningEn: "Eating more fruit is good for health"
  },
  {
    char: '杏', 
    pinyin: 'xìng', 
    split: splitPinyin('xìng'),
    english: "apricot",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '杏仁', english: "almond" },
      { text: '杏树', english: "apricot tree" }
    ],
    meaning: '杏子成熟了',
    meaningEn: "The apricots are ripe"
  },
  {
    char: '桃', 
    pinyin: 'táo', 
    split: splitPinyin('táo'),
    english: "peach",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '桃子', english: "peach" },
      { text: '樱桃', english: "cherry" }
    ],
    meaning: '桃子很甜',
    meaningEn: "Peaches are sweet"
  },
  {
    char: '书', 
    pinyin: 'shū', 
    split: splitPinyin('shū'),
    english: "book",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '书本', english: "book" },
      { text: '书包', english: "schoolbag" }
    ],
    meaning: '我正在看书',
    meaningEn: "I am reading a book"
  },
  {
    char: '包', 
    pinyin: 'bāo', 
    split: splitPinyin('bāo'),
    english: "bag",
    strokePath: 'M30,40 L70,40 L70,70 L30,70 Z M40,50 L60,50',
    phrases: [
      { text: '书包', english: "schoolbag" },
      { text: '面包', english: "bread" }
    ],
    meaning: '我的书包很重',
    meaningEn: "My schoolbag is heavy"
  },
  {
    char: '尺', 
    pinyin: 'chǐ', 
    split: splitPinyin('chǐ'),
    english: "ruler",
    strokePath: 'M30,30 L70,30 M50,30 L50,70',
    phrases: [
      { text: '尺子', english: "ruler" },
      { text: '尺寸', english: "size" }
    ],
    meaning: '请借我一把尺子',
    meaningEn: "Please lend me a ruler"
  },
  {
    char: '作', 
    pinyin: 'zuò', 
    split: splitPinyin('zuò'),
    english: "do",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '作业', english: "homework" },
      { text: '工作', english: "work" }
    ],
    meaning: '我正在做作业',
    meaningEn: "I am doing homework"
  },
  {
    char: '业', 
    pinyin: 'yè', 
    split: splitPinyin('yè'),
    english: "business",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '作业', english: "homework" },
      { text: '工业', english: "industry" }
    ],
    meaning: '今晚有很多作业',
    meaningEn: "There is a lot of homework tonight"
  },
  {
    char: '本', 
    pinyin: 'běn', 
    split: splitPinyin('běn'),
    english: "book",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,70 L70,70',
    phrases: [
      { text: '书本', english: "book" },
      { text: '笔记本', english: "notebook" }
    ],
    meaning: '这是我的作业本',
    meaningEn: "This is my homework notebook"
  },
  {
    char: '笔', 
    pinyin: 'bǐ', 
    split: splitPinyin('bǐ'),
    english: "pen",
    strokePath: 'M50,20 L50,60 M40,60 L60,60 M45,70 L55,70',
    phrases: [
      { text: '铅笔', english: "pencil" },
      { text: '毛笔', english: "writing brush" }
    ],
    meaning: '请给我一支笔',
    meaningEn: "Please give me a pen"
  },
  {
    char: '刀', 
    pinyin: 'dāo', 
    split: splitPinyin('dāo'),
    english: "knife",
    strokePath: 'M30,50 L70,50 M50,30 L50,70',
    phrases: [
      { text: '小刀', english: "pocket knife" },
      { text: '刀片', english: "blade" }
    ],
    meaning: '小心这把刀很锋利',
    meaningEn: "Be careful, this knife is sharp"
  },
  {
    char: '课', 
    pinyin: 'kè', 
    split: splitPinyin('kè'),
    english: "lesson",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '课本', english: "textbook" },
      { text: '上课', english: "attend class" }
    ],
    meaning: '下一节是数学课',
    meaningEn: "The next class is math"
  },
  {
    char: '早', 
    pinyin: 'zǎo', 
    split: splitPinyin('zǎo'),
    english: "early",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '早上', english: "morning" },
      { text: '早安', english: "good morning" }
    ],
    meaning: '我每天早上六点起床',
    meaningEn: "I get up at six every morning"
  },
  {
    char: '校', 
    pinyin: 'xiào', 
    split: splitPinyin('xiào'),
    english: "school",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '学校', english: "school" },
      { text: '校园', english: "campus" }
    ],
    meaning: '我在学校学习',
    meaningEn: "I study at school"
  },
  {
    char: '明', 
    pinyin: 'míng', 
    split: splitPinyin('míng'),
    english: "bright",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '明天', english: "tomorrow" },
      { text: '明白', english: "understand" }
    ],
    meaning: '明天是星期一',
    meaningEn: "Tomorrow is Monday"
  },
  {
    char: '力', 
    pinyin: 'lì', 
    split: splitPinyin('lì'),
    english: "power",
    strokePath: 'M50,20 L30,70 M50,20 L70,70',
    phrases: [
      { text: '力量', english: "strength" },
      { text: '努力', english: "work hard" }
    ],
    meaning: '我用尽全力',
    meaningEn: "I used all my strength"
  },
  {
    char: '尘', 
    pinyin: 'chén', 
    split: splitPinyin('chén'),
    english: "dust",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '灰尘', english: "dust" },
      { text: '尘土', english: "dust" }
    ],
    meaning: '桌子上有灰尘',
    meaningEn: "There is dust on the table"
  },
  {
    char: '从', 
    pinyin: 'cóng', 
    split: splitPinyin('cóng'),
    english: "from",
    strokePath: 'M30,30 L50,50 M50,50 L70,30 M50,50 L50,80',
    phrases: [
      { text: '从前', english: "once upon a time" },
      { text: '从来', english: "always" }
    ],
    meaning: '我从学校回家',
    meaningEn: "I go home from school"
  },
  {
    char: '众', 
    pinyin: 'zhòng', 
    split: splitPinyin('zhòng'),
    english: "crowd",
    strokePath: 'M40,30 L60,30 M50,30 L50,70 M30,50 L70,50',
    phrases: [
      { text: '观众', english: "audience" },
      { text: '众多', english: "numerous" }
    ],
    meaning: '广场上人群众多',
    meaningEn: "There is a large crowd in the square"
  },
  {
    char: '双', 
    pinyin: 'shuāng', 
    split: splitPinyin('shuāng'),
    english: "pair",
    strokePath: 'M30,30 L70,30 M40,40 L40,70 M60,40 L60,70 M50,50 L50,80',
    phrases: [
      { text: '双手', english: "both hands" },
      { text: '双胞胎', english: "twins" }
    ],
    meaning: '我有一双新鞋',
    meaningEn: "I have a pair of new shoes"
  },
    {
    char: '木', 
    pinyin: 'mù', 
    split: splitPinyin('mù'),
    english: "tree/wood",
    strokePath: 'M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '木头', english: "wood" },
      { text: '树木', english: "trees" }
    ],
    meaning: '这张桌子是木头做的',
    meaningEn: "This table is made of wood"
  },
  {
    char: '林', 
    pinyin: 'lín', 
    split: splitPinyin('lín'),
    english: "forest",
    strokePath: 'M40,20 L40,80 M30,50 L50,50 M60,20 L60,80 M50,50 L70,50',
    phrases: [
      { text: '森林', english: "forest" },
      { text: '树林', english: "grove" }
    ],
    meaning: '我们去森林里散步',
    meaningEn: "We walked in the forest"
  },
  {
    char: '森', 
    pinyin: 'sēn', 
    split: splitPinyin('sēn'),
    english: "dense forest",
    strokePath: 'M35,20 L35,80 M25,50 L45,50 M55,20 L55,80 M45,50 L65,50 M65,20 L65,80 M55,50 L75,50',
    phrases: [
      { text: '森林', english: "forest" },
      { text: '森严', english: "strict" }
    ],
    meaning: '森林里有很多动物',
    meaningEn: "There are many animals in the forest"
  },
  {
    char: '条', 
    pinyin: 'tiáo', 
    split: splitPinyin('tiáo'),
    english: "strip",
    strokePath: 'M50,20 L50,80 M30,40 L70,40',
    phrases: [
      { text: '条件', english: "condition" },
      { text: '面条', english: "noodles" }
    ],
    meaning: '我需要一条绳子',
    meaningEn: "I need a piece of rope"
  },
  {
    char: '心', 
    pinyin: 'xīn', 
    split: splitPinyin('xīn'),
    english: "heart",
    strokePath: 'M50,30 Q30,40 50,70 Q70,40 50,30',
    phrases: [
      { text: '心情', english: "mood" },
      { text: '爱心', english: "love" }
    ],
    meaning: '我心里很高兴',
    meaningEn: "I am very happy in my heart"
  },
  {
    char: '升', 
    pinyin: 'shēng', 
    split: splitPinyin('shēng'),
    english: "rise",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '上升', english: "ascend" },
      { text: '升旗', english: "raise a flag" }
    ],
    meaning: '太阳从东方升起',
    meaningEn: "The sun rises in the east"
  },
  {
    char: '国', 
    pinyin: 'guó', 
    split: splitPinyin('guó'),
    english: "country",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '国家', english: "country" },
      { text: '中国', english: "China" }
    ],
    meaning: '我爱我的国家',
    meaningEn: "I love my country"
  },
  {
    char: '旗', 
    pinyin: 'qí', 
    split: splitPinyin('qí'),
    english: "flag",
    strokePath: 'M50,20 L50,80 M40,30 L60,30 M30,50 L70,50 M35,70 L65,70',
    phrases: [
      { text: '国旗', english: "national flag" },
      { text: '旗帜', english: "banner" }
    ],
    meaning: '我们每天升国旗',
    meaningEn: "We raise the national flag every day"
  },
  {
    char: '中', 
    pinyin: 'zhōng', 
    split: splitPinyin('zhōng'),
    english: "middle",
    strokePath: 'M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '中间', english: "middle" },
      { text: '中国', english: "China" }
    ],
    meaning: '中国是我的祖国',
    meaningEn: "China is my motherland"
  },
  {
    char: '红', 
    pinyin: 'hóng', 
    split: splitPinyin('hóng'),
    english: "red",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '红色', english: "red color" },
      { text: '红旗', english: "red flag" }
    ],
    meaning: '苹果是红色的',
    meaningEn: "Apples are red"
  },
  {
    char: '歌', 
    pinyin: 'gē', 
    split: splitPinyin('gē'),
    english: "song",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '唱歌', english: "sing" },
      { text: '歌曲', english: "song" }
    ],
    meaning: '我喜欢唱歌',
    meaningEn: "I like to sing"
  },
  {
    char: '起', 
    pinyin: 'qǐ', 
    split: splitPinyin('qǐ'),
    english: "rise",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '起来', english: "get up" },
      { text: '起床', english: "get out of bed" }
    ],
    meaning: '我每天早上六点起床',
    meaningEn: "I get up at six every morning"
  },
  {
    char: '么', 
    pinyin: 'me', 
    split: splitPinyin('me'),
    english: "(question particle)",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '什么', english: "what" },
      { text: '怎么', english: "how" }
    ],
    meaning: '你在做什么？',
    meaningEn: "What are you doing?"
  },
  {
    char: '美', 
    pinyin: 'měi', 
    split: splitPinyin('měi'),
    english: "beautiful",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '美丽', english: "beautiful" },
      { text: '美术', english: "fine arts" }
    ],
    meaning: '这里的风景很美',
    meaningEn: "The scenery here is beautiful"
  },
  {
    char: '丽', 
    pinyin: 'lì', 
    split: splitPinyin('lì'),
    english: "beautiful",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '美丽', english: "beautiful" },
      { text: '华丽', english: "magnificent" }
    ],
    meaning: '她穿着美丽的裙子',
    meaningEn: "She is wearing a beautiful dress"
  },
  {
    char: '立', 
    pinyin: 'lì', 
    split: splitPinyin('lì'),
    english: "stand",
    strokePath: 'M50,20 L50,80 M40,30 L60,30',
    phrases: [
      { text: '站立', english: "stand" },
      { text: '立即', english: "immediately" }
    ],
    meaning: '请立正站好',
    meaningEn: "Please stand at attention"
  },
  {
    char: '午', 
    pinyin: 'wǔ', 
    split: splitPinyin('wǔ'),
    english: "noon",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '中午', english: "noon" },
      { text: '下午', english: "afternoon" }
    ],
    meaning: '我们中午十二点吃饭',
    meaningEn: "We eat at twelve noon"
  },
  {
    char: '晚', 
    pinyin: 'wǎn', 
    split: splitPinyin('wǎn'),
    english: "evening",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '晚上', english: "evening" },
      { text: '晚饭', english: "dinner" }
    ],
    meaning: '我们晚上七点吃饭',
    meaningEn: "We eat dinner at seven in the evening"
  },
  {
    char: '昨', 
    pinyin: 'zuó', 
    split: splitPinyin('zuó'),
    english: "yesterday",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '昨天', english: "yesterday" },
      { text: '昨晚', english: "last night" }
    ],
    meaning: '昨天下雨了',
    meaningEn: "It rained yesterday"
  },
  {
    char: '今', 
    pinyin: 'jīn', 
    split: splitPinyin('jīn'),
    english: "today",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '今天', english: "today" },
      { text: '今年', english: "this year" }
    ],
    meaning: '今天是晴天',
    meaningEn: "Today is sunny"
  },
  {
    char: '年', 
    pinyin: 'nián', 
    split: splitPinyin('nián'),
    english: "year",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,70 L70,70',
    phrases: [
      { text: '新年', english: "New Year" },
      { text: '年龄', english: "age" }
    ],
    meaning: '新年快乐！',
    meaningEn: "Happy New Year!"
  },
  {
    char: '影', 
    pinyin: 'yǐng', 
    split: splitPinyin('yǐng'),
    english: "shadow",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '影子', english: "shadow" },
      { text: '电影', english: "movie" }
    ],
    meaning: '树在阳光下有影子',
    meaningEn: "Trees cast shadows in the sunlight"
  },
  {
    char: '前', 
    pinyin: 'qián', 
    split: splitPinyin('qián'),
    english: "front",
    strokePath: 'M50,30 L30,50 M50,30 L70,50 M40,60 L60,60',
    phrases: [
      { text: '前面', english: "front" },
      { text: '以前', english: "before" }
    ],
    meaning: '教室前面有黑板',
    meaningEn: "There is a blackboard in front of the classroom"
  },
  {
    char: '后', 
    pinyin: 'hòu', 
    split: splitPinyin('hòu'),
    english: "back",
    strokePath: 'M50,30 L30,50 M50,30 L70,50 M40,60 L60,60',
    phrases: [
      { text: '后面', english: "back" },
      { text: '以后', english: "after" }
    ],
    meaning: '教室后面有书架',
    meaningEn: "There are bookshelves at the back of the classroom"
  },
  {
    char: '黑', 
    pinyin: 'hēi', 
    split: splitPinyin('hēi'),
    english: "black",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '黑色', english: "black" },
      { text: '黑暗', english: "dark" }
    ],
    meaning: '我的头发是黑色的',
    meaningEn: "My hair is black"
  },
  {
    char: '狗', 
    pinyin: 'gǒu', 
    split: splitPinyin('gǒu'),
    english: "dog",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55',
    phrases: [
      { text: '小狗', english: "puppy" },
      { text: '黑狗', english: "black dog" }
    ],
    meaning: '我家有一只狗',
    meaningEn: "My family has a dog"
  },
  {
    char: '左', 
    pinyin: 'zuǒ', 
    split: splitPinyin('zuǒ'),
    english: "left",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '左边', english: "left side" },
      { text: '左手', english: "left hand" }
    ],
    meaning: '书在桌子左边',
    meaningEn: "The book is on the left side of the table"
  },
  {
    char: '右', 
    pinyin: 'yòu', 
    split: splitPinyin('yòu'),
    english: "right",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '右边', english: "right side" },
      { text: '右手', english: "right hand" }
    ],
    meaning: '笔在笔记本右边',
    meaningEn: "The pen is on the right side of the notebook"
  },
  {
    char: '它', 
    pinyin: 'tā', 
    split: splitPinyin('tā'),
    english: "it",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '它们', english: "they" },
      { text: '其它', english: "other" }
    ],
    meaning: '它是一只猫',
    meaningEn: "It is a cat"
  },
  {
    char: '好', 
    pinyin: 'hǎo', 
    split: splitPinyin('hǎo'),
    english: "good",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '好吃', english: "delicious" },
      { text: '好朋友', english: "good friend" }
    ],
    meaning: '这本书很好看',
    meaningEn: "This book is very good"
  },
  {
    char: '朋', 
    pinyin: 'péng', 
    split: splitPinyin('péng'),
    english: "friend",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '朋友', english: "friend" },
      { text: '小朋友', english: "child" }
    ],
    meaning: '他是我的好朋友',
    meaningEn: "He is my good friend"
  },
  {
    char: '友', 
    pinyin: 'yǒu', 
    split: splitPinyin('yǒu'),
    english: "friend",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '朋友', english: "friend" },
      { text: '友好', english: "friendly" }
    ],
    meaning: '我们是非常要好的朋友',
    meaningEn: "We are very good friends"
  },
  {
    char: '比', 
    pinyin: 'bǐ', 
    split: splitPinyin('bǐ'),
    english: "compare",
    strokePath: 'M30,30 L70,70 M70,30 L30,70',
    phrases: [
      { text: '比较', english: "compare" },
      { text: '比赛', english: "competition" }
    ],
    meaning: '我比你高',
    meaningEn: "I am taller than you"
  },
  {
    char: '尾', 
    pinyin: 'wěi', 
    split: splitPinyin('wěi'),
    english: "tail",
    strokePath: 'M30,40 L50,30 L70,40 M50,30 L50,80',
    phrases: [
      { text: '尾巴', english: "tail" },
      { text: '结尾', english: "ending" }
    ],
    meaning: '狗的尾巴在摇',
    meaningEn: "The dog is wagging its tail"
  },
  {
    char: '巴', 
    pinyin: 'ba', 
    split: splitPinyin('ba'),
    english: "(suffix)",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '尾巴', english: "tail" },
      { text: '嘴巴', english: "mouth" }
    ],
    meaning: '兔子有短尾巴',
    meaningEn: "Rabbits have short tails"
  },
  {
    char: '谁', 
    pinyin: 'shuí', 
    split: splitPinyin('shuí'),
    english: "who",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '是谁', english: "who is it" },
      { text: '谁的', english: "whose" }
    ],
    meaning: '谁在敲门？',
    meaningEn: "Who is knocking at the door?"
  },
  {
    char: '长', 
    pinyin: 'cháng', 
    split: splitPinyin('cháng'),
    english: "long",
    strokePath: 'M30,30 L70,30 M50,30 L50,80',
    phrases: [
      { text: '长江', english: "Yangtze River" },
      { text: '长短', english: "length" }
    ],
    meaning: '这条河很长',
    meaningEn: "This river is very long"
  },
  {
    char: '短', 
    pinyin: 'duǎn', 
    split: splitPinyin('duǎn'),
    english: "short",
    strokePath: 'M30,50 L70,50 M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '长短', english: "length" },
      { text: '短裤', english: "shorts" }
    ],
    meaning: '兔子的尾巴很短',
    meaningEn: "Rabbits have short tails"
  },
  {
    char: '把', 
    pinyin: 'bǎ', 
    split: splitPinyin('bǎ'),
    english: "grasp",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '把手', english: "handle" },
      { text: '一把', english: "a handful" }
    ],
    meaning: '请把门关上',
    meaningEn: "Please close the door"
  },
  {
    char: '伞', 
    pinyin: 'sǎn', 
    split: splitPinyin('sǎn'),
    english: "umbrella",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '雨伞', english: "umbrella" },
      { text: '太阳伞', english: "parasol" }
    ],
    meaning: '下雨时请带伞',
    meaningEn: "Please take an umbrella when it rains"
  },
   {
    char: '兔', 
    pinyin: 'tù', 
    split: splitPinyin('tù'),
    english: "rabbit",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55 M50,70 L50,80',
    phrases: [
      { text: '兔子', english: "rabbit" },
      { text: '玉兔', english: "jade rabbit" }
    ],
    meaning: '小白兔在草地上跳',
    meaningEn: "The little white rabbit is jumping on the grass"
  },
  {
    char: '最', 
    pinyin: 'zuì', 
    split: splitPinyin('zuì'),
    english: "most",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '最好', english: "best" },
      { text: '最后', english: "last" }
    ],
    meaning: '这本书最好看',
    meaningEn: "This book is the most interesting"
  },
  {
    char: '公', 
    pinyin: 'gōng', 
    split: splitPinyin('gōng'),
    english: "public",
    strokePath: 'M50,20 L50,80 M40,30 L60,30 M30,50 L70,50',
    phrases: [
      { text: '公园', english: "park" },
      { text: '公共', english: "public" }
    ],
    meaning: '我们去公园玩',
    meaningEn: "Let's go play in the park"
  },
  {
    char: '写', 
    pinyin: 'xiě', 
    split: splitPinyin('xiě'),
    english: "write",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '写字', english: "write characters" },
      { text: '写作', english: "writing" }
    ],
    meaning: '我正在写作业',
    meaningEn: "I am doing my homework"
  },
  {
    char: '诗', 
    pinyin: 'shī', 
    split: splitPinyin('shī'),
    english: "poem",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '诗歌', english: "poetry" },
      { text: '诗人', english: "poet" }
    ],
    meaning: '李白是伟大的诗人',
    meaningEn: "Li Bai is a great poet"
  },
  {
    char: '点', 
    pinyin: 'diǎn', 
    split: splitPinyin('diǎn'),
    english: "dot",
    strokePath: 'M50,50 Q45,55 50,60 Q55,55 50,50',
    phrases: [
      { text: '一点', english: "a little" },
      { text: '点心', english: "dim sum" }
    ],
    meaning: '请点一下这里',
    meaningEn: "Please click here"
  },
  {
    char: '要', 
    pinyin: 'yào', 
    split: splitPinyin('yào'),
    english: "want",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '需要', english: "need" },
      { text: '重要', english: "important" }
    ],
    meaning: '我要去学校',
    meaningEn: "I want to go to school"
  },
  {
    char: '过', 
    pinyin: 'guò', 
    split: splitPinyin('guò'),
    english: "pass",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '过去', english: "past" },
      { text: '过桥', english: "cross a bridge" }
    ],
    meaning: '我过生日了',
    meaningEn: "My birthday passed"
  },
  {
    char: '给', 
    pinyin: 'gěi', 
    split: splitPinyin('gěi'),
    english: "give",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '给我', english: "give me" },
      { text: '送给', english: "give as gift" }
    ],
    meaning: '请给我一支笔',
    meaningEn: "Please give me a pen"
  },
  {
    char: '当', 
    pinyin: 'dāng', 
    split: splitPinyin('dāng'),
    english: "when",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '当时', english: "at that time" },
      { text: '当然', english: "of course" }
    ],
    meaning: '当我长大后',
    meaningEn: "When I grow up"
  },
  {
    char: '串', 
    pinyin: 'chuàn', 
    split: splitPinyin('chuàn'),
    english: "string",
    strokePath: 'M40,40 L40,60 M50,40 L50,60 M60,40 L60,60',
    phrases: [
      { text: '一串', english: "a string of" },
      { text: '串门', english: "visit neighbors" }
    ],
    meaning: '我有一串钥匙',
    meaningEn: "I have a bunch of keys"
  },
  {
    char: '们', 
    pinyin: 'men', 
    split: splitPinyin('men'),
    english: "(plural marker)",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '我们', english: "we" },
      { text: '你们', english: "you (plural)" }
    ],
    meaning: '我们都是学生',
    meaningEn: "We are all students"
  },
  {
    char: '以', 
    pinyin: 'yǐ', 
    split: splitPinyin('yǐ'),
    english: "with",
    strokePath: 'M50,20 L30,50 M50,20 L70,50',
    phrases: [
      { text: '以后', english: "after" },
      { text: '以前', english: "before" }
    ],
    meaning: '我以后要当老师',
    meaningEn: "I want to be a teacher in the future"
  },
  {
    char: '成', 
    pinyin: 'chéng', 
    split: splitPinyin('chéng'),
    english: "become",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '成功', english: "success" },
      { text: '成为', english: "become" }
    ],
    meaning: '我想成为医生',
    meaningEn: "I want to become a doctor"
  },
  {
    char: '彩', 
    pinyin: 'cǎi', 
    split: splitPinyin('cǎi'),
    english: "color",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '彩虹', english: "rainbow" },
      { text: '彩色', english: "colorful" }
    ],
    meaning: '雨后出现了彩虹',
    meaningEn: "A rainbow appeared after the rain"
  },
  {
    char: '半', 
    pinyin: 'bàn', 
    split: splitPinyin('bàn'),
    english: "half",
    strokePath: 'M50,20 L50,80 M30,50 L70,50',
    phrases: [
      { text: '一半', english: "half" },
      { text: '半天', english: "half a day" }
    ],
    meaning: '苹果被切成两半',
    meaningEn: "The apple was cut in half"
  },
  {
    char: '空', 
    pinyin: 'kōng', 
    split: splitPinyin('kōng'),
    english: "sky/empty",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '天空', english: "sky" },
      { text: '空气', english: "air" }
    ],
    meaning: '天空中有一只鸟',
    meaningEn: "There is a bird in the sky"
  },
  {
    char: '问', 
    pinyin: 'wèn', 
    split: splitPinyin('wèn'),
    english: "ask",
    strokePath: 'M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '问题', english: "question" },
      { text: '问好', english: "say hello" }
    ],
    meaning: '我有问题要问老师',
    meaningEn: "I have a question to ask the teacher"
  },
  {
    char: '到', 
    pinyin: 'dào', 
    split: splitPinyin('dào'),
    english: "arrive",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '到达', english: "arrive" },
      { text: '看到', english: "see" }
    ],
    meaning: '我明天到北京',
    meaningEn: "I will arrive in Beijing tomorrow"
  },
  {
    char: '方', 
    pinyin: 'fāng', 
    split: splitPinyin('fāng'),
    english: "square",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z',
    phrases: [
      { text: '方法', english: "method" },
      { text: '方向', english: "direction" }
    ],
    meaning: '这个盒子是方的',
    meaningEn: "This box is square"
  },
  {
    char: '没', 
    pinyin: 'méi', 
    split: splitPinyin('méi'),
    english: "not have",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '没有', english: "don't have" },
      { text: '没事', english: "it's okay" }
    ],
    meaning: '我没有铅笔',
    meaningEn: "I don't have a pencil"
  },
  {
    char: '更', 
    pinyin: 'gèng', 
    split: splitPinyin('gèng'),
    english: "more",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '更好', english: "better" },
      { text: '更加', english: "even more" }
    ],
    meaning: '我要更加努力',
    meaningEn: "I want to work harder"
  },
  {
    char: '绿', 
    pinyin: 'lǜ', 
    split: splitPinyin('lǜ'),
    english: "green",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '绿色', english: "green" },
      { text: '绿灯', english: "green light" }
    ],
    meaning: '春天树叶变绿',
    meaningEn: "Leaves turn green in spring"
  },
  {
    char: '出', 
    pinyin: 'chū', 
    split: splitPinyin('chū'),
    english: "go out",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '出去', english: "go out" },
      { text: '出现', english: "appear" }
    ],
    meaning: '太阳从东方出来',
    meaningEn: "The sun comes out from the east"
  },
  {
    char: '睡', 
    pinyin: 'shuì', 
    split: splitPinyin('shuì'),
    english: "sleep",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '睡觉', english: "sleep" },
      { text: '午睡', english: "nap" }
    ],
    meaning: '我每天晚上九点睡觉',
    meaningEn: "I go to sleep at 9 PM every night"
  },
  {
    char: '那', 
    pinyin: 'nà', 
    split: splitPinyin('nà'),
    english: "that",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M40,60 L60,60',
    phrases: [
      { text: '那里', english: "there" },
      { text: '那个', english: "that one" }
    ],
    meaning: '那是我的书包',
    meaningEn: "That is my schoolbag"
  },
  {
    char: '海', 
    pinyin: 'hǎi', 
    split: splitPinyin('hǎi'),
    english: "sea",
    strokePath: 'M30,40 L70,40 M40,30 L40,50 L60,50 L60,30 Z M50,50 L50,70',
    phrases: [
      { text: '大海', english: "ocean" },
      { text: '海边', english: "seaside" }
    ],
    meaning: '夏天我们去海边玩',
    meaningEn: "We go to the seaside to play in summer"
  },
  {
    char: '真', 
    pinyin: 'zhēn', 
    split: splitPinyin('zhēn'),
    english: "real",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '真正', english: "real" },
      { text: '认真', english: "serious" }
    ],
    meaning: '这个故事是真的',
    meaningEn: "This story is true"
  },
  {
    char: '老', 
    pinyin: 'lǎo', 
    split: splitPinyin('lǎo'),
    english: "old",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '老师', english: "teacher" },
      { text: '老人', english: "old person" }
    ],
    meaning: '爷爷是一位老人',
    meaningEn: "Grandpa is an old person"
  },
  {
    char: '师', 
    pinyin: 'shī', 
    split: splitPinyin('shī'),
    english: "teacher",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '老师', english: "teacher" },
      { text: '教师', english: "teacher" }
    ],
    meaning: '张老师教我们语文',
    meaningEn: "Teacher Zhang teaches us Chinese"
  },
  {
    char: '吗', 
    pinyin: 'ma', 
    split: splitPinyin('ma'),
    english: "(question particle)",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '好吗', english: "is it good?" },
      { text: '是吗', english: "is that so?" }
    ],
    meaning: '你好吗？',
    meaningEn: "How are you?"
  },
  {
    char: '同', 
    pinyin: 'tóng', 
    split: splitPinyin('tóng'),
    english: "same",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '同学', english: "classmate" },
      { text: '相同', english: "same" }
    ],
    meaning: '我们是同班同学',
    meaningEn: "We are classmates in the same class"
  },
  {
    char: '什', 
    pinyin: 'shén', 
    split: splitPinyin('shén'),
    english: "what",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '什么', english: "what" },
      { text: '为什么', english: "why" }
    ],
    meaning: '这是什么？',
    meaningEn: "What is this?"
  },
  {
    char: '才', 
    pinyin: 'cái', 
    split: splitPinyin('cái'),
    english: "only then",
    strokePath: 'M30,30 L70,30 M50,30 L50,70',
    phrases: [
      { text: '才能', english: "ability" },
      { text: '刚才', english: "just now" }
    ],
    meaning: '我昨天才到北京',
    meaningEn: "I arrived in Beijing only yesterday"
  },
  {
    char: '亮', 
    pinyin: 'liàng', 
    split: splitPinyin('liàng'),
    english: "bright",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '明亮', english: "bright" },
      { text: '月亮', english: "moon" }
    ],
    meaning: '灯光很亮',
    meaningEn: "The light is very bright"
  },
  {
    char: '时', 
    pinyin: 'shí', 
    split: splitPinyin('shí'),
    english: "time",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '时间', english: "time" },
      { text: '时候', english: "time" }
    ],
    meaning: '现在是什么时间？',
    meaningEn: "What time is it now?"
  },
  {
    char: '候', 
    pinyin: 'hòu', 
    split: splitPinyin('hòu'),
    english: "wait",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '时候', english: "time" },
      { text: '等候', english: "wait" }
    ],
    meaning: '你什么时候回家？',
    meaningEn: "When will you go home?"
  },
  {
    char: '觉', 
    pinyin: 'jué', 
    split: splitPinyin('jué'),
    english: "feel",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '觉得', english: "feel" },
      { text: '睡觉', english: "sleep" }
    ],
    meaning: '我觉得很高兴',
    meaningEn: "I feel very happy"
  },
  {
    char: '得', 
    pinyin: 'de', 
    split: splitPinyin('de'),
    english: "(structural particle)",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '觉得', english: "feel" },
      { text: '得到', english: "get" }
    ],
    meaning: '你说得很好',
    meaningEn: "You speak very well"
  },
  {
    char: '自', 
    pinyin: 'zì', 
    split: splitPinyin('zì'),
    english: "self",
    strokePath: 'M50,20 L50,50 M30,50 L70,50 M50,50 L30,80 M50,50 L70,80',
    phrases: [
      { text: '自己', english: "oneself" },
      { text: '自然', english: "nature" }
    ],
    meaning: '我自己做作业',
    meaningEn: "I do my homework by myself"
  },
    {
    char: '己', 
    pinyin: 'jǐ', 
    split: splitPinyin('jǐ'),
    english: "self",
    strokePath: 'M50,20 L50,50 M30,50 L70,50 M50,50 L30,80 M50,50 L70,80',
    phrases: [
      { text: '自己', english: "oneself" },
      { text: '知己', english: "close friend" }
    ],
    meaning: '我自己完成作业',
    meaningEn: "I finish my homework by myself"
  },
  {
    char: '很', 
    pinyin: 'hěn', 
    split: splitPinyin('hěn'),
    english: "very",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '很好', english: "very good" },
      { text: '很多', english: "many" }
    ],
    meaning: '这本书很有趣',
    meaningEn: "This book is very interesting"
  },
  {
    char: '穿', 
    pinyin: 'chuān', 
    split: splitPinyin('chuān'),
    english: "wear",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '穿衣', english: "dress" },
      { text: '穿过', english: "pass through" }
    ],
    meaning: '今天很冷，多穿衣服',
    meaningEn: "It's cold today, wear more clothes"
  },
  {
    char: '衣', 
    pinyin: 'yī', 
    split: splitPinyin('yī'),
    english: "clothes",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '衣服', english: "clothes" },
      { text: '毛衣', english: "sweater" }
    ],
    meaning: '妈妈买了一件新衣服',
    meaningEn: "Mom bought a new dress"
  },
  {
    char: '服', 
    pinyin: 'fú', 
    split: splitPinyin('fú'),
    english: "clothing",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '衣服', english: "clothes" },
      { text: '服务', english: "service" }
    ],
    meaning: '这件衣服很漂亮',
    meaningEn: "This dress is very beautiful"
  },
  {
    char: '快', 
    pinyin: 'kuài', 
    split: splitPinyin('kuài'),
    english: "fast",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60 M40,70 L60,70',
    phrases: [
      { text: '快乐', english: "happy" },
      { text: '快速', english: "fast" }
    ],
    meaning: '我们很快到达了学校',
    meaningEn: "We arrived at school quickly"
  },
  {
    char: '蓝', 
    pinyin: 'lán', 
    split: splitPinyin('lán'),
    english: "blue",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '蓝色', english: "blue" },
      { text: '蓝天', english: "blue sky" }
    ],
    meaning: '大海是蓝色的',
    meaningEn: "The sea is blue"
  },
  {
    char: '又', 
    pinyin: 'yòu', 
    split: splitPinyin('yòu'),
    english: "again",
    strokePath: 'M30,40 L70,60 M70,40 L30,60',
    phrases: [
      { text: '又高又大', english: "tall and big" },
      { text: '又来了', english: "come again" }
    ],
    meaning: '他又迟到了',
    meaningEn: "He is late again"
  },
  {
    char: '笑', 
    pinyin: 'xiào', 
    split: splitPinyin('xiào'),
    english: "laugh",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '笑容', english: "smile" },
      { text: '笑话', english: "joke" }
    ],
    meaning: '听到笑话我们都笑了',
    meaningEn: "We all laughed when we heard the joke"
  },
  {
    char: '着', 
    pinyin: 'zhe', 
    split: splitPinyin('zhe'),
    english: "(aspect particle)",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '看着', english: "watching" },
      { text: '听着', english: "listening" }
    ],
    meaning: '我正看着电视',
    meaningEn: "I am watching TV"
  },
  {
    char: '向', 
    pinyin: 'xiàng', 
    split: splitPinyin('xiàng'),
    english: "toward",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '方向', english: "direction" },
      { text: '向前', english: "forward" }
    ],
    meaning: '向前走一百米',
    meaningEn: "Walk forward 100 meters"
  },
  {
    char: '和', 
    pinyin: 'hé', 
    split: splitPinyin('hé'),
    english: "and",
    strokePath: 'M30,50 L70,50 M50,30 L50,70',
    phrases: [
      { text: '和平', english: "peace" },
      { text: '我和你', english: "you and me" }
    ],
    meaning: '我和他是好朋友',
    meaningEn: "He and I are good friends"
  },
  {
    char: '贝', 
    pinyin: 'bèi', 
    split: splitPinyin('bèi'),
    english: "shell",
    strokePath: 'M50,20 L30,50 L70,50 Z',
    phrases: [
      { text: '贝壳', english: "seashell" },
      { text: '宝贝', english: "baby" }
    ],
    meaning: '海滩上有漂亮的贝壳',
    meaningEn: "There are beautiful seashells on the beach"
  },
  {
    char: '娃', 
    pinyin: 'wá', 
    split: splitPinyin('wá'),
    english: "baby",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55',
    phrases: [
      { text: '娃娃', english: "doll" },
      { text: '洋娃娃', english: "doll" }
    ],
    meaning: '妹妹抱着洋娃娃',
    meaningEn: "Little sister is holding a doll"
  },
  {
    char: '挂', 
    pinyin: 'guà', 
    split: splitPinyin('guà'),
    english: "hang",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '挂起', english: "hang up" },
      { text: '挂钩', english: "hook" }
    ],
    meaning: '把衣服挂在衣架上',
    meaningEn: "Hang the clothes on the hanger"
  },
  {
    char: '活', 
    pinyin: 'huó', 
    split: splitPinyin('huó'),
    english: "live",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '生活', english: "life" },
      { text: '活动', english: "activity" }
    ],
    meaning: '我们生活在中国',
    meaningEn: "We live in China"
  },
  {
    char: '金', 
    pinyin: 'jīn', 
    split: splitPinyin('jīn'),
    english: "gold",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '金色', english: "golden" },
      { text: '金子', english: "gold" }
    ],
    meaning: '太阳发出金色的光',
    meaningEn: "The sun emits golden light"
  },
  {
    char: '哥', 
    pinyin: 'gē', 
    split: splitPinyin('gē'),
    english: "older brother",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '哥哥', english: "older brother" },
      { text: '大哥', english: "eldest brother" }
    ],
    meaning: '我有一个哥哥',
    meaningEn: "I have an older brother"
  },
  {
    char: '姐', 
    pinyin: 'jiě', 
    split: splitPinyin('jiě'),
    english: "older sister",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '姐姐', english: "older sister" },
      { text: '姐妹', english: "sisters" }
    ],
    meaning: '姐姐帮助我学习',
    meaningEn: "My older sister helps me study"
  },
  {
    char: '弟', 
    pinyin: 'dì', 
    split: splitPinyin('dì'),
    english: "younger brother",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M50,50 L50,80',
    phrases: [
      { text: '弟弟', english: "younger brother" },
      { text: '兄弟', english: "brothers" }
    ],
    meaning: '我的弟弟很可爱',
    meaningEn: "My younger brother is very cute"
  },
  {
    char: '叔', 
    pinyin: 'shū', 
    split: splitPinyin('shū'),
    english: "uncle",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '叔叔', english: "uncle" },
      { text: '大叔', english: "uncle" }
    ],
    meaning: '叔叔带我去公园',
    meaningEn: "Uncle took me to the park"
  },
  {
    char: '爷', 
    pinyin: 'yé', 
    split: splitPinyin('yé'),
    english: "grandfather",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '爷爷', english: "grandfather" },
      { text: '大爷', english: "uncle" }
    ],
    meaning: '爷爷给我讲故事',
    meaningEn: "Grandfather tells me stories"
  },
  {
    char: '群', 
    pinyin: 'qún', 
    split: splitPinyin('qún'),
    english: "group",
    strokePath: 'M30,40 L70,40 M40,30 L40,50 L60,50 L60,30 Z M50,50 L50,70',
    phrases: [
      { text: '一群', english: "a group of" },
      { text: '人群', english: "crowd" }
    ],
    meaning: '一群鸟飞过天空',
    meaningEn: "A flock of birds flew across the sky"
  },
  {
    char: '竹', 
    pinyin: 'zhú', 
    split: splitPinyin('zhú'),
    english: "bamboo",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '竹子', english: "bamboo" },
      { text: '竹林', english: "bamboo forest" }
    ],
    meaning: '熊猫喜欢吃竹子',
    meaningEn: "Pandas like to eat bamboo"
  },
  {
    char: '牙', 
    pinyin: 'yá', 
    split: splitPinyin('yá'),
    english: "tooth",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '牙齿', english: "tooth" },
      { text: '刷牙', english: "brush teeth" }
    ],
    meaning: '每天早晚要刷牙',
    meaningEn: "Brush your teeth every morning and evening"
  },
  {
    char: '用', 
    pinyin: 'yòng', 
    split: splitPinyin('yòng'),
    english: "use",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '使用', english: "use" },
      { text: '有用', english: "useful" }
    ],
    meaning: '我用铅笔写字',
    meaningEn: "I use a pencil to write"
  },
  {
    char: '几', 
    pinyin: 'jǐ', 
    split: splitPinyin('jǐ'),
    english: "how many",
    strokePath: 'M30,30 L70,30 M50,30 L50,70',
    phrases: [
      { text: '几个', english: "how many" },
      { text: '几天', english: "a few days" }
    ],
    meaning: '你有几个苹果？',
    meaningEn: "How many apples do you have?"
  },
  {
    char: '步', 
    pinyin: 'bù', 
    split: splitPinyin('bù'),
    english: "step",
    strokePath: 'M30,50 L70,50 M40,40 L40,60 M60,40 L60,60',
    phrases: [
      { text: '跑步', english: "run" },
      { text: '脚步', english: "footstep" }
    ],
    meaning: '我每天早晨跑步',
    meaningEn: "I run every morning"
  },
  {
    char: '为', 
    pinyin: 'wèi', 
    split: splitPinyin('wèi'),
    english: "for",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '为了', english: "for the sake of" },
      { text: '为什么', english: "why" }
    ],
    meaning: '为了健康，多吃蔬菜',
    meaningEn: "For health, eat more vegetables"
  },
  {
    char: '参', 
    pinyin: 'cān', 
    split: splitPinyin('cān'),
    english: "participate",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '参加', english: "participate" },
      { text: '参考', english: "refer to" }
    ],
    meaning: '我参加了学校的比赛',
    meaningEn: "I participated in the school competition"
  },
  {
    char: '加', 
    pinyin: 'jiā', 
    split: splitPinyin('jiā'),
    english: "add",
    strokePath: 'M30,50 L70,50 M50,30 L50,70',
    phrases: [
      { text: '加法', english: "addition" },
      { text: '参加', english: "participate" }
    ],
    meaning: '二加二等于四',
    meaningEn: "Two plus two equals four"
  },
  {
    char: '洞', 
    pinyin: 'dòng', 
    split: splitPinyin('dòng'),
    english: "hole",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '山洞', english: "cave" },
      { text: '洞口', english: "cave entrance" }
    ],
    meaning: '兔子住在洞里',
    meaningEn: "Rabbits live in holes"
  },
  {
    char: '乌', 
    pinyin: 'wū', 
    split: splitPinyin('wū'),
    english: "black",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '乌鸦', english: "crow" },
      { text: '乌黑', english: "pitch-black" }
    ],
    meaning: '乌鸦的羽毛是黑色的',
    meaningEn: "Crow feathers are black"
  },
  {
    char: '鸦', 
    pinyin: 'yā', 
    split: splitPinyin('yā'),
    english: "crow",
    strokePath: 'M40,30 L60,30 L70,50 L60,70 L40,70 L30,50 Z M45,55 L55,55',
    phrases: [
      { text: '乌鸦', english: "crow" },
      { text: '寒鸦', english: "jackdaw" }
    ],
    meaning: '树上有一只乌鸦',
    meaningEn: "There is a crow in the tree"
  },
  {
    char: '处', 
    pinyin: 'chù', 
    split: splitPinyin('chù'),
    english: "place",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '到处', english: "everywhere" },
      { text: '好处', english: "benefit" }
    ],
    meaning: '公园里到处是花',
    meaningEn: "There are flowers everywhere in the park"
  },
  {
    char: '找', 
    pinyin: 'zhǎo', 
    split: splitPinyin('zhǎo'),
    english: "find",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '寻找', english: "seek" },
      { text: '找到', english: "find" }
    ],
    meaning: '我在找我的铅笔',
    meaningEn: "I am looking for my pencil"
  },
  {
    char: '办', 
    pinyin: 'bàn', 
    split: splitPinyin('bàn'),
    english: "handle",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '办法', english: "method" },
      { text: '办公', english: "work" }
    ],
    meaning: '我有一个好办法',
    meaningEn: "I have a good method"
  },
  {
    char: '旁', 
    pinyin: 'páng', 
    split: splitPinyin('páng'),
    english: "side",
    strokePath: 'M30,50 L70,50 M50,30 L50,70',
    phrases: [
      { text: '旁边', english: "beside" },
      { text: '路旁', english: "roadside" }
    ],
    meaning: '书在桌子旁边',
    meaningEn: "The book is beside the table"
  },
  {
    char: '许', 
    pinyin: 'xǔ', 
    split: splitPinyin('xǔ'),
    english: "allow",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '许多', english: "many" },
      { text: '允许', english: "allow" }
    ],
    meaning: '公园里有许多人',
    meaningEn: "There are many people in the park"
  },
  {
    char: '法', 
    pinyin: 'fǎ', 
    split: splitPinyin('fǎ'),
    english: "method",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '办法', english: "method" },
      { text: '法律', english: "law" }
    ],
    meaning: '这是最好的方法',
    meaningEn: "This is the best method"
  },
    {
    char: '放', 
    pinyin: 'fàng', 
    split: splitPinyin('fàng'),
    english: "put",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '放心', english: "feel relieved" },
      { text: '放学', english: "school's out" }
    ],
    meaning: '请把书放在桌子上',
    meaningEn: "Please put the book on the table"
  },
  {
    char: '进', 
    pinyin: 'jìn', 
    split: splitPinyin('jìn'),
    english: "enter",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '进步', english: "progress" },
      { text: '前进', english: "advance" }
    ],
    meaning: '请进教室',
    meaningEn: "Please enter the classroom"
  },
  {
    char: '高', 
    pinyin: 'gāo', 
    split: splitPinyin('gāo'),
    english: "tall",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '高兴', english: "happy" },
      { text: '身高', english: "height" }
    ],
    meaning: '这座山很高',
    meaningEn: "This mountain is very tall"
  },
  {
    char: '住', 
    pinyin: 'zhù', 
    split: splitPinyin('zhù'),
    english: "live",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '住房', english: "housing" },
      { text: '记住', english: "remember" }
    ],
    meaning: '我住在北京',
    meaningEn: "I live in Beijing"
  },
  {
    char: '孩', 
    pinyin: 'hái', 
    split: splitPinyin('hái'),
    english: "child",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '孩子', english: "child" },
      { text: '小孩', english: "child" }
    ],
    meaning: '孩子们在公园玩耍',
    meaningEn: "Children are playing in the park"
  },
  {
    char: '玩', 
    pinyin: 'wán', 
    split: splitPinyin('wán'),
    english: "play",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '玩具', english: "toy" },
      { text: '玩耍', english: "play" }
    ],
    meaning: '我喜欢玩积木',
    meaningEn: "I like to play with blocks"
  },
  {
    char: '吧', 
    pinyin: 'ba', 
    split: splitPinyin('ba'),
    english: "(suggestion particle)",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '好吧', english: "okay" },
      { text: '来吧', english: "come on" }
    ],
    meaning: '我们走吧',
    meaningEn: "Let's go"
  },
  {
    char: '发', 
    pinyin: 'fā', 
    split: splitPinyin('fā'),
    english: "send",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '发现', english: "discover" },
      { text: '发生', english: "happen" }
    ],
    meaning: '我发了一封邮件',
    meaningEn: "I sent an email"
  },
  {
    char: '芽', 
    pinyin: 'yá', 
    split: splitPinyin('yá'),
    english: "sprout",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '发芽', english: "sprout" },
      { text: '豆芽', english: "bean sprout" }
    ],
    meaning: '春天种子发芽了',
    meaningEn: "Seeds sprout in spring"
  },
  {
    char: '爬', 
    pinyin: 'pá', 
    split: splitPinyin('pá'),
    english: "climb",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '爬山', english: "climb mountain" },
      { text: '爬行', english: "crawl" }
    ],
    meaning: '孩子们喜欢爬树',
    meaningEn: "Children like to climb trees"
  },
  {
    char: '呀', 
    pinyin: 'ya', 
    split: splitPinyin('ya'),
    english: "(exclamation)",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '好呀', english: "good!" },
      { text: '来呀', english: "come on!" }
    ],
    meaning: '好呀，我同意',
    meaningEn: "Good! I agree"
  },
  {
    char: '久', 
    pinyin: 'jiǔ', 
    split: splitPinyin('jiǔ'),
    english: "long time",
    strokePath: 'M30,40 L70,40 M40,30 L40,50 M60,30 L60,50',
    phrases: [
      { text: '很久', english: "long time" },
      { text: '长久', english: "long-lasting" }
    ],
    meaning: '我们很久没见面了',
    meaningEn: "We haven't seen each other for a long time"
  },
  {
    char: '回', 
    pinyin: 'huí', 
    split: splitPinyin('huí'),
    english: "return",
    strokePath: 'M50,20 L30,50 L70,50 Z M50,50 L50,80',
    phrases: [
      { text: '回家', english: "go home" },
      { text: '回来', english: "come back" }
    ],
    meaning: '我五点回家',
    meaningEn: "I go home at five o'clock"
  },
  {
    char: '全', 
    pinyin: 'quán', 
    split: splitPinyin('quán'),
    english: "whole",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '全部', english: "all" },
      { text: '安全', english: "safe" }
    ],
    meaning: '全班同学都来了',
    meaningEn: "The whole class came"
  },
  {
    char: '变', 
    pinyin: 'biàn', 
    split: splitPinyin('biàn'),
    english: "change",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '变化', english: "change" },
      { text: '变成', english: "become" }
    ],
    meaning: '天气变冷了',
    meaningEn: "The weather has become cold"
  },
  {
    char: '工', 
    pinyin: 'gōng', 
    split: splitPinyin('gōng'),
    english: "work",
    strokePath: 'M30,30 L70,30 M50,30 L50,70',
    phrases: [
      { text: '工作', english: "work" },
      { text: '工人', english: "worker" }
    ],
    meaning: '爸爸在工厂工作',
    meaningEn: "Dad works in a factory"
  },
  {
    char: '厂', 
    pinyin: 'chǎng', 
    split: splitPinyin('chǎng'),
    english: "factory",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z',
    phrases: [
      { text: '工厂', english: "factory" },
      { text: '厂长', english: "factory director" }
    ],
    meaning: '妈妈在服装厂工作',
    meaningEn: "Mom works in a clothing factory"
  },
  {
    char: '医', 
    pinyin: 'yī', 
    split: splitPinyin('yī'),
    english: "medicine",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '医院', english: "hospital" },
      { text: '医生', english: "doctor" }
    ],
    meaning: '生病了要去医院',
    meaningEn: "Go to the hospital when you are sick"
  },
  {
    char: '院', 
    pinyin: 'yuàn', 
    split: splitPinyin('yuàn'),
    english: "courtyard",
    strokePath: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 M40,60 L60,60',
    phrases: [
      { text: '医院', english: "hospital" },
      { text: '院子', english: "courtyard" }
    ],
    meaning: '爷爷在院子里种花',
    meaningEn: "Grandpa plants flowers in the courtyard"
  },
  {
    char: '生', 
    pinyin: 'shēng', 
    split: splitPinyin('shēng'),
    english: "birth",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '生日', english: "birthday" },
      { text: '学生', english: "student" }
    ],
    meaning: '今天是我的生日',
    meaningEn: "Today is my birthday"
  },
  {
    char: '霜', 
    pinyin: 'shuāng', 
    split: splitPinyin('shuāng'),
    english: "frost",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60 M50,60 L50,80',
    phrases: [
      { text: '霜降', english: "frost descent" },
      { text: '冰霜', english: "frost" }
    ],
    meaning: '早晨草地上有霜',
    meaningEn: "There is frost on the grass in the morning"
  },
  {
    char: '吹', 
    pinyin: 'chuī', 
    split: splitPinyin('chuī'),
    english: "blow",
    strokePath: 'M40,20 L60,20 M50,20 L50,50 M30,60 L70,60',
    phrases: [
      { text: '吹风', english: "blow wind" },
      { text: '吹气', english: "blow air" }
    ],
    meaning: '风吹树叶动',
    meaningEn: "The wind blows and the leaves move"
  },
  {
    char: '落', 
    pinyin: 'luò', 
    split: splitPinyin('luò'),
    english: "fall",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '落叶', english: "fallen leaves" },
      { text: '降落', english: "land" }
    ],
    meaning: '秋天树叶落下',
    meaningEn: "Leaves fall in autumn"
  },
  {
    char: '降', 
    pinyin: 'jiàng', 
    split: splitPinyin('jiàng'),
    english: "descend",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '下降', english: "descend" },
      { text: '降落', english: "land" }
    ],
    meaning: '飞机正在降落',
    meaningEn: "The plane is landing"
  },
  {
    char: '飘', 
    pinyin: 'piāo', 
    split: splitPinyin('piāo'),
    english: "float",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '飘落', english: "drift down" },
      { text: '飘扬', english: "flutter" }
    ],
    meaning: '雪花从天空飘落',
    meaningEn: "Snowflakes float down from the sky"
  },
  {
    char: '游', 
    pinyin: 'yóu', 
    split: splitPinyin('yóu'),
    english: "swim",
    strokePath: 'M30,50 L50,30 L70,50 M50,30 L50,80',
    phrases: [
      { text: '游泳', english: "swim" },
      { text: '游戏', english: "game" }
    ],
    meaning: '夏天我喜欢游泳',
    meaningEn: "I like swimming in summer"
  },
  {
    char: '池', 
    pinyin: 'chí', 
    split: splitPinyin('chí'),
    english: "pool",
    strokePath: 'M30,40 L70,40 L70,70 L30,70 Z',
    phrases: [
      { text: '池塘', english: "pond" },
      { text: '游泳池', english: "swimming pool" }
    ],
    meaning: '公园里有一个池塘',
    meaningEn: "There is a pond in the park"
  },
  {
    char: '入', 
    pinyin: 'rù', 
    split: splitPinyin('rù'),
    english: "enter",
    strokePath: 'M50,20 L30,50 M50,20 L70,50',
    phrases: [
      { text: '入口', english: "entrance" },
      { text: '进入', english: "enter" }
    ],
    meaning: '请从正门入口进入',
    meaningEn: "Please enter from the main entrance"
  },
  {
    char: '姓', 
    pinyin: 'xìng', 
    split: splitPinyin('xìng'),
    english: "surname",
    strokePath: 'M30,20 L50,50 L70,20 M50,50 L50,80',
    phrases: [
      { text: '姓名', english: "full name" },
      { text: '姓氏', english: "surname" }
    ],
    meaning: '请问您贵姓？',
    meaningEn: "May I ask your surname?"
  },
  {
    char: '氏', 
    pinyin: 'shì', 
    split: splitPinyin('shì'),
    english: "clan",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '姓氏', english: "surname" },
      { text: '李氏', english: "Li clan" }
    ],
    meaning: '他姓张，张氏家族',
    meaningEn: "His surname is Zhang, the Zhang clan"
  },
  {
    char: '李', 
    pinyin: 'lǐ', 
    split: splitPinyin('lǐ'),
    english: "plum",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '李子', english: "plum" },
      { text: '李树', english: "plum tree" }
    ],
    meaning: '院子里有一棵李树',
    meaningEn: "There is a plum tree in the yard"
  },
  {
    char: '张', 
    pinyin: 'zhāng', 
    split: splitPinyin('zhāng'),
    english: "sheet",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M40,60 L60,60',
    phrases: [
      { text: '张开', english: "open" },
      { text: '纸张', english: "paper" }
    ],
    meaning: '请张开嘴检查',
    meaningEn: "Please open your mouth for examination"
  },
  {
    char: '古', 
    pinyin: 'gǔ', 
    split: splitPinyin('gǔ'),
    english: "ancient",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,70 L70,70',
    phrases: [
      { text: '古代', english: "ancient times" },
      { text: '古老', english: "ancient" }
    ],
    meaning: '北京有很多古建筑',
    meaningEn: "Beijing has many ancient buildings"
  },
  {
    char: '吴', 
    pinyin: 'wú', 
    split: splitPinyin('wú'),
    english: "Wu (surname)",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '吴国', english: "Wu State" },
      { text: '吴姓', english: "Wu surname" }
    ],
    meaning: '吴老师教我们数学',
    meaningEn: "Teacher Wu teaches us math"
  },
  {
    char: '赵', 
    pinyin: 'zhào', 
    split: splitPinyin('zhào'),
    english: "Zhao (surname)",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '赵州桥', english: "Zhaozhou Bridge" },
      { text: '赵姓', english: "Zhao surname" }
    ],
    meaning: '赵钱孙李是常见姓氏',
    meaningEn: "Zhao, Qian, Sun, Li are common surnames"
  },
  {
    char: '钱', 
    pinyin: 'qián', 
    split: splitPinyin('qián'),
    english: "money",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M40,50 L60,50',
    phrases: [
      { text: '钱包', english: "wallet" },
      { text: '花钱', english: "spend money" }
    ],
    meaning: '我的钱包里有十块钱',
    meaningEn: "I have ten yuan in my wallet"
  },
  {
    char: '孙', 
    pinyin: 'sūn', 
    split: splitPinyin('sūn'),
    english: "grandson",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M50,50 L50,80',
    phrases: [
      { text: '孙子', english: "grandson" },
      { text: '孙女', english: "granddaughter" }
    ],
    meaning: '爷爷抱着孙子',
    meaningEn: "Grandfather is holding his grandson"
  },
  {
    char: '周', 
    pinyin: 'zhōu', 
    split: splitPinyin('zhōu'),
    english: "week",
    strokePath: 'M30,30 L70,30 M50,30 L50,70 M30,70 L70,70',
    phrases: [
      { text: '周末', english: "weekend" },
      { text: '周围', english: "surroundings" }
    ],
    meaning: '这周末我们去公园',
    meaningEn: "We are going to the park this weekend"
  },
  {
    char: '王', 
    pinyin: 'wáng', 
    split: splitPinyin('wáng'),
    english: "king",
    strokePath: 'M30,20 L70,20 M50,20 L50,50 M30,50 L70,50 M40,70 L60,70',
    phrases: [
      { text: '王子', english: "prince" },
      { text: '国王', english: "king" }
    ],
    meaning: '在古代，国王权力很大',
    meaningEn: "In ancient times, kings had great power"
  },
  {
    char: '官', 
    pinyin: 'guān', 
    split: splitPinyin('guān'),
    english: "official",
    strokePath: 'M50,20 L30,50 M50,20 L70,50 M40,60 L60,60',
    phrases: [
      { text: '官员', english: "official" },
      { text: '政府官员', english: "government official" }
    ],
    meaning: '他是一名政府官员',
    meaningEn: "He is a government official"
  },
    {
    char: '清', 
    pinyin: 'qīng', 
    split: splitPinyin('qīng'), // ['q', 'īng']
    english: "clear",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85', // 占位符路径
    phrases: [
      { text: '清水', english: "clear water" },
      { text: '清理', english: "clean up" }
    ],
    meaning: '河水很清澈', 
    meaningEn: "The river water is very clear"
  },
  {
    char: '晴', 
    pinyin: 'qíng', 
    split: splitPinyin('qíng'), // ['q', 'íng']
    english: "sunny",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '晴天', english: "sunny day" },
      { text: '晴朗', english: "clear and bright" }
    ],
    meaning: '今天天气晴朗', 
    meaningEn: "The weather is sunny today"
  },
  {
    char: '眼', 
    pinyin: 'yǎn', 
    split: splitPinyin('yǎn'), // ['y', 'ǎn']
    english: "eye",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '眼睛', english: "eyes" },
      { text: '眼镜', english: "glasses" }
    ],
    meaning: '他的眼睛很明亮', 
    meaningEn: "His eyes are very bright"
  },
  {
    char: '睛', 
    pinyin: 'jīng', 
    split: splitPinyin('jīng'), // ['j', 'īng']
    english: "eyeball",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '眼睛', english: "eyes" },
      { text: '画龙点睛', english: "add the finishing touch" }
    ],
    meaning: '保护眼睛很重要', 
    meaningEn: "Protecting eyes is important"
  },
  {
    char: '保', 
    pinyin: 'bǎo', 
    split: splitPinyin('bǎo'), // ['b', 'ǎo']
    english: "protect",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '保护', english: "protect" },
      { text: '保存', english: "preserve" }
    ],
    meaning: '我们要保护环境', 
    meaningEn: "We must protect the environment"
  },
  {
    char: '护', 
    pinyin: 'hù', 
    split: splitPinyin('hù'), // ['h', 'ù']
    english: "guard",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '保护', english: "protection" },
      { text: '护士', english: "nurse" }
    ],
    meaning: '护士在照顾病人', 
    meaningEn: "The nurse is taking care of the patient"
  },
  {
    char: '害', 
    pinyin: 'hài', 
    split: splitPinyin('hài'), // ['h', 'ài']
    english: "harm",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '伤害', english: "injure" },
      { text: '害怕', english: "afraid" }
    ],
    meaning: '吸烟有害健康', 
    meaningEn: "Smoking is harmful to health"
  },
  {
    char: '事', 
    pinyin: 'shì', 
    split: splitPinyin('shì'), // ['sh', 'ì']
    english: "matter",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '事情', english: "affair" },
      { text: '故事', english: "story" }
    ],
    meaning: '这件事很重要', 
    meaningEn: "This matter is very important"
  },
  {
    char: '情', 
    pinyin: 'qíng', 
    split: splitPinyin('qíng'), // ['q', 'íng']
    english: "feeling",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '感情', english: "emotion" },
      { text: '情况', english: "situation" }
    ],
    meaning: '我了解你的心情', 
    meaningEn: "I understand your feelings"
  },
  {
    char: '请', 
    pinyin: 'qǐng', 
    split: splitPinyin('qǐng'), // ['q', 'ǐng']
    english: "please",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '请坐', english: "please sit" },
      { text: '邀请', english: "invite" }
    ],
    meaning: '请帮我一个忙', 
    meaningEn: "Please do me a favor"
  },
  {
    char: '让', 
    pinyin: 'ràng', 
    split: splitPinyin('ràng'), // ['r', 'àng']
    english: "let",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '让开', english: "step aside" },
      { text: '转让', english: "transfer" }
    ],
    meaning: '请让我过去', 
    meaningEn: "Please let me pass"
  },
  {
    char: '病', 
    pinyin: 'bìng', 
    split: splitPinyin('bìng'), // ['b', 'ìng']
    english: "illness",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '生病', english: "fall ill" },
      { text: '病人', english: "patient" }
    ],
    meaning: '他生病住院了', 
    meaningEn: "He is ill and hospitalized"
  },
  {
    char: '相', 
    pinyin: 'xiāng', 
    split: splitPinyin('xiāng'), // ['x', 'iāng']
    english: "mutual",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '互相', english: "each other" },
      { text: '相信', english: "believe" }
    ],
    meaning: '我们应该互相帮助', 
    meaningEn: "We should help each other"
  },
  {
    char: '遇', 
    pinyin: 'yù', 
    split: splitPinyin('yù'), // ['y', 'ù']
    english: "meet",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '相遇', english: "encounter" },
      { text: '遇到', english: "come across" }
    ],
    meaning: '我们在北京相遇', 
    meaningEn: "We met in Beijing"
  },
  {
    char: '喜', 
    pinyin: 'xǐ', 
    split: splitPinyin('xǐ'), // ['x', 'ǐ']
    english: "happy",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '喜欢', english: "like" },
      { text: '喜庆', english: "joyous" }
    ],
    meaning: '我喜欢这本书', 
    meaningEn: "I like this book"
  },
  {
    char: '欢', 
    pinyin: 'huān', 
    split: splitPinyin('huān'), // ['h', 'uān']
    english: "joyous",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '喜欢', english: "like" },
      { text: '欢迎', english: "welcome" }
    ],
    meaning: '欢迎来中国', 
    meaningEn: "Welcome to China"
  },
  {
    char: '怕', 
    pinyin: 'pà', 
    split: splitPinyin('pà'), // ['p', 'à']
    english: "fear",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '害怕', english: "afraid" },
      { text: '可怕', english: "terrible" }
    ],
    meaning: '小孩怕黑', 
    meaningEn: "Children are afraid of the dark"
  },
  {
    char: '言', 
    pinyin: 'yán', 
    split: splitPinyin('yán'), // ['y', 'án']
    english: "speech",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '语言', english: "language" },
      { text: '发言', english: "speak" }
    ],
    meaning: '言行要一致', 
    meaningEn: "Words and deeds must match"
  },
  {
    char: '互', 
    pinyin: 'hù', 
    split: splitPinyin('hù'), // ['h', 'ù']
    english: "mutual",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '互相', english: "mutually" },
      { text: '互联网', english: "internet" }
    ],
    meaning: '互联网改变生活', 
    meaningEn: "The internet has changed our lives"
  },
  {
    char: '令', 
    pinyin: 'lìng', 
    split: splitPinyin('lìng'), // ['l', 'ìng']
    english: "command",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '命令', english: "order" },
      { text: '令人', english: "make people" }
    ],
    meaning: '令人兴奋的消息', 
    meaningEn: "Exciting news"
  },
  {
    char: '动', 
    pinyin: 'dòng', 
    split: splitPinyin('dòng'), // ['d', 'òng']
    english: "move",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '运动', english: "sports" },
      { text: '动物', english: "animal" }
    ],
    meaning: '动物需要保护', 
    meaningEn: "Animals need protection"
  },
  {
    char: '万', 
    pinyin: 'wàn', 
    split: splitPinyin('wàn'), // ['w', 'àn']
    english: "ten thousand",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '千万', english: "ten million" },
      { text: '万一', english: "in case" }
    ],
    meaning: '万里长城', 
    meaningEn: "The Great Wall"
  },
  {
    char: '纯', 
    pinyin: 'chún', 
    split: splitPinyin('chún'), // ['ch', 'ún']
    english: "pure",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '纯洁', english: "pure" },
      { text: '单纯', english: "simple" }
    ],
    meaning: '纯洁的心灵', 
    meaningEn: "Pure heart"
  },
  {
    char: '净', 
    pinyin: 'jìng', 
    split: splitPinyin('jìng'), // ['j', 'ìng']
    english: "clean",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '干净', english: "clean" },
      { text: '净化', english: "purify" }
    ],
    meaning: '保持环境干净', 
    meaningEn: "Keep the environment clean"
  },
  {
    char: '阴', 
    pinyin: 'yīn', 
    split: splitPinyin('yīn'), // ['y', 'īn']
    english: "cloudy",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '阴天', english: "overcast" },
      { text: '阴影', english: "shadow" }
    ],
    meaning: '明天可能是阴天', 
    meaningEn: "Tomorrow may be cloudy"
  },
  {
    char: '雷', 
    pinyin: 'léi', 
    split: splitPinyin('léi'), // ['l', 'éi']
    english: "thunder",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '雷电', english: "thunder and lightning" },
      { text: '打雷', english: "thunder" }
    ],
    meaning: '夏天常打雷', 
    meaningEn: "It often thunders in summer"
  },
  {
    char: '电', 
    pinyin: 'diàn', 
    split: splitPinyin('diàn'), // ['d', 'iàn']
    english: "electricity",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '电话', english: "telephone" },
      { text: '电视', english: "television" }
    ],
    meaning: '现代生活离不开电', 
    meaningEn: "Modern life cannot do without electricity"
  },
  {
    char: '阵', 
    pinyin: 'zhèn', 
    split: splitPinyin('zhèn'), // ['zh', 'èn']
    english: "battle array",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '一阵', english: "a burst" },
      { text: '阵地', english: "position" }
    ],
    meaning: '一阵风吹过', 
    meaningEn: "A gust of wind blew"
  },
  {
    char: '冰', 
    pinyin: 'bīng', 
    split: splitPinyin('bīng'), // ['b', 'īng']
    english: "ice",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '冰箱', english: "refrigerator" },
      { text: '冰冷', english: "ice-cold" }
    ],
    meaning: '冬天湖面结冰', 
    meaningEn: "The lake freezes in winter"
  },
  {
    char: '冻', 
    pinyin: 'dòng', 
    split: splitPinyin('dòng'), // ['d', 'òng']
    english: "freeze",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '冷冻', english: "freezing" },
      { text: '解冻', english: "thaw" }
    ],
    meaning: '食物要冷冻保存', 
    meaningEn: "Food should be stored frozen"
  },
  {
    char: '夹', 
    pinyin: 'jiā', 
    split: splitPinyin('jiā'), // ['j', 'iā']
    english: "clip",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '夹子', english: "clip" },
      { text: '文件夹', english: "folder" }
    ],
    meaning: '用夹子固定文件', 
    meaningEn: "Use a clip to secure the documents"
  },
  {
    char: '吃', 
    pinyin: 'chī', 
    split: splitPinyin('chī'), // ['ch', 'ī']
    english: "eat",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '吃饭', english: "have a meal" },
      { text: '好吃', english: "delicious" }
    ],
    meaning: '我喜欢吃水果', 
    meaningEn: "I like to eat fruits"
  },
  {
    char: '忘', 
    pinyin: 'wàng', 
    split: splitPinyin('wàng'), // ['w', 'àng']
    english: "forget",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '忘记', english: "forget" },
      { text: '难忘', english: "unforgettable" }
    ],
    meaning: '我忘记带钥匙了', 
    meaningEn: "I forgot to bring the keys"
  },
  {
    char: '井', 
    pinyin: 'jǐng', 
    split: splitPinyin('jǐng'), // ['j', 'ǐng']
    english: "well",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '水井', english: "water well" },
      { text: '井井有条', english: "orderly" }
    ],
    meaning: '村庄里有口水井', 
    meaningEn: "There is a well in the village"
  },
  {
    char: '村', 
    pinyin: 'cūn', 
    split: splitPinyin('cūn'), // ['c', 'ūn']
    english: "village",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '农村', english: "countryside" },
      { text: '村长', english: "village head" }
    ],
    meaning: '乡村风景很美', 
    meaningEn: "The rural scenery is beautiful"
  },
  {
    char: '叫', 
    pinyin: 'jiào', 
    split: splitPinyin('jiào'), // ['j', 'iào']
    english: "shout",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '喊叫', english: "shout" },
      { text: '叫做', english: "called" }
    ],
    meaning: '他大声叫我的名字', 
    meaningEn: "He called my name loudly"
  },
  {
    char: '毛', 
    pinyin: 'máo', 
    split: splitPinyin('máo'), // ['m', 'áo']
    english: "fur",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '羽毛', english: "feather" },
      { text: '毛巾', english: "towel" }
    ],
    meaning: '猫有柔软的毛', 
    meaningEn: "Cats have soft fur"
  },
  {
    char: '主', 
    pinyin: 'zhǔ', 
    split: splitPinyin('zhǔ'), // ['zh', 'ǔ']
    english: "main",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '主要', english: "main" },
      { text: '主人', english: "host" }
    ],
    meaning: '他是会议主持人', 
    meaningEn: "He is the host of the meeting"
  },
  {
    char: '席', 
    pinyin: 'xí', 
    split: splitPinyin('xí'), // ['x', 'í']
    english: "seat",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '主席', english: "chairman" },
      { text: '席位', english: "seat" }
    ],
    meaning: '毛主席是伟大领袖', 
    meaningEn: "Chairman Mao is a great leader"
  },
  {
    char: '乡', 
    pinyin: 'xiāng', 
    split: splitPinyin('xiāng'), // ['x', 'iāng']
    english: "countryside",
    strokePath: 'M20,20 L80,20 M50,20 L50,50 M20,70 L80,70 M35,85 L65,85',
    phrases: [
      { text: '家乡', english: "hometown" },
      { text: '乡村', english: "village" }
    ],
    meaning: '我思念我的家乡', 
    meaningEn: "I miss my hometown"
  }
];