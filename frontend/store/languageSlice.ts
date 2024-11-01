import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const ALLOWED_LANGS = ['en', 'pl', 'ua'];

interface LanguageState {
  language: string;
}

const getBrowserLanguage = (): string => {
  const language = navigator.language || 'en';
  const splittedLanguage = language.split('-')[0];
  
  if (ALLOWED_LANGS.indexOf(splittedLanguage) === -1) {
    return 'en';
  }
  
  return splittedLanguage;
};

const initialState: LanguageState = {
  language: getBrowserLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;