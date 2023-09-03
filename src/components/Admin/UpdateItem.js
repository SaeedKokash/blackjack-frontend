import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Image,
  ListItem,
  List,
  VStack,
  Spacer,
  IconButton,
  Box,
  Textarea,
  Divider,
  Center,
  Table,
  Thead,
  Tr,
  Td,
  Spinner,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminItem } from "../../store/actions/adminActions";
import { DeleteIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { AiOutlineEdit } from "react-icons/ai";

function UpdateItem({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.admin);

  const [previewImage, setPreviewImage] = useState(item.images || []);
  const [uploading, setUploading] = useState(false);
  const [changeUploadingImage, setChangeUploadingImage] = useState(false);
  const [changeUploadingVideo, setChangeUploadingVideo] = useState(false);


  // states
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [images, setImages] = useState(item.images);
  const [specKey, setSpecKey] = useState();
  const [specValue, setSpecValue] = useState("");
  const [specifications, setSpecifications] = useState(item.details.specifications);
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState(item.details.list);
  const [video, setVideo] = useState(item.video);

  const validateImage = (e) => {
    setImages([]);
    setPreviewImage([]);
    setChangeUploadingImage(false);
    const files = Array.from(e.target.files);
    if (files.length > 8) {
      return alert("You can only upload 8 images");
    } else {
      for (let i = 0; i < files.length; i++) {
         if (!files[i].type.match(/image.*/)) {
          return alert("One of the files is not an image");
        } else {
          setImages((prev) => [...prev, files[i]]);
          setPreviewImage((prev) => [...prev, URL.createObjectURL(files[i])]);
          setChangeUploadingImage(true);
        }
      }
    }
  };

  const uploadImages = () => {
    if (images.length === 0) {
      return null;
    } else {
      const uploaders = images.map((image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
        return axios.post(process.env.REACT_APP_CLOUDINARY_IMAGE_URL, data).then((res) => {
          setPreviewImage((prev) => [...prev, res.data.secure_url]);
          setImages((prev) => [...prev, res.data.secure_url]);
          return res.data.secure_url;
        });
      });
      return Promise.all(uploaders).then((res) => {
        setPreviewImage([]);
        return res;
      });
    }
  };

  const validateVideo = (e) => {
    setVideo([]);
    setChangeUploadingVideo(false)
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      return alert("You can only upload 3 videos");
    } else {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 52428800) {
          return alert("One of the videos is larger than 50mb");
        } else 
        if (!files[i].type.match(/video.*/)) {
          return alert("One of the files is not a video");
        } else {
          setVideo((prev) => [...prev, files[i]]);
          setChangeUploadingVideo(true)
        }
      }
    }
  };

  const uploadVideo = () => {
    if (video === null) {
      return null;
    } else {
      setUploading(true);
      const uploaders = video.map((video) => {
        const data = new FormData();
        data.append("file", video);
        data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
        return axios.post(process.env.REACT_APP_CLOUDINARY_VIDEO_URL, data).then((res) => {
          setVideo((prev) => [...prev, res.data.secure_url]);
          return res.data.secure_url;
        });
      });
      return Promise.all(uploaders).then((res) => {
        setVideo([]);
        setUploading(false);
        return res;
      });
    }
  };

  const handleSpecChange = () => {
    setSpecifications(prevSpec => {
      return {
        ...prevSpec,
        [specKey]: specValue
      }
    });
    setSpecKey("");
    setSpecValue("");
  }

  const handleListChange = () => {
    setList(prevList => [...prevList, listItem]);
    setListItem("");
  }

  const handleRemoveSpec = (key) => {
    const {[key]: deletedSpec, ...rest} = specifications;
    setSpecifications(rest);
  }

  const handleRemoveListItem = (index) => {
    setList(prevList => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  }

  const handleRemoveImage = (index) => {
    setPreviewImage(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
    setImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  }

  const handleRemoveAllImages = () => {
    setPreviewImage([]);
    setImages([]);
  }

  const handleRemoveVideo = (index) => {
    setVideo(prevVideo => {
      const updatedVideo = [...prevVideo];
      updatedVideo.splice(index, 1);
      return updatedVideo;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedImages = changeUploadingImage ? await uploadImages() : images;
    const uploadedVideo = changeUploadingVideo ? await uploadVideo() : video;

    const newItem = {
      title: title,
      description: description,
      price: price,
      images: uploadedImages,
      details: {
        specifications: specifications,
        list: list,
      },
      video: uploadedVideo
    };
    
    updateAdminItem(dispatch, newItem, token, item._id);
    // addAdminItem(dispatch, newItem, token);
    onClose();

    // setTitle("");
    // setDescription("");
    // setPrice("");
    // setImages([]);
    // setSpecifications({});
    // setList([]);
    // setVideo([]);
  }

  return (
    <>
      <Button 
      onClick={onOpen}
      color="gery.100"
      bg="blackAlpha.300"
      _hover={{ color: "blue.100", bg: "grey.100" }}
      alignItems="center"
      borderRadius="full"
      >
        {<AiOutlineEdit />}
          <span style={{ marginLeft: "0.6rem" }}>Update</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}
      size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Item</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={(e) => handleSubmit(e)}>
            <ModalBody pb={6}>

              <Flex w="100%">
                
                {/* Title, Desc, Price Section Start */} 
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input placeholder="Title" name="title" 
                  value={title} onChange={(e) => setTitle(e.target.value)}
                  textTransform="capitalize"
                  />
                </FormControl>

                <FormControl w="33%">
                  <FormLabel>Price</FormLabel>
                  <Input placeholder="Price $" name="price" 
                  value={price} onChange={(e) => setPrice(e.target.value)}/>
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Write a short description about the product" name="description" 
                value={description} onChange={(e) => setDescription(e.target.value)}/>
              </FormControl>
              {/* Title, Desc, Price Section End */} 

              <Center>
                <Divider m={10} borderColor='blue.100' borderWidth="1px"/>
              </Center>

              {/* Specifications Section Start */} 
              <VStack w="100%">
                <FormControl mt={4}>
                  <FormLabel>Specifications Table</FormLabel>
                  <List spacing={3} p="1.5" borderRadius="lg" boxShadow="lg">
                    {Object.keys(specifications).map((key, index) => (
                      <ListItem key={index} fontSize="sm" >
                        <Flex w="100%" align="center">
                          <IconButton type="button" onClick={() => handleRemoveSpec(key)} icon={<DeleteIcon />}
                          colorScheme="red" size="xs" mr={2} borderRadius="full"
                          />
                          <Table variant="simple" size='sm'>
                            <Thead>
                              <Tr w="100%">
                                <Td w="50%">{key}</Td>
                                <Td w="50%">{specifications[key]}</Td>
                              </Tr>
                            </Thead>
                          </Table>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </FormControl>

                <Flex w="100%" align="center" gap="2">
                  <FormControl mt={4}>
                    <FormLabel>Specifications Key</FormLabel>
                    <Input placeholder="Specifications Key" name="specKey"
                    value={specKey} onChange={(e) => setSpecKey(e.target.value)}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Specifications Value</FormLabel>
                    <Input placeholder="Specifications Value" name="specValue"
                    value={specValue} onChange={(e) => setSpecValue(e.target.value)}
                    />
                  </FormControl>
                  <Button type="button" onClick={handleSpecChange} mt={12} w="5%" colorScheme="teal">Add</Button>
                </Flex>
              </VStack>
              {/* Specifications Section End */} 

              <Center>
                <Divider m={10} borderColor='blue.100' borderWidth="1px"/>
              </Center>

              {/* List Section Start */}
              <VStack>
                <FormControl mt={4}>
                    <FormLabel>List</FormLabel>
                    <List borderRadius="lg" boxShadow="lg">
                      {list.map((item, index) => (
                        <ListItem key={index} fontSize="sm">
                          <IconButton type="button" onClick={() => handleRemoveListItem(index)} icon={<DeleteIcon />}
                          colorScheme="red" size="xs" mr={2} borderRadius="full"
                          />
                          {item}
                          <Divider mt="2"/>
                        </ListItem>
                      ))}
                    </List>
                </FormControl>

                <Flex w="100%" gap="2">
                  <FormControl mt={4}>
                    <FormLabel>List Item</FormLabel>
                    <Input placeholder="List Item" name="listItem"
                    value={listItem} onChange={(e) => setListItem(e.target.value)}
                    />
                  </FormControl>
                  <Button type="button" onClick={handleListChange} mt={12} w="4%" colorScheme="teal">Add</Button>
                </Flex>
              </VStack>
              {/* List Section End */}

              <Center>
                <Divider m={10} borderColor='blue.100' borderWidth="1px"/>
              </Center>

              {/* Images Section Start */}  
              <FormControl pb="1em">
                <FormLabel>Upload Images</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  name="itemImage"
                  multiple="multiple"
                  placeholder="itemImage"
                  variant="auth"
                  m="4px"
                  w="100%"
                  onChange={(e) => validateImage(e)}
                />

                <FormHelperText textAlign="left" m="4px" w="100%">
                  You can upload up to 8 images.
                </FormHelperText>
              </FormControl>
          
              { previewImage && previewImage.length > 0 &&             
              <Flex wrap="wrap" spacing="6" rounded="lg" shadow="md" bg="blue.100" p="4">
                {previewImage &&
                  previewImage.map((image, index) => (
                    <Box key={index}>
                      <Image
                        src={image}
                        alt="preview"
                        w="120px"
                        h="120px"
                        m="4px"
                        borderRadius="full"
                        objectFit="cover"
                        boxShadow="md"
                        />

                      <IconButton type="button" onClick={() => handleRemoveImage(index)} icon={<DeleteIcon />}
                      colorScheme="red" mr={2} size="xs" borderRadius="full"
                      />
                    </Box>
                  ))}

                  <Spacer />
                  <IconButton type="button" onClick={handleRemoveAllImages} icon={<SmallCloseIcon/>}
                  colorScheme="red" size="xs" mr={2} borderRadius="full"
                  />
              </Flex>
              }
              {/* Images Section End */} 

              <Center>
                <Divider m={10} borderColor='blue.100' borderWidth="1px"/>
              </Center>

              {/* Video Section Start */} 
              <FormControl mt={4}>
                <FormLabel>Video</FormLabel>
                <Input 
                  type="file"
                  accept="video/*"
                  name="video"
                  multiple="multiple"
                  placeholder="video"
                  variant="auth"
                  m="4px"
                  w="100%"
                  onChange={(e) => validateVideo(e)}
                />
                <FormHelperText textAlign="left" m="4px" w="100%">
                  Maximum size is 50MB per video, and you can upload up to 3 videos.
                  <br/>
                  If you wish to remove one video, click the remove video button.
                  <br/>
                  If you wish to remove all the videos, click Choose File then click Cancel.
                </FormHelperText>
                <Button type="button" onClick={handleRemoveVideo} mt={4} w="100%" colorScheme="red">Remove Video</Button>
              </FormControl>

              { uploading && <Spinner size="lg" color="blue.100" /> }
              
              {/* Video Section End */}

              </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>

        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateItem;
