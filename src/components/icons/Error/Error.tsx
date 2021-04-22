import * as React from 'react';

import Icon, { Props } from '../SVGIcon/SVGIcon';

const ERROR: React.SFC<Props> = props => (
  <Icon {...props} viewBoxWidth={24} viewBoxHeight={24}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM11 15V17H13V15H11Z"
    />
  </Icon>
);

export default ERROR;
