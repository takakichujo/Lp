import { RegionHokkaidoTohokuInfo } from './RegionHokkaidoTohokuInfo';
import { RegionKantoKosinetuInfo } from './RegionKantoKosietuInfo';
import { RegionTokaiHokurikuuInfo } from './RegionTokaiHokurikuInfo';
import { RegionKansaiChugokuInfo } from './KansaiChugokuInfo';
import { RegionKyushuOkinawaInfo } from './KyushuOkinawaInfo';
export const RegionsInfo = [
  {
    id: 'メイン北海道東北',
    RegionTopImgImg: '../../src/img/Region/HokkaidoTohoku/top.webp',
    RegionTOpImgTitle: '北海道、東北地區',
    DescriptionRegionContent:
      '在北海道、東北地區的遼闊大自然和寒冷氣候下，孕育出豐富的美食！由於北海道的農業和酪農業興盛，出產了許多馬鈴薯和乳製品伴手禮。至於山形、岩手和宮城等地所在的東北地區，則有充滿在地魅力的靈魂料理，以及特色各異的日本酒。',
    RegionProductsArray: RegionHokkaidoTohokuInfo,
  },
  {
    id: 'メイン関東甲信越',
    RegionTopImgImg: '../../src/img/Region/KantoKosinetu/top.webp',
    RegionTOpImgTitle: '關東甲信越地區',
    DescriptionRegionContent:
      '由於分佈了東京和神奈川等多個觀光勝地，因此到訪關東甲信越地區的訪客絡繹不絕。當地有許多好吃又好看、忍不住想買來送人的伴手禮！而在日本首屈一指的大米產地「新潟」，亦有不少令日本人愛不釋手的在地美酒。',
    RegionProductsArray: RegionKantoKosinetuInfo,
  },
  {
    id: 'メイン東海北陸',
    RegionTopImgImg: '../../src/img/Region/TokaiHokuriku/top.webp',
    RegionTOpImgTitle: '東海北陸地區',
    DescriptionRegionContent:
      '東海、北陸地區泛指名古屋所在的愛知縣、靜岡縣，以及充滿日本文化色彩的石川縣（金澤市）和富山、福井等地。北陸地區因嚴寒氣候和豐富的水資源，而具備了得天獨厚的製酒環境，因此當地的日本酒也是相當優質！',
    RegionProductsArray: RegionTokaiHokurikuuInfo,
  },
  {
    id: 'メイン関西中国四国',
    RegionTopImgImg: '../../src/img/Region/KansaiChugoku/top.webp',
    RegionTOpImgTitle: '關西中國與四國地區',
    DescriptionRegionContent:
      '關西、中國與四國地區泛指大阪、京都、奈良，以及圍繞瀨戶內海的廣島及四國（香川、愛媛、德島、高知）等地。由於瀨戶內海一帶的氣候溫和且具備豐富海產資源，因此以海鮮打造的伴手禮，以及用當地名產「檸檬」製作的伴手禮非常有名！',
    RegionProductsArray: RegionKansaiChugokuInfo,
  },
  {
    id: 'メイン九州沖縄',
    RegionTopImgImg: '../../src/img/Region/KyushuOkinawa/top.webp',
    RegionTOpImgTitle: '九州沖繩地區',
    DescriptionRegionContent:
      '九州、沖繩地區泛指福岡、熊本、鹿兒島及沖繩等地。九州有不少以當地特產「明太子」所製成的零食和蒸餾酒「燒酎」。沖繩則有以當地生產的黑糖和鹽製做的零食，以及「金楚糕」等各式充滿在地特色的伴手禮。',
    RegionProductsArray: RegionKyushuOkinawaInfo,
  },
];
