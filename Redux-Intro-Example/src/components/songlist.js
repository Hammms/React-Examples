import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component
 {
    // Generating stateful content from store loaded in as props
    //renderlist is to to format the information before sending it to render
     renderlist() {
        return this.props.songs.map(song => {
            return(
                //i dont understand what the key does in this circumstance i know it is required by React and i am assuming it used as an indentifier for large state/prop lists 
                 <div className="item" key={song.title}>
                     <div className="right floated content">
                        <button onClick={ () => this.props.selectSong(song) } className="ui button primary">Select</button>
                     </div>
                     <div className="content">{song.title}</div>
                 </div>
             )
         })
     }
     render(){
         return(
             <div className="ui divided list">{this.renderlist()}</div>
         )
     }
 }

 //calling from the store to generate the store into props that are useable by the componenets 
 const mapStateToProps = state => {
    return {songs: state.songs }
 }
 export default connect(mapStateToProps, { selectSong })( SongList )