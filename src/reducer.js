var lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === 'userAdded')
        return [
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
            }
        ]
    else if (action.type === 'userRemoved')
        return state.filter(user => user.id !== action.payload.id)
    else {
        return state;
    }
}