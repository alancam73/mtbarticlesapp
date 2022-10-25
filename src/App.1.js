import './App.css';

import '@aws-amplify/ui-react/styles.css'
import { API, Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import MtbNavBar from './ui-components/MtbNavBar'
import TopicsComponent from './ui-components/TopicsComponent'

// images for our app eg icons, background etc
import mtbBackground from './57-578346_m.jpg';
import mtbAppIcon from './vecteezy_mountain-bike-logo_100-100.jpg';
import mtbUserIcon from './helmet-user-50x60.jpg';


const myAPI="apiMtbTopics"         // API Gateway topics API
const path="/topics"               // path to our bitMask of topics selected


function App({user, signOut}) {
  
  console.log( {user} )
  
  // construct a bit-mask of each of the MTB topics
  let topicsBitMask = 0

  // event handler for checkbox check/uncheck events
  const toggleTopic = async event => {
    console.log("Checkbox " + event.target.labels[0].innerText + " is " + event.target.checked + " value: " + event.target.value)
    topicsBitMask ^= 1 << event.target.value
    console.log("Topics BitMask: " + topicsBitMask)
  }
  
  // event handler for button click event
  // we need an Authenticated user for this action
  const btnClick = async event => {
    console.log("(button context) : Topics BitMask: " + topicsBitMask)
    
    const mtbUser = await Auth.currentAuthenticatedUser()
    console.log( {mtbUser} )
    const token = mtbUser.signInUserSession.idToken.jwtToken
    console.log( {token} )
    
    const requestInfo = {
      headers: {
        Authorization: token
      }
    }
    
    const data = await API.get(myAPI, path + "/" + topicsBitMask, requestInfo)
    console.log( {data} )
    
    var txt = "Thank you " + mtbUser.username + "for selecting MTB topics!\nYou will receive a cool video link every day based on your preferences!"
    alert(txt)
  }
  
  // override default props of the MtbNavBar component
  const navBarOverrides = {
    "mtbIcon": {          // our MTB app icon image
      src: mtbAppIcon
    },
    "helmetUser": {       // our signed in MTB user
      src: mtbUserIcon
    },
    "SignOutButton": {    // use signOut property to signout an authenticated user
      onClick: signOut
    }
  }
  
  
  // override default props of our TopicsComponent
  const checkBoxOverrides = {
    "JumpingCheckbox": {
      defaultChecked: false,
      value: 0,
      onChange: toggleTopic
    },
    "DownhillCheckbox": {
      defaultChecked: false,
      value: 1,
      onChange: toggleTopic
    },
    "TechCheckbox": {
      defaultChecked: false,
      value: 2,
      onChange: toggleTopic
    },
    "57-578346_m 1": {          // our background MTB image
      src: mtbBackground
    },
    "SubmitButton": {
      onClick: btnClick
    }
  }


  return (
    <div className="App">
      
        <MtbNavBar overrides={navBarOverrides} width="100%" />
        <TopicsComponent overrides={checkBoxOverrides} />

    </div>
  );
}

export default withAuthenticator(App);
