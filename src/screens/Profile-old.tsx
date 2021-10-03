import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Avatar, Box, HStack, Text, VStack, StatusBar } from 'native-base'

import { EditOutlined } from '@ant-design/icons'

import { Select } from '../components/Select'
import { Attributes } from '../components/Attributes'
import { List } from '../components/List'

const resClasses = [
  {
    id: 1,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 2,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 3,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 4,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 5,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },{
    id: 6,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 7,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 8,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 9,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
  {
    id: 10,
    code: "ADD3523",
    teacher: "Ms. Jones",
    grade: "B",
    score: "85"
  },
];

// change to either context or mutations
const filters = [
  {
    label: 'Classes',
  },
  {
   label: 'Assignments'
  }
];

const stats = [
  { label: 'Classes', value: '8' },
  { label: 'Assignments', value: '30' }
]


const Profile = () => {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(() => {
      console.log('classes loaded', resClasses);
      return resClasses
    });
  }, []);

  return (
    <Box flex={1} p="5">
      <StatusBar />
      <Box flex="2">
        <HStack
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Avatar
            bg="pink.600"
            size="xl"
            source={{
              uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
          ></Avatar>
          <VStack>
            {/* Username */}
            <Text>{'student0123'}</Text>
            {/* Email */}
            <Text>{'testmail@mail.com'}</Text>
          </VStack>
          <EditOutlined />
        </HStack>
        <Attributes 
          data={stats}
        />
        <Select
          data={filters}
        />
      </Box>
      <Box flex="4">
        <List 
          data={classes}
        />
      </Box>
    </Box>
  ) 
};

export default Profile;