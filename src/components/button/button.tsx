import {
  Button as MButton, styled,
} from '@mui/material';
import { getColor } from '@/utils/styled';

const Button = styled(MButton)`
  background-color: ${getColor('greenNeon')};
  box-sizing: border-box;
  height: 40px;
  border-radius: 0;
  border: 2px solid ${getColor('greenNeon')};
  color: ${getColor('greyDark')};
  fill: ${getColor('greyDark')};
  transition-property: background-color, box-shadow, border-color, color, fill;

  &:hover {
    background-color: transparent;
    color: ${getColor('greenNeon')};
    fill: ${getColor('greenNeon')};
  }

  ${(p) => p.theme.breakpoints.down('md')} {
    height: 56px;
  };
`;

export default Button;
