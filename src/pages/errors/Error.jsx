import style from './Error.module.css';
import PropTypes from 'prop-types';

function Error({code, description}) {
  return (
    <div className={style.container}>
      <h1 className={style.code}>{code}</h1>
      <p className={style.description}>{description}</p>
    </div>
  );
}

Error.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Error;