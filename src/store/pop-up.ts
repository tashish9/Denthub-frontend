import { createSlice } from '@reduxjs/toolkit';
import { reduxAction } from '../models';

const initialPopUpState = {
  isPopUpOpen: false,
  setIsPopUpOpen: '',
};



const popUpSlice = createSlice({
  name: 'auth',
  initialState: initialPopUpState,
  reducers: {
    open(prevState: any, action: reduxAction) {
      prevState.setIsPopUpOpen(true);
    },
    close(prevState: any) {
      prevState.setIsPopUpOpen(false);
    },
    set(prevState: any, action: reduxAction) {
      prevState.setIsPopUpOpen = action.payload.setIsPopUpOpen;
    },
  },
});

const popUpActions = popUpSlice.actions;

export { popUpActions, popUpSlice };
