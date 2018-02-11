
import React, { Component } from 'react';
import axios from 'axios';

//A currying Function which 
const jenkinsInteractiveComponent = (WrappedComponent) => {
  return class componentName extends Component {
    constructor(props) {
      super(props);
    }

    getAllBuilds() {
      let instance = axios.create({
        baseURL: 'http://localhost:8080/job/build/',
        timeout: 2000,
      });
      return instance.get('/api/json?tree=healthReport[description,score],builds[number,description,timestamp,id,result]');
    }

    getBuildInformation(number) {
      let instance = axios.create({
        baseURL: 'http://localhost:8080/job/build/'+number,
        timeout: 2000,
      });
      return instance.get('/api/json');
    }

    sendNotification() {
   
      let instance = axios.create({
        baseURL: 'https://fcm.googleapis.com/',
        headers: {
          post: {        // can be common or any other method
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAK0og1Uk:APA91bGE14BCeZABRhizyJKYDy1CggNxHyNu5Mu530SksfNoZgQEJjOcDMPD34PwNYehXc7tfQVA9i54ob-JvNEphD5fcWJrpnufKRXQLxJ7j4gBfX0Cvnh6ydOu-oNfTUMcm7-HVqxl'
          }
        }
      });

      instance.post('/fcm/send', {
        notification: {
          body: "Please Raise",
          title: "Build To be Raised",
          icon: ""
        },
        data:{

        },
        content_available: true,
        priority: "high",
        to: "fV18BNDEaV0:APA91bGAku6qZU4CmufDBjUhBjmBeWAeg7DByeiOvs8fkolqtitE8NvycGCzKhKN9d5QWo6PotMjn9XXWjjetG0oK8SYiGnOaPVhoHEa7VOAuNrBYIyAqmAQfQSZm3M22Wym3cicjeNh"
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
      return (
        <div>
          <WrappedComponent sendNotification={this.sendNotification} getBuildInformation={this.getBuildInformation} getAllBuilds={this.getAllBuilds} {...this.props} />
        </div>
      );
    }
  }

};

export default jenkinsInteractiveComponent;