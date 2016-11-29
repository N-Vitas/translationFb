const initialState = {
  user: 'Unknown User',
  like:0,
  love:0,
  post_id:'',
	access_token:'',
	connect:false,
};

export default function userstate(state = initialState,action) {
	switch(action.type){
		case 'CHANGE_USER':
			return {...state,user:action.user}
		default:
  		return state;
	}
}