import { useNavigate } from 'react-router-dom';

function CreateNewBlock() {
  const navigate = useNavigate();

  const blockStyle: React.CSSProperties = {
    width: '280px',
    height: '160px',
    borderRadius: '12px',
    border: '2px dashed #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '48px',
    color: '#666',
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <div className='flex flex-col'
      style={blockStyle}
      onClick={() => navigate('/resume-builder')}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#000';
        e.currentTarget.style.color = '#000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#ccc';
        e.currentTarget.style.color = '#666';
      }}
    >
      <div>+</div>
      <div className='text-sm'>Click here to start building</div>
    </div>
  );
}

export default CreateNewBlock;
