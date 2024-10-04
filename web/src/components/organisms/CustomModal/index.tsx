import Modal from 'react-modal';
import { Container } from './styled';

interface ICustomModal {
  title: string;
  label: string;
  children: React.ReactNode;
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#27272a',
    color: 'white'
  },
  overlay: {
    background: '#00000099'
  }
};

const CustomModal = ({ 
  title,
  label,
  children,
  modalIsOpen,
  closeModal 
}: ICustomModal) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={label}
    >
      <Container>
        <header>
          <h2>{title}</h2>

          <button onClick={closeModal}>x</button>
        </header>
        
        <main>
          {children}
        </main>
      </Container>
    </Modal>
  );
};

export { CustomModal };
