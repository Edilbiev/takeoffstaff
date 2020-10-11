const initialState = {
  authProcessing: false,
  isAdmin: false,
  error: false,
  contactSearchString: "",
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "contacts/search/set":
      return {
        ...state,
        contactSearchString: action.payload,
      };

    case "auth/process/started":
      return {
        ...state,
        authProcessing: true,
      };

    case "auth/process/succeed":
      return {
        ...state,
        isAdmin: true,
        authProcessing: false,
      };

    case "auth/process/failed":
      return {
        ...state,
        error: true,
        authProcessing: false,
      };

    case "error/reset/succeed":
      return {
        ...state,
        error: false,
      }

    default:
      return state;
  }
}
