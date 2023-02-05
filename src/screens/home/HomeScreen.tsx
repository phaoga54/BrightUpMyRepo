import { images } from 'assets/images';
import { HomeCardComponent } from 'components/home-card';
import { HomeHeaderComponent } from 'components/home-header';
import { LiveNowCardComponent } from 'components/live-now-card';
import { TagComponent } from 'components/tag';
import { VideoThumbnailComponent } from 'components/video-player-thumbnail';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import TrendingSvg from 'assets/svgs/Trending.svg'
import BrightIconSvg from 'assets/svgs/BrightIcon.svg'
import { TrendingCardComponent } from 'components/trending-card';
import { BrightCardComponent } from 'components/bright-card';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeNavigatorParams } from 'navigation/HomeNavigator';
import { HomeStack } from 'types/screens';

const TAGS = [
  { title: 'All' },
  { title: 'Prom' },
  { title: 'News' },
  { title: 'Brands' },
  { title: 'Brands 2' },
  { title: 'Brands 3' },
  { title: 'Brands 4' },
  { title: 'Brands 5' },
  { title: 'Brands 6' },
  { title: 'Brands 7' },
]

const FAKE_LIVE_NOW = [
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  }

]

const FAKE_TRENDING = [
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },
  {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?b=1&s=170667a&w=0&k=20&c=MC2f_T1Tioyi4gzm62JeohBuEMEiyM5UTgcQYMBrVjo='
  },

]

const Icon = <View style={{
  width: 20, height: 20, borderRadius: 20, backgroundColor: '#d5c6d4',
  justifyContent: 'center', alignItems: 'center'
}}>
  <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#C400C4' }} />
</View>
export const HomeScreen = () => {
  const { width, height } = useWindowDimensions()
  const [selected, setSelected] = useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<HomeNavigatorParams>>()

  const goToLiveNow = useCallback(()=>{
    navigation.navigate(HomeStack.liveNowListScreen)
  }, [])
  const goToTrending = useCallback(()=>{
    navigation.navigate(HomeStack.trendingListScreen)
  }, [])

  const renderTag = () => {
    return TAGS.map(({ title }, index) => <TagComponent
      title={title}
      isActive={selected === index}
      onPress={() => { setSelected(index) }}
    />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeaderComponent />
      <View style={{ marginTop: 15 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
          >
            {renderTag()}
          </ScrollView>

          <VideoThumbnailComponent
            onPress={() => { }}
            hasAds
          />
          <HomeCardComponent
            title='Live Now'
            headerIcon={Icon}
            onViewAll={goToLiveNow}
          >
            <FlatList
              renderItem={({ item }) => <LiveNowCardComponent
                item={item}
              />}
              data={FAKE_LIVE_NOW}
              keyExtractor={(_, index) => 'LiveNow' + index}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </HomeCardComponent>

          <HomeCardComponent
            title='Trending'
            headerIcon={<TrendingSvg />}
            onViewAll={goToTrending}
          >
            <FlatList
              renderItem={({ item }) => <TrendingCardComponent
                item={item}
              />}
              data={FAKE_TRENDING}
              keyExtractor={(_, index) => 'LiveNow' + index}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </HomeCardComponent>

          <HomeCardComponent
            title='Brights'
            headerIcon={<BrightIconSvg stroke={'#C400C4'}/>}
            onViewAll={() => { }}
          >
            <FlatList
              renderItem={({ item }) => <BrightCardComponent
                item={item}
              />}
              data={FAKE_LIVE_NOW}
              keyExtractor={(_, index) => 'LiveNow' + index}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </HomeCardComponent>
          <View style={{height:50}}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});