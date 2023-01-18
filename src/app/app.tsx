import React, { FormEvent } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Box } from '@mui/material';
import { getPasswordStrength } from '@/utils/password';
import PasswordField from '@/components/password-field';
import PasswordStrengthIndicator from '@/components/password-strength-indicator';
import PasswordClipboardProvider from '@/providers/password-clipboard-provider';
import usePasswordGenerator from '@/hooks/use-password-generator';
import CharsetControl from '@/components/charset-control';
import PasswordLengthControl from '@/components/password-length-control';
import { HotkeysScopes } from '@/constants/hotkeys';
import GeneratePasswordButton from '@/components/generate-password-button';
import S from './app.style';

const App = () => {
  const {
    generationParams, generateNewPassword, password, updateParam, lengthRange,
  } = usePasswordGenerator();

  useHotkeys(
    'g',
    generateNewPassword,
    { scopes: [HotkeysScopes.MAIN], enableOnFormTags: true },
    [generateNewPassword],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    generateNewPassword();
  };

  return (
    <PasswordClipboardProvider password={password}>
      <S.Wrapper>
        <S.PageWrapper>
          <S.Title variant="h1">
            Password generator
          </S.Title>
          <PasswordField value={password} />
          <Box height={24} />
          <form onSubmit={handleSubmit}>
            <S.FormBox>
              <PasswordLengthControl
                value={generationParams.length}
                onChange={(v) => updateParam('length', v)}
                min={lengthRange.from}
                max={lengthRange.to}
              />
              <CharsetControl
                value={generationParams.passwordCharsSets}
                onChange={(v) => updateParam('passwordCharsSets', v)}
              />
              <PasswordStrengthIndicator strength={getPasswordStrength(generationParams)} />
              <GeneratePasswordButton />
            </S.FormBox>
          </form>
        </S.PageWrapper>
      </S.Wrapper>
    </PasswordClipboardProvider>
  );
};

export default App;
