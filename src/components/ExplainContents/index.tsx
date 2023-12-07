import { FC } from 'react';
import { ExplainContentsTopInfo } from '../../lib/const/ExplainContentsTopInfo';
import { ExplainContent } from '../ExplainContent';
export const ExplainContentsDetail: FC = () => {
  return (
    <ExplainContent
      title='美白套組'
      span='※1'
      content='MCO速淨卸粧油 120ml'
      info={ExplainContentsTopInfo}
      anotation='※1 美白意指防止黑色素生成，預防色斑和雀斑。
      （MCO速淨卸粧油、毛孔淨化潔膚泥膠、長效清透防曬露50+ (SPF50 PA++++) 除外）'
    />
  );
};
