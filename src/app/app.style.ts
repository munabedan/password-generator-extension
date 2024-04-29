import { Box, styled, Typography } from '@mui/material';
import { getColor } from '@/utils/styled';

const Wrapper = styled(Box)`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  ${(p) => p.theme.breakpoints.down('sm')} {
    padding: 0;
  }
`;

const PageWrapper = styled(Box)`
  width: 400px;
  max-width: 100%;
`;

const FormBox = styled(Box)`
  background-color: ${getColor('greyDark')};
  padding: 14px 22px;
  gap: 14px;
  display: flex;
  flex-direction: column;

  ${(p) => p.theme.breakpoints.down('md')} {
    padding: 16px;
  };
`;

const Title = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
  padding-top: 32px;
  display: block;
  color: ${getColor('greyDefault')};
  
  ${(p) => p.theme.breakpoints.down('md')} {
      padding-top: 64px;
  };
`;

export default {
  Wrapper,
  PageWrapper,
  FormBox,
  Title,
};
