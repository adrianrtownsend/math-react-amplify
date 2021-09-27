import React, { useState } from 'react'

import { FlatList as NbFlatList } from 'native-base'

export const List = (props) => {

  return (
    <NbFlatList
      data={props.data}
    />
  )
}