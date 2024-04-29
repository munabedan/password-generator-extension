import { Box, styled } from '@mui/material';
import { getColor } from '@/utils/styled';

const Wrapper = styled(Box)`
  background-color: ${getColor('greyVeryDark')};
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  
  ${(p) => p.theme.breakpoints.down('md')} {
    height: 56px;
    padding: 0 16px;
  }
`;
export default {
  Wrapper,
};
