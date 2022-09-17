type Organization = {
  // properties of the type
  _id: string;
  name: string;
  contact: {
    email: string;
    phoneNumber: string;
    website: string;
  };
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  OrganizationNumber: string;
  active: boolean;
  type: string;
  logoImage: string;
  parentClinic: Organization;
  created: {
    at: string;
    by: string;
  };
  updated: {
    at: string;
    by: string;
  };
};

export type { Organization };
