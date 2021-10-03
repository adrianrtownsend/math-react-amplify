import React, { useContext } from 'react'
import { Box, Center, HStack, Pressable, useTheme } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const ListItem = ({
  item,
  onPress,
  style
}: any) => {

  const items = item.map(i => (
    <Center flex={1}>
      {
        Object.entries(i).map(([key, value]) => (
          <Box>{value}</Box>
        ))
      }
    </Center>
  ))

  return (
    <Pressable onPress={onPress}>
      <HStack>
        {items}
        <Center flex={1}><AntDesign name="right" size={24} color="black" /></Center>
      </HStack>
    </Pressable>
  )

}

export default ListItem

/**
 * Default layout...
 * - name
 * - attributes
 * - function
 * 
*/

/**
 * Example of data being passed back
 * 
 * // array of items
 * items = [
 *  // single item with its props > go through each in order
 *  {
 *    item: {
 *      id: '',
 *      label: {
 *        name: '',
 *        status: '',
 *      }
 *      attributes: '',
 *    },
 *    style: '',
 *    dispatch: {
 *      type: '',
 *      payload: {}
 *    }
 *  }
 * ] 
*/