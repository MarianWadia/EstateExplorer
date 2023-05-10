import { Box, Checkbox, FormControl, Input, Textarea, Text, Button} from '@chakra-ui/react';
import React from 'react'
import {useForm} from "react-hook-form"

const ContactForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSumbit = (data) => console.log(data);
  return (
    <Box width="100%" backgroundColor="white" borderRadius="sm" color="gray.700">
        <form onSubmit={handleSubmit(onSumbit)}>
            <FormControl>
                <Input type="text" placeholder="Name" id="name" marginTop="1.3rem" {...register("name", {required: true})}/>
                <Input type="email" placeholder="Email" id="email" marginTop="1.3rem" {...register("email", {required: true})}/>
                <Input type="text" placeholder="Phone" id="phone" marginTop="1.3rem" {...register("phone", {required: true})}/>
                <Textarea placeholder="Your Message Here" id="message" marginTop="1.3rem" {...register("message", {required: true})}/>
                <Checkbox placeholder="GDPR" id="gdpr" marginTop="1.3rem" {...register("gdpr", {required: true})}>
                    <Text fontSize="0.8rem" color="gray.500">
                        I consent to having this website to store my detials for future communication 
                    </Text>
                </Checkbox>
            </FormControl>
            <Button colorScheme="blue" padding="2rem" type='submit' marginTop="2rem">
                Send Message
            </Button>
        </form>

    </Box>
  )
}

export default ContactForm