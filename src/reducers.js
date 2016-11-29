const initialState = {
  user: 'Unknown User',
  like:0,
  love:0,
  post_id:'',
	access_token:'',
	connect:false,
	count:0,
};

export default function userstate(state = initialState,action) {
	switch(action.type){
		case 'CHANGE_USER':
			return {...state,user:action.user}
		case 'SAVE_ACCESS_TOKEN':
			return {...state,access_token:action.token}
		case 'SAVE_POST_ID':
			return {...state,post_id:action.id}
		default:
  		return state;
	}
}