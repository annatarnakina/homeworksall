import React from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';
import WordsList from './WordsList';

function AppMain() {
    return (
    <React.Fragment>
            <SideMenu />
            <CardList />
            <WordsList />
    </React.Fragment>
    )
}

export default AppMain;