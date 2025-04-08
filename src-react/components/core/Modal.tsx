import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export interface IModalContent {
  header?: string;
  body?: string;
  cancelButtonText?: string;
  OKButtonText?: string;
  cancelButtonVisible?: boolean;
}

const ModalBackdrop = styled.div<{ visible: boolean; visibleAnimate: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.visible ? 'block' : 'none'};
  opacity: ${props => props.visibleAnimate ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  z-index: 1050;
`;

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 10px auto;
  max-width: 600px;
  
  @media (min-width: 768px) {
    margin: 30px auto;
  }
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
`;

const ModalHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  line-height: 1.42857143;
  font-size: 18px;
`;

const CloseButton = styled.button`
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  
  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    opacity: 0.5;
  }
`;

const ModalBody = styled.div`
  position: relative;
  padding: 15px;
`;

const ModalFooter = styled.div`
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
  
  button + button {
    margin-left: 5px;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
`;

const DefaultButton = styled(Button)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  
  &:hover, &:focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`;

const PrimaryButton = styled(Button)`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  
  &:hover, &:focus {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
`;

export const ModalContext = React.createContext<{
  show: (modalContent: IModalContent) => Promise<boolean>;
  hide: () => void;
}>({
  show: () => Promise.resolve(false),
  hide: () => {}
});

export const useModalService = () => {
  return React.useContext(ModalContext);
};

const Modal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleAnimate, setModalVisibleAnimate] = useState(false);
  const [modalContent, setModalContent] = useState<IModalContent>({});
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);
  
  const defaultModalContent: IModalContent = {
    header: 'Please Confirm',
    body: 'Are you sure you want to continue?',
    cancelButtonText: 'Cancel',
    OKButtonText: 'OK',
    cancelButtonVisible: true
  };
  
  const show = useCallback((content: IModalContent): Promise<boolean> => {
    setModalContent({ ...defaultModalContent, ...content });
    setModalVisible(true);
    
    setTimeout(() => setModalVisibleAnimate(true), 10);
    
    return new Promise<boolean>((resolve) => {
      setResolvePromise(() => resolve);
    });
  }, []);
  
  const hide = useCallback(() => {
    setModalVisibleAnimate(false);
    
    setTimeout(() => setModalVisible(false), 300);
  }, []);
  
  const handleCancel = useCallback(() => {
    hide();
    if (resolvePromise) {
      resolvePromise(false);
    }
  }, [hide, resolvePromise]);
  
  const handleOk = useCallback(() => {
    hide();
    if (resolvePromise) {
      resolvePromise(true);
    }
  }, [hide, resolvePromise]);
  
  useEffect(() => {
  }, [show, hide]);
  
  return (
    <ModalContext.Provider value={{ show, hide }}>
      <ModalBackdrop 
        visible={modalVisible} 
        visibleAnimate={modalVisibleAnimate}
        className="modal fade"
      >
        <ModalDialog className="modal-dialog">
          <ModalContent className="modal-content">
            <ModalHeader className="modal-header">
              <ModalTitle className="modal-title">{modalContent.header}</ModalTitle>
              <CloseButton 
                onClick={handleCancel} 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </CloseButton>
            </ModalHeader>
            <ModalBody className="modal-body">
              {modalContent.body}
            </ModalBody>
            <ModalFooter className="modal-footer">
              {modalContent.cancelButtonVisible && (
                <DefaultButton 
                  onClick={handleCancel}
                  className="btn btn-default"
                >
                  {modalContent.cancelButtonText}
                </DefaultButton>
              )}
              <PrimaryButton 
                onClick={handleOk}
                className="btn btn-primary"
              >
                {modalContent.OKButtonText}
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </ModalBackdrop>
    </ModalContext.Provider>
  );
};

export default Modal;
