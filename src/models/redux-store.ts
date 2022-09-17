type RootState = {
  auth: AuthState;
  popup: PopUpState;
};

type AuthState = {
  isLoggedIn: boolean;
  role: null | string;
};

type PopUpState = {
  isPopUpOpen: boolean;
  setIsPopUpOpen: null | React.Dispatch<React.SetStateAction<boolean>>;
};

export type { AuthState, RootState, PopUpState };
