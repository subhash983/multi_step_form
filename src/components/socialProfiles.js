import React from 'react';
import  {Link} from 'react-router-dom';

class SocialProfiles extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                socialProfiles
                <Link to='/'>prev</Link>
            </div>
        );
    }
}

export default SocialProfiles;
