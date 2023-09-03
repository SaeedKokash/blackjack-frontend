import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";

  import { IoTrash } from "react-icons/io5";
  import { useDispatch, useSelector } from "react-redux";
  import { deleteAdminItem } from "../../store/actions/adminActions";
  
  function DeleteItem({ itemId }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.admin);
    const toast = useToast();
  
    const HandleDelete = () => {
        deleteAdminItem(dispatch, itemId, token, toast);
      onClose();
      };
  
    return (
      <>
        <Button
          onClick={onOpen}
          color="gery.100"
          bg="blackAlpha.300"
          _hover={{ color: "red", bg: "grey.100" }}
          alignItems="center"
          borderRadius="full"
        >
          {<IoTrash />}
          <span style={{ marginLeft: "0.6rem" }}>Delete</span>
        </Button>
  
        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Item
              </AlertDialogHeader>
  
              <AlertDialogBody>Are you sure you want to delete this item? You can't undo this action afterwards.</AlertDialogBody>
  
              <AlertDialogFooter>
                      <Button onClick={onClose}>Cancel</Button>
                      <Button colorScheme="red" onClick={HandleDelete} ml={3}>
                          Delete
                      </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }
  
  export default DeleteItem;
  