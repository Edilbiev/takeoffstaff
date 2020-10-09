const initialState = {
  contacts: [],
  contactsLoading: false,
  contactAdding: false,
  contactDeleting: false,
  contactEditing: false,
  contactSearchString: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/started":
      return {
       ...state,
        contactsLoading: true,
      };

    case "contacts/load/succeed":
      return {
        ...state,
        contacts: action.payload,
        contactsLoading: false,
      };

    case "contact/add/started":
      return {
        ...state,
        contactsAdding: true,
      };

    case "contact/add/succeed":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload
        ],
        contactsLoading: false,
      };

    case "contact/delete/started":
      return {
        ...state,
        contactsDeleting: true,
      };

    case "contact/delete/succeed":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        contactsDeleting: false,
      };

    case "contact/edit/started":
      return {
        ...state,
        contactsEditing: true,
      };

    case "contact/edit/succeed":
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }

          return contact;
        }),
        contactsEditing: false,
      };

    case "contacts/search/set":
      return {
        ...state,
        contactSearchString: action.payload,
      };


    default:
      return state;
  }
}
