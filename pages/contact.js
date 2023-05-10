import ContactForm from '@/features/common/modules/ContactForm/ContactFormy'
import { TextContetBox } from '@/features/common/modules/TextContetBox/TextContetBoxy'
import DefaultLayout from '@/features/layouts/defaultLayout/DefaultLayouty'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const ContactPage = () => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#f7f8f9" paddingY="3rem">
            <Grid maxWidth="1280px" templateColumns="repeat(6, 1fr)" gap="5" margin="0 auto">
                <GridItem colSpan={{base: "6", sm: "4"}}>
                    <TextContetBox title="Contact Us">
                      <ContactForm />
                    </TextContetBox>
                </GridItem>
                <GridItem colSpan={{base: "6", sm: "2"}}>
                    <TextContetBox title="For Inqiuries Contact:">
                      <Text fontWeight="light" fontSize="1rem" padding="0.5rem" color="gray.600">
                        Lina Tubian<br />
                        Public Relations Manager <br />
                        774 NE 84th Miami, FL 33879
                      </Text>
                      <Text fontWeight="light" fontSize="1rem" padding="0.5rem" color="gray.600">
                        Lina Tubian<br />
                        Public Relations Manager <br />
                        774 NE 84th Miami, FL33879
                      </Text>
                      <Text fontWeight="light" fontSize="1rem" padding="0.5rem" color="gray.600">
                        Lina Tubian<br />
                        Public Relations Manager <br />
                        774 NE 84th Miami, FL33879
                      </Text>
                    </TextContetBox>
                </GridItem>
            </Grid>
        </Box>
    </DefaultLayout>
  )
}

export default ContactPage