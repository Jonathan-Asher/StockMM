import React from 'react';
import PropTypes from 'prop-types';

function ValueDisplay(props) {
  // const [value, setValue] = useState(props.rate.close);
  // // This will launch only if propName value has chaged.
  // useEffect(() => { setValue(props.rate.close); }, [props.rate]);

  return (
    <div>
      { props.rate }
    </div>
  );
}

ValueDisplay.propTypes = {
  rate: PropTypes.string,
};

export default ValueDisplay;