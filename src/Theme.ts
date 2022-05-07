import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    components:{
        Input:{
            defaultProps:{
                fontSize:"5xl",
            }
        },
        Switch:{
          sizes:{
            "2xl":{
              h:"13rem",
              w:"16rem"
            }
          }
        }
    },
    styles:{
      colors:{
          theme:{
              300:"purple.300"
          }
      },
      global:{
        "html":{
          fontSize:"62.5%"
        },
        "@media(max-width:700px)":{
          html:{
            fontSize:"52%"
          }
        }
      }
    }
})