import { Organization } from './organization';

type User = {
  _id: string;
  username: string;
  knownFor: string[];
  type: string;
  role: string;
  email: string;
  password: string;
  organization: Organization;
  created: {
    at: string;
    by: string;
  };
  updated: {
    at: string;
    by: string;
  };
  active: boolean;
  profileImage: string;
  phoneNumber: string;
};

export type { User };
