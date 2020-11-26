import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'
//redux thunk gives you the ability to return a function 
// 
export const fetchPosts =  () => async dispatch => {
    const respone = await jsonPlaceholder.get('/posts');

    dispatch({ type:'FETCH_POSTS', payload: respone.data })
    
}

//this method only lets you fetch the user one time in the application 
export const fetchUser = id =>  dispatch => {
    _fetchUser(id, dispatch)    
} 
const _fetchUser = _.memoize(async(id, dispatch) => {
    const respone = await jsonPlaceholder.get('/users/' + id)

    dispatch({type:'FETCH_USER', payload: respone.data })
})