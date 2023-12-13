import { RegionHokkaidoTohokuSimpleProductsInfo } from './RegionHokkaidoTohokuSimpleProductsInfo';
import { RegionKantoKosinetuSimpleProductsInfo } from './RegionKantoKosinetuSimpleProductsInfo';
import { RegionTokaiHokurikuSimpleProductsInfo } from './RegionTokaiHokurikuSimpleProductsInfo';
import { RegionKansaiChugokuSimpleProductsInfo } from './RegionKansaiChugokuSimpleProductsInfo';
import { RegionKyushuOkinawaSimpleProductsInfo } from './RegionKyushuOkinawaSimpleProductsInfo';
export const SimpleRegionsInfo = [
  {
    id: '北海道東北',
    simpleRegionImg: '../../src/img/Region/HokkaidoTohoku/top.webp',
    simpleRegionTitleContent: '北海道、東北地區',
    simpleProductsImages: RegionHokkaidoTohokuSimpleProductsInfo,
  },
  {
    id: '関東甲信越',
    simpleRegionImg: '../../src/img/Region/KantoKosinetu/top.webp',
    simpleRegionTitleContent: '關東甲信越地區',
    simpleProductsImages: RegionKantoKosinetuSimpleProductsInfo,
  },
  {
    id: '東海北陸',
    simpleRegionImg: '../../src/img/Region/TokaiHokuriku/top.webp',
    simpleRegionTitleContent: '東海、北陸地區',
    simpleProductsImages: RegionTokaiHokurikuSimpleProductsInfo,
  },
  {
    id: '関西中国四国',
    simpleRegionImg: '../../src/img/Region/KansaiChugoku/top.webp',
    simpleRegionTitleContent: '關西、中國與四國地區',
    simpleProductsImages: RegionKansaiChugokuSimpleProductsInfo,
  },
  {
    id: '九州沖縄',
    simpleRegionImg: '../../src/img/Region/KyushuOkinawa/top.webp',
    simpleRegionTitleContent: '九州、沖繩地區',
    simpleProductsImages: RegionKyushuOkinawaSimpleProductsInfo,
  },
];
