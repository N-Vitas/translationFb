const initialState = {
  user: 'Unknown User'
};

export default function userstate(state = initialState,action) {
	switch(action.type){
		case 'CHANGE_USER':
			return {...state,user:action.user}
		default:
  		return state;
	}
}