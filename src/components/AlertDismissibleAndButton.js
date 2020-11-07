import React from 'react';
import {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';

function AlertDismissible() {
    const [show, setShow] = useState(false);
  
    if (show) {
      return (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Starting StoryPlay!</Alert.Heading>
          <p>
            Please watch the video to learn how to use story play. From there explore careers!
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  export default AlertDismissible