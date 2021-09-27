import { Center, Divider, Flex, Heading, Text, Stack } from 'native-base'

export const Attributes = (props) => {

  const items = props.data.map((element, index, array) => (
    <>
      <Center flex={1}>
        <Stack space={1} alignItems="center">
        <Heading size="xs" py="2">{element.label}</Heading>
        <Text>{element.value}</Text>
        </Stack>
      </Center>
      {(index !== (array.length - 1)) && <Divider orientation="vertical" mx="3" />}
    </>
  ))

  return (
    <>
      <Divider my="2" />
        <Flex mx="3" direction="row" justify="space-evenly">
          {items}
        </Flex> 
      <Divider my="2" />
    </>
  )
}