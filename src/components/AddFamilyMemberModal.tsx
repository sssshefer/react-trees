import React, {FC, useState} from 'react';
import {
    Button,
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

interface AddFamilyMemberModalProps {
    isOpen: boolean;
    onModalClose: () => void;
    onSubmit: (familyMemberName: string) => void;
}

const AddFamilyMemberModal: FC<AddFamilyMemberModalProps> = ({isOpen, onModalClose, onSubmit}) => {
    const [name, setName] = useState('');

    return (
        <Modal isOpen={isOpen} onClose={onModalClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader> Add family member </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
                        <FormLabel> Family member name </FormLabel>
                        <Input value={name} placeholder="Enter family member name"
                               onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        disabled={!name}
                        onClick={() => {
                            onSubmit(name);
                            onModalClose()
                        }}
                    >Add</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddFamilyMemberModal;