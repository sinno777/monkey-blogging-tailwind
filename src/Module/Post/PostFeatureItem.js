import Overlay from 'components/layout/Overlay';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PostCategory from './PostCategory';
import PostMeta from './PostMeta';
import PostTitle from './PostTitle';
import PostImage from './PostImage';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase-app/firebase-config';

const PostFeatureItem = ({ data }) => {
    const { id, hot, category: categoryId, image, title, user, slug } = data
    const [category, setCategory] = useState({});
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchCategory = async () => {
            const docRef = doc(db, "categories", categoryId);
            // Fetch document
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCategory({ id: docSnap.id, ...docSnap.data() });
            }
        };
        fetchCategory()
    }, [categoryId]);

    useEffect(() => {
        const fetchUser = async () => {
            const docRef = doc(db, "users", user);
            // Fetch document
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUsers({ id: docSnap.id, ...docSnap.data() });
            }
        };
        fetchUser()
    }, [user]);
    console.log('postFeature users', users)
    return (
        <div className="cart-item w-auto h-[17rem] relative text-white  rounded-xl">
            <NavLink to={slug}>
                <PostImage srcSet={image} classContainer='h-[17rem]'></PostImage>
                <div className="content absolute inset-0 p-5 rounded-xl">
                    <div className="flex justify-between">
                        <PostCategory to={category.slug}>{category.name}</PostCategory>
                        <PostMeta data={users}></PostMeta>
                    </div>
                    <PostTitle className='text-xl font-medium pt-5'>{title} </PostTitle>
                </div>
            </NavLink>
        </div>
    );
};

export default PostFeatureItem;