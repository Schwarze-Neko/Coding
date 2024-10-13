export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export interface Person {
  firstname: string;
  lastname: string;
  birthday: string;
}

export interface PersonState {
  persons: Person[];
}

export interface Action {
  type: string;
  payload: any;
}

export const initialPersonState: PersonState = {
  persons: [],
};

export const PersonReducer = (state: PersonState, action: Action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (person) =>
            person.firstname !== action.payload.firstname &&
            person.lastname !== action.payload.lastname &&
            person.birthday !== action.payload.birthday
        ),
      };
    default:
      return state;
  }
};
