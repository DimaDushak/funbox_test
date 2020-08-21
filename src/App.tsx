import React from 'react';
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import './main.global.css';

export const App = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
