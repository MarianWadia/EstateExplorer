import { Box, Button, Checkbox, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react'
import {useForm} from "react-hook-form"

const HeroForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSumbit = (data) => console.log(data);
  return (
    <>
        <Box width="100%" borderRadius="sm" backgroundColor="white" color="gray.700" padding="1rem">
            <Text fontSize="xl" fontWeight="bold">Free PDF Guide</Text>
            <Text fontSize="lg">Complete the form below to download your guide</Text>
            <form onSubmit={handleSubmit(onSumbit)}>
              <FormControl>
                <Input marginTop="1.3rem" id='name' type='text' placeholder='Name' {...register("name", {required: true})}/>
                {errors.name && (
                  <Text fontSize="xs" color="red.400">{errors.name.type}</Text>
                )}
                <Flex gap={{base: "0", sm: "1rem"}} flexDirection={{base: "column", sm: "row"}}>
                  <Input marginTop="1.3rem" id='email' type='email' placeholder='Email' {...register("email", {required: true})}/>
                  {errors.name && (
                    <Text fontSize="xs" color="red.400">{errors.email.type}</Text>
                  )}
                  <Input marginTop="1.3rem" id='phone' type='text' placeholder='Phone' {...register("phone", {required: true})}/>
                  {errors.phone && (
                    <Text fontSize="xs" color="red.400">{errors.phone.type}</Text>
                  )}
                </Flex>
                <Checkbox marginTop="1.3rem" type='checkbox' id="gpdr" {...register("gdpr", {required: true})}>
                  I consent to haveing this website store my submitted info
                </Checkbox>
                {errors.gdpr && (
                    <Text fontSize="xs" color="red.400">{errors.gdpr.type}</Text>
                  )}
                  <Button width="100%" colorScheme="blue" marginTop="2rem" padding="2rem" fontSize="x-large">Download Now</Button>
              </FormControl>
            </form>
        </Box>
    </>
  )
}

export default HeroForm