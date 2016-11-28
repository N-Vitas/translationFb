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