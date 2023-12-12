export type ContentInfo = {
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
};

export type RegionInfo = {
  RegionTopImgImg: string;
  RegionTopImgTitle: string;
  DescriptionRegionContent: string;
  RegionProductsArray: RegionContentInfo[];
};
