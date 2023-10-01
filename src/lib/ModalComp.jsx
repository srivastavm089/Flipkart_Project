import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Divider, Modal, Space } from 'antd';
const LocalizedModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <button style={{background:'none', border:'none', color:'blue', cursor:'pointer'}} type="primary" onClick={showModal}>
     View Details
      </button>
      <Modal
        title="Delivery & Installation details"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="ok"
        cancelText="cancel"
        footer={null}
      >
        <div>
          <h1></h1>
          <Divider/>
          <div>
            <div>Delivery by</div>
            <div>16 Sep, Saturday|Free₹40</div>
            <div>if ordered before 8:46 PM</div>
            <div>Installation Details</div>
            <div><ul><li>This product doesn't require installation</li></ul></div>
            <div>Shipping Charges For Flipkart Assured Items</div>
            <div>Shipping charges are calculated based on the number of units, distance and delivery date. </div>
            <div>Delivery charges if applicable will be shown on the product page and cart.</div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const ModalComp = () => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'OK',
      cancelText: "Cancel",
     
    });
  };
  return (
    <>
      <Space>
        <LocalizedModal />
        
      </Space>
      {contextHolder}
    </>
  );
};
export default ModalComp;