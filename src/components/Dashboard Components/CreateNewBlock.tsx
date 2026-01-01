import { useNavigate } from 'react-router-dom';

function CreateNewBlock() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-[160 px]  justify-center items-center cursor-pointer text-[48px] text-[#666] border-2 border-dashed border-gray-300
'
      
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
