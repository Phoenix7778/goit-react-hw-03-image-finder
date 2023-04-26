import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      }}
    >
      <ThreeDots
        type="Oval"
        color="#0057b7"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
