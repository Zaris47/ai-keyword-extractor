import {useState} from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = () => {

    const [text, setText]= useState('');

    const toast = useToast();

    const submitText = () => {
        if (text === '')
        {
            toast({
                title: 'Text Field is empty',
                description: 'Please enter some text to extract',
                status: 'error',
                duration: 5000,
                usClosable: false
                 });
        }
        else{
            console.log(text);
        }
    }
  return (
    <>
        <Textarea 
        bg='blue.400'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        onChange= { (e) => setText(e.target.value) }
        />

        <Button
        bg='blue.500'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'blue.700'}}
        onClick={submitText}

        >
            Extract Keyword
        </Button>
    </>
  )
}

export default TextInput