export type ContentInfo = {
  circleTopName: string;
  circleSpanName: string;
  circleBottomName: string;
  img: string;
  contentTitle: string;
  contentSentence: string;
  circleBg: 'blue' | 'red';
};

export type ContentInfoArray = {
  circleTopName: string;
  circleSpanName: string;
  circleBottomName: string;
  img: string;
  contentTitle: string;
  contentSentence: string;
};
export type ExplainContentInfo = {
  content: string;
};

export type RegionContentInfo = {
  img: string;
  title: string;
  content: string;
  moneyTitle: string;
  moneyContent: string;
  isCart?: boolean;
};

export type RegionInfo = {
  RegionTopImgImg: string;
  RegionTopImgTitle: string;
  DescriptionRegionContent: string;
  RegionProductsArray: RegionContentInfo[];
  id: string;
};
export type SimpleProductInfo = {
  img: string;
};
export type SimpleProductsInfo = {
  images: SimpleProductInfo[];
};
