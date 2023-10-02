import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { removeToCart } from '../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
const RemoveCartModal = ({id}) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    
    dispatch(removeToCart(id))
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div >
      <Button  onClick={showModal} >
        Remove
      </Button>
      <Modal title='Remove Item' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={350} okText="Remove" cancelButtonProps={{style:{padding:'1vh 5vh 4vh 5vh'}}}  okButtonProps={{type:'default', style:{padding:'1vh 5vh 4vh 5vh',}}}   bodyStyle={{height:80}} >
      <p className='p-2'>Are you  sure you want to remove this item?</p>
        
      </Modal>
    </div>
  );
};
export default RemoveCartModal;