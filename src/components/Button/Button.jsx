import PropTypes from 'prop-types';

export function Button({ onBtnClick }) {
  return (
    <button
      type="button"
      onClick={onBtnClick}
      style={{
        margin: '20px auto',
        padding: '10px 25px',
        borderRadius: '4px',
        border: 'none',
        fontWeight: 'bold',
        backgroundColor: '#0057b7',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      LOAD MORE
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
