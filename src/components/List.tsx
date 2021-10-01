import React, { useState } from 'react'

import { Box, FlatList as NbFlatList, HStack } from 'native-base'

export const List = (props) => {

  return (
    <NbFlatList
      data={props.data}
      renderItem={({ item }) => (
        <Box>
          <HStack justifyContent="space-around">
            
          </HStack>
        </Box>
      )}
    />
  )
}