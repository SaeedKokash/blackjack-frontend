import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
    
  },
  // color palette 1

    // #3d84a8
    // #ffffff
    // #569ec2
    // #2f6783
    // #e6e6e6
    // #7cb3cf

  
  colors: {
    blue: {
      100: "#7cb3cf",
      200: "#569ec2",
      300: "#3d84a8",
      400: "#2f6783",
    },

    maroon: {
        100: "#c5597e",
        200: "#ae3d64",
        300: "#88304e",
        400: "#622338",
    },

    white: {
      100: "#FFFFFF",
    },


    grey: {
      100: "#e6e6e6",
    },

    black: {
        100: "#222831",
        // 200: "#393E46",
        // 300: "#00ADB5",
    },

    yellow: {
        100: "#ffc900",
        // 200: "#fabc5f",
        // 300: "#F8A01B",
    },
    brown: {
        100: "#916B2A",
        // 200: "#fabc5f",
        // 300: "#F8A01B",
    },

    // #b57e10
    // #f9df7b

    // gradient background colors GOLD
    // #b57e10, #b57e10,  #f9df7b, #fff3a6, #f9df7b, #b57e10
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "white.100" : "white.100",
        color: props.colorMode === "light" ? "black.100" : "black.100",
      },
      font : {
        family: "Poppins",
      },
    }),
  },

  components: {
    Input: {
      variants: {
        primary: (props) => ({
          field: {
            bg: props.colorMode === "light" ? "white.100" : "white.100",
            borderRadius: "md",
            fontSize: "sm",
            border: "1px",
            borderColor: props.colorMode === "light" ? "blackAlpha.400" : "blackAlpha.400",
            _hover: {
              bg: props.colorMode === "light" ? "blackAlpha.200" : "blackAlpha.200",
              border: "1px",
              borderColor: props.colorMode === "light" ? "maroon.100" : "blue.100",
            },
            _focus: {
              border: "1px",
              borderColor: props.colorMode === "light" ? "maroon.100" : "blue.100",
            },
            _placeholder: {
              color: props.colorMode === "light" ? "blackAlpha.600" : "blackAlpha.600",
            },
          },
        }),
      },
    },

    Button: {
      variants: {
        cart: (props) => ({
          bg: props.colorMode === "light" ? "maroon.100" : "blue.100",
          color: props.colorMode === "light" ? "white" : "white",
          borderRadius: "lg",
          fontSize: "sm",
          borderColor: props.colorMode === "light" ? "maroon.100" : "blue.100",
          _hover: {
            bg: props.colorMode === "light" ? "maroon.400" : "blue.400",
          },
        }),
        back: (props) => ({
          bg: props.colorMode === "light" ? "white" : "white",
          color: props.colorMode === "light" ? "maroon.100" : "blue.200",
          borderRadius: "lg",
          fontSize: "sm",
          border: "1px",
          borderColor: props.colorMode === "light" ? "maroon.100" : "blue.200",
          _hover: {
            bg: props.colorMode === "light" ? "pink.100" : "gray.100",
            border: "1px",
          },
        }),
        submit: (props) => ({
          bg: props.colorMode === "light" ? "maroon.100" : "blue.200",
          color: props.colorMode === "light" ? "white" : "white",
          borderRadius: "lg",
          fontSize: "sm",
          borderColor: props.colorMode === "light" ? "maroon.100" : "blue.200",
          _hover: {
            bg: props.colorMode === "light" ? "maroon.400" : "blue.400",
          },
        }),
      },
    },

    Textarea: {
      variants: {
        primary: (props) => ({
          bg: props.colorMode === "light" ? "white.100" : "white.100",
          borderRadius: "md",
          fontSize: "sm",
          border: "1px",
          borderColor: props.colorMode === "light" ? "blackAlpha.400" : "blackAlpha.400",
          _hover: {
            bg: props.colorMode === "light" ? "blackAlpha.200" : "blackAlpha.200",
            border: "1px",
            borderColor: props.colorMode === "light" ? "maroon.100" : "blue.100",
          },
          _focus: {
            border: "1px",
            borderColor: props.colorMode === "light" ? "maroon.100" : "blue.100",
          },
          _placeholder: {
            color: props.colorMode === "light" ? "blackAlpha.600" : "blackAlpha.600",
          },
        }),
      },
    },

    FormLabel: {
      baseStyle: {
        fontWeight: "semibold",
      },
    },

    // make the Heading component use the Poppins font family by default
    Heading: {
      baseStyle: {
        fontFamily: "Poppins",
      },
    },
  },
});

export default theme;