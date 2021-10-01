import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Avatar, Center, CheckIcon, Divider, FlatList, Flex, Heading, HStack, NativeBaseProvider, Text, Box, ScrollView, Stack, VStack, Pressable, Image } from 'native-base'

import { EditOutlined, RightOutlined } from '@ant-design/icons'

import { Select } from '../components/Select'
import { Button } from '../components/Button'
import { Attributes } from '../components/Attributes'

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
  }
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
    <Center flex={1}>
      <Stack>
        <HStack space={3} alignItems="center">
          <Avatar
            bg="pink.600"
            size="xl"
            source={{
              uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
          ></Avatar>
          <VStack>
            <Text>Username</Text>
            <Text>Email</Text>
          </VStack>
          <EditOutlined />
        </HStack>
        <Text>Classes {'30'}</Text>
        <Attributes 
          data={stats}
        />
        <Select 
          data={filters}
        />
        <Divider my="2" />
        <Button
          label={'Test'}
          type={'create'}
          onPress={'test'}
        />
        {/*<ScrollView>
          <FlatList
            data={classes}
            renderItem={({item}) => (
              <Box
              my="2"
              rounded="md"
              >
                <HStack>
                  <Text>{item.grade}</Text>
                  <Text>{item.code}</Text>
                  <Text>{item.score}</Text>
                  <Divider orientation="vertical" mx="1" />
                  <RightOutlined />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>*/}
      </Stack>
    </Center>
  ) 
};

export default Profile;