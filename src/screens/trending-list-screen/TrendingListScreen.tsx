import { LiveNowFullCard } from 'components/live-now-full-card';
import { TagComponent } from 'components/tag';
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { LiveNowType } from 'types';

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
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/308051349_822795498735234_6626717630756918029_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=8Fmasc6zJyUAX94un-r&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDoar89-KUxxST6zA9LP6Vaicqz74TAUNg3ZEdVJquhTA&oe=63C5B5D1'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/127278824_425480728466715_4074811955057404138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=8Xgwz-NRM8YAX-w04II&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCpnCcKA35yG_NFypvrstf1hOHgMfsIlezvqx6E99yd_A&oe=63E7B09E'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'Weekly Mood Outfit 2023',
        imageUrl: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/84153863_227270748287715_8886420183057432576_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=eQOaIeTKO2QAX88-ozj&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAQTu8AcIm9hOAFoxviawlW2h82hmD0IV3KMVbL5ZwvEg&oe=63E7D24C'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/83747697_227270548287735_8957592584335654912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=SUWR9DQZ_3gAX-vE3Kn&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCwK2C-0XJ6rVzclzfrPpv7BwLwzD0FHMA6HEXxh7hQdA&oe=63E7E49A'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/49076984_131113484570109_8635049538362540032_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IPjN5Oyv6WEAX89SHc6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA7rv07EhtlvLC4xzLFM5C4uV8jL2kLym6snGa-Ahsdng&oe=63E7B530'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/275486791_699198924428226_7860055960221269278_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=lpsnPUnvOVsAX_4iaxL&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAKzTz5u0anXRAyJDzov0i6fR0nLkT3oP0lX1sRVCV5Fw&oe=63C48762'
    },
    {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/320176924_449785517365034_1986348079644495676_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QRFExzLNNjQAX8vZ2K3&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA9TVedpWcc93P9sVvk-KI2AERv9BFnKgVpi_xStqp4ZQ&oe=63C50D5F',
        name: 'Nguyễn Hường',
        views: 25,
        title: 'My Go-To Eyeshadow Look',
        imageUrl: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/275486791_699198924428226_7860055960221269278_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=lpsnPUnvOVsAX_4iaxL&tn=qZJEVaUWPqc06J6g&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAKzTz5u0anXRAyJDzov0i6fR0nLkT3oP0lX1sRVCV5Fw&oe=63C48762'
    }

]

export const LiveNowListScreen = () => {
    const [selected, setSelected] = useState(0)

    const renderItem = ({ item }:{item:LiveNowType}) => {
        return <LiveNowFullCard item={item}/>
    }

    const renderTag = () => {
        return TAGS.map(({ title }, index) => <TagComponent
            title={title}
            isActive={selected === index}
            onPress={() => { setSelected(index) }}
        />)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                >
                    {renderTag()}
                </ScrollView>
                <FlatList
                    data={FAKE_LIVE_NOW}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => 'trendingList' + index} 
                    style={{marginTop:15}}
                />
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