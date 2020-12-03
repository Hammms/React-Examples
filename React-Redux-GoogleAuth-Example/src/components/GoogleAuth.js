import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
//we do not know it he user is signed in when the page loads


class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
            clientId: '180607122446-g1djmhm8t0r5gueren6b82ifi464ren2.apps.googleusercontent.com',
            scope: 'email'
            }).then(() => {
                //the whole google API is now loaded and when we now work with the API
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn()
        } else 
            this.props.signOut()
    }

    onSigninClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
                )
        }else {
            return (
                <button className="ui red google button" onClick={this.onSigninClick}>
                    <i className="google icon" />
                    Sign In
                </button>
                )
        }
    }




    render () {
        return <div>{ this.renderAuthButton() }</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps,
     {signOut, signIn}
     )(GoogleAuth);