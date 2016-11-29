export function setUser(user) {
  return (dispatch) => {    
  	dispatch({
		  type: 'CHANGE_USER',
		  user: '3'  		
  	});
    setTimeout(() => {
	  	dispatch({
			  type: 'CHANGE_USER',
			  user: '2'  		
	  	});
    }, 1000)
    setTimeout(() => {
	  	dispatch({
			  type: 'CHANGE_USER',
			  user: '1'  		
	  	});
    }, 2000)
    setTimeout(() => {
	  	dispatch({
			  type: 'CHANGE_USER',
			  user: user  		
	  	});
    }, 3000)
  }
}

export function setAccessToken(token){
	return {
		type: 'SAVE_ACCESS_TOKEN',
		token:token,
	}
}
export function setPostId(id){
	return {
		type: 'SAVE_POST_ID',
		id:id,
	}
}