

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserPostIts
// ====================================================

export interface getUserPostIts_getUserPostIts_notes {
  id: string;
  text: string;
  marked: boolean;
}

export interface getUserPostIts_getUserPostIts {
  id: string;
  title: string;
  notes: getUserPostIts_getUserPostIts_notes[] | null;
}

export interface getUserPostIts {
  getUserPostIts: getUserPostIts_getUserPostIts[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: login
// ====================================================

export interface login_login_user {
  email: string;
  id: string;
}

export interface login_login {
  token: string;
  user: login_login_user;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================